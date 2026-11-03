import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ProductCard } from '@/components/product-card';
import { JsonLd } from '@/components/json-ld';
import { getCategory, getProduct, products } from '@/data/products';
import { localizedMetadata, siteUrl } from '@/lib/seo';
import { site, type Locale } from '@/config/site';

export function generateStaticParams() {
  return products.map((product) => ({ category: product.category, slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; category: string; slug: string }> }) {
  const { locale, category, slug } = await params;
  const product = getProduct(slug);
  if (!product || product.category !== category) return {};
  return localizedMetadata(locale, `products/${category}/${slug}`, `${product.name[locale]} | ${site.name[locale]}`, product.description[locale]);
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ locale: Locale; category: string; slug: string }>;
}) {
  const { locale, category: categorySlug, slug } = await params;
  const product = getProduct(slug);
  const category = getCategory(categorySlug);
  if (!product || !category || product.category !== categorySlug) notFound();
  setRequestLocale(locale);
  const t = await getTranslations('products');
  const common = await getTranslations('common');
  const others = products.filter((item) => item.category === product.category && item.slug !== product.slug);
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: common('home'), item: `/${locale}` },
      { '@type': 'ListItem', position: 2, name: common('products'), item: `/${locale}/products` },
      { '@type': 'ListItem', position: 3, name: category.name[locale], item: `/${locale}/products/${category.slug}` },
      { '@type': 'ListItem', position: 4, name: product.name[locale], item: `/${locale}/products/${category.slug}/${product.slug}` },
    ],
  };
  const productData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name[locale],
    description: product.description[locale],
    image: `${siteUrl}${product.image}`,
    category: category.name[locale],
    brand: { '@type': 'Brand', name: 'Arco Chemicals' },
  };

  return (
    <>
      <JsonLd data={productData} />
      <JsonLd data={breadcrumbData} />
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label={common('breadcrumb')}>
            <Link href={`/${locale}`}>{common('home')}</Link><span aria-hidden="true">/</span>
            <Link href={`/${locale}/products`}>{common('products')}</Link><span aria-hidden="true">/</span>
            <Link href={`/${locale}/products/${category.slug}`}>{category.name[locale]}</Link><span aria-hidden="true">/</span>
            <span>{product.name[locale]}</span>
          </nav>
        </div>
      </section>
      <section className="container page-body">
        <div className="product-detail-layout">
          <div className="detail-image is-package-image">
            <Image src={product.image} alt={product.name[locale]} fill sizes="(max-width: 700px) 90vw, 45vw" priority />
          </div>
          <div className="detail-copy">
            <span className="product-category">{category.name[locale]}</span>
            <h1>{product.name[locale]}</h1>
            <p>{product.description[locale]}</p>
            <section className="detail-info">
              <h2>{t('composition')}</h2>
              <p>{product.composition[locale]}</p>
            </section>
            <section className="detail-info">
              <h2>{t('usage')}</h2>
              <p>{product.usage[locale]}</p>
            </section>
            <Link className="button button-dark details-cta" href={`/${locale}/contact?product=${product.slug}`}>{t('inquire')}</Link>
          </div>
        </div>
        {others.length > 0 && (
          <section className="related-section">
            <div className="section-heading"><h2>{t('related')}</h2></div>
            <div className="product-grid">
              {others.map((item) => <ProductCard product={item} locale={locale} key={item.slug} />)}
            </div>
          </section>
        )}
      </section>
    </>
  );
}
