import type { MetadataRoute } from 'next';
import { locales } from '@/config/site';
import { categories, products } from '@/data/products';
import { siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/products', '/about', '/contact', '/privacy', '/terms'];
  const localizedPages = locales.flatMap((locale) => routes.map((route) => ({
    url: `${siteUrl}/${locale}${route}`,
    alternates: {
      languages: {
        ar: `${siteUrl}/ar${route}`,
        en: `${siteUrl}/en${route}`,
        'x-default': `${siteUrl}/ar${route}`,
      },
    },
  })));
  const categoryPages = locales.flatMap((locale) =>
    categories.map((category) => ({
      url: `${siteUrl}/${locale}/products/${category.slug}`,
    })),
  );
  const productPages = locales.flatMap((locale) => products.map((product) => ({
    url: `${siteUrl}/${locale}/products/${product.category}/${product.slug}`,
  })));
  return [...localizedPages, ...categoryPages, ...productPages];
}
