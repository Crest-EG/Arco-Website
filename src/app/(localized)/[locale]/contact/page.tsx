import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ContactForm } from '@/components/contact-form';
import { FaqList } from '@/components/faq-list';
import { site, type Locale } from '@/config/site';
import { localizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return localizedMetadata(locale, 'contact', `${t('title')} | ${site.name[locale]}`, t('intro'));
}

export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ product?: string | string[] }>;
}) {
  const { locale } = await params;
  const query = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations('contact');
  const productFromQuery = Array.isArray(query.product) ? query.product[0] : query.product;
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
        <div className="contact-layout">
          <ContactForm productFromQuery={productFromQuery} />
          <aside className="contact-aside">
            <div className="contact-info-card">
              <h2>{t('contactDetails')}</h2>
              <a href={`tel:${site.phoneInternational.replaceAll(' ', '')}`} dir="ltr">{site.phone}</a>
              <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a>
              <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
              <p className="office-callout">{t('officeNote')}</p>
            </div>
            <div className="contact-info-card">
              <h2>{t('factoryLocation')}</h2>
              <p>{site.factory[locale]}</p>
              <a className="map-link" href={site.factoryMap} target="_blank" rel="noreferrer">
                {t('factoryMap')}
              </a>
            </div>
            <div className="contact-info-card">
              <h2>{t('officeLocation')}</h2>
              <p>{site.office[locale]}</p>
              <a className="map-link" href={site.officeMap} target="_blank" rel="noreferrer">
                {t('officeMap')}
              </a>
            </div>
          </aside>
        </div>
        <FaqList />
      </section>
    </>
  );
}
