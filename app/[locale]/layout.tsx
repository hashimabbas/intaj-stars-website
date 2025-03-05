import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Providers from './providers'
import { Locale, i18n } from '@/i18n.config'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Intaj Stars Technology Inc',
  description: 'Driving progress through cutting-edge technology.'
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
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
        </Providers>
      </body>
    </html>
  )
}