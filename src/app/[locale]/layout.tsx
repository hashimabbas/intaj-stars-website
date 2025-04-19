import './globals.css';
import { Inter } from 'next/font/google';
import Providers from './providers';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import { getMessages } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'] });


// export async function generateStaticParams() {
//   return i18n.locales.map((locale) => ({ locale }));
// }

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${locale === "ar" ? "font-arabic" : "font-sans"
        }`}>

        <Providers>
          <NextIntlClientProvider locale={locale}
            messages={messages}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <main>{children}</main>
              <Footer />
            </ThemeProvider>
          </NextIntlClientProvider>

        </Providers>
      </body>
    </html>
  );
}