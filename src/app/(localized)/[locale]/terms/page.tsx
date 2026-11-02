import { getTranslations, setRequestLocale } from 'next-intl/server';
import { site, type Locale } from '@/config/site';
import { localizedMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  return localizedMetadata(locale, 'terms', `${t('termsTitle')} | ${site.name[locale]}`, t('termsTitle'));
}

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal');
  const sections = t.raw('terms') as Array<{ title: string; body: string }>;
  const common = await getTranslations('common');
  return (
    <>
      <section className="page-hero">
        <div className="container page-heading">
          <h1>{t('termsTitle')}</h1>
          <p>{common('lastUpdated')}</p>
        </div>
      </section>
      <article className="container page-body legal-content">
        {sections.map((section) => (
          <section className="legal-block" key={section.title}>
            <h2>{section.title}</h2><p>{section.body}</p>
          </section>
        ))}
      </article>
    </>
  );
}
