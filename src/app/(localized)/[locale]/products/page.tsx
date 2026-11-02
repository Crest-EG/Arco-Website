import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ProductBrowser } from '@/components/product-browser';
import { localizedMetadata } from '@/lib/seo';
import { site, type Locale } from '@/config/site';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'products' });
  return localizedMetadata(locale, 'products', `${t('title')} | ${site.name[locale]}`, t('intro'));
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('products');
  return (
    <>
      <section className="page-hero">
        <div className="container page-heading">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h1>{t('title')}</h1>
          <p>{t('intro')}</p>
        </div>
      </section>
      <section className="container page-body">
        <ProductBrowser />
        <p className="demo-callout">{(await getTranslations('common'))('demoNote')}</p>
      </section>
    </>
  );
}
