import type { Metadata } from 'next';
import type { Locale } from '@/config/site';
import { site } from '@/config/site';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com';

export function localizedMetadata(locale: Locale, path: string, title: string, description: string): Metadata {
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  const localizedPath = `/${locale}${cleanPath ? `/${cleanPath}` : ''}`;
  const languages = {
    ar: `${baseUrl}/ar${cleanPath ? `/${cleanPath}` : ''}`,
    en: `${baseUrl}/en${cleanPath ? `/${cleanPath}` : ''}`,
    'x-default': `${baseUrl}/ar${cleanPath ? `/${cleanPath}` : ''}`,
  };
  const image = `${baseUrl}/og`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: localizedPath,
      languages,
    },
    openGraph: {
      type: 'website',
      title,
      description,
      url: `${baseUrl}${localizedPath}`,
      siteName: site.name[locale],
      locale: locale === 'ar' ? 'ar_EG' : 'en_EG',
      images: [{ url: image, width: 1200, height: 630, alt: site.name[locale] }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data).replace(/</g, '\\u003c'),
  };
}

export const siteUrl = baseUrl;
