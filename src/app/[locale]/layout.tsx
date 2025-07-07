import './globals.css';
import { Inter } from 'next/font/google';
import Providers from './providers';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/src/i18n/routing';
// You already have this import, which is correct
import { getMessages } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export default async function LocaleLayout({
  children,
  params: { locale } // <-- A slightly cleaner way to destructure the locale
}: {
  children: React.ReactNode;
  // It's more conventional to type params directly, not as a Promise
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started

  // ***** FIX: Call getMessages to load the translations *****
  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    // This will catch any errors if the message file for a locale is missing.
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${locale === "ar" ? "font-arabic" : "font-sans"}`}>
        <Providers>
          {/* Now the 'messages' variable is defined and can be passed */}
          <NextIntlClientProvider locale={locale} messages={messages}>
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