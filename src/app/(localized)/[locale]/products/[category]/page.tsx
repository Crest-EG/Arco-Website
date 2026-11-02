import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ProductBrowser } from '@/components/product-browser';
import { JsonLd } from '@/components/json-ld';
import { categories, getCategory, type CategorySlug } from '@/data/products';
import { site, type Locale } from '@/config/site';
import { localizedMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; category: string }> }) {
  const { locale, category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const t = await getTranslations({ locale, namespace: 'products' });
  return localizedMetadata(locale, `products/${slug}`, `${category.name[locale]} | ${site.name[locale]}`, t('categoryIntro'));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: Locale; category: string }>;
}) {
  const { locale, category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('products');
  const common = await getTranslations('common');
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: common('home'), item: `/${locale}` },
      { '@type': 'ListItem', position: 2, name: common('products'), item: `/${locale}/products` },
      { '@type': 'ListItem', position: 3, name: category.name[locale], item: `/${locale}/products/${category.slug}` },
    ],
  };
  return (
    <>
      <JsonLd data={breadcrumbData} />
      <section className="page-hero">
        <div className="container page-heading">
          <nav className="breadcrumbs" aria-label={common('breadcrumb')}>
            <Link href={`/${locale}`}>{common('home')}</Link><span aria-hidden="true">/</span>
            <Link href={`/${locale}/products`}>{common('products')}</Link><span aria-hidden="true">/</span>
            <span>{category.name[locale]}</span>
          </nav>
          <p className="eyebrow">{t('eyebrow')}</p>
          <h1>{category.name[locale]}</h1>
          <p>{t('categoryIntro')}</p>
        </div>
      </section>
      <section className="container page-body">
        <div className="category-intro">{category.description[locale]}</div>
        <ProductBrowser initialCategory={slug as CategorySlug} />
        <p className="demo-callout">{common('demoNote')}</p>
      </section>
    </>
  );
}
