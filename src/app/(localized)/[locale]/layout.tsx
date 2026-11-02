import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { WhatsAppFloat } from '@/components/whatsapp-float';
import { locales, site, type Locale } from '@/config/site';
import { routing } from '@/i18n/routing';
import '../../globals.css';

const font = localFont({
  src: '../../fonts/Montserrat-Arabic-Regular.woff2',
  display: 'swap',
  variable: '--font-arco',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Arco Chemicals | اركو للكيماويات',
  description: 'Egyptian manufacturer of agricultural pesticides and fertilizers.',
  applicationName: 'Arco Chemicals',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const common = await getTranslations({ locale, namespace: 'common' });
  const language = locale as Locale;

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={font.variable}>
        <NextIntlClientProvider messages={messages}>
          <a className="skip-link" href="#main-content">{common('skipLink')}</a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
          <WhatsAppFloat />
          <span className="visually-hidden">{site.name[language]}</span>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
