import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Reveal } from '@/components/reveal';
import { site, type Locale } from '@/config/site';
import { localizedMetadata } from '@/lib/seo';

const factoryImage = '/images/pexels-nikolai-kolosov-10666081.webp';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return localizedMetadata(locale, 'about', `${t('title')} | ${site.name[locale]}`, t('intro'));
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const common = await getTranslations('common');
  return (
    <>
      <section className="about-hero">
        <Image
          className="about-hero-image"
          src={factoryImage}
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="about-hero-shade" aria-hidden="true" />
        <div className="container page-heading">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h1>{t('title')}</h1>
        </div>
      </section>
      <section className="container page-body about-body">
        <p className="about-intro">{t('intro')}</p>
        <div className="about-copy">
          <Reveal className="about-copy-block">
            <h2>{t('missionTitle')}</h2><p>{t('missionText')}</p>
          </Reveal>
          <Reveal className="about-copy-block" delay={0.06}>
            <h2>{t('productsTitle')}</h2><p>{t('productsText')}</p>
          </Reveal>
          <Reveal className="about-copy-block" delay={0.12}>
            <h2>{t('factoryTitle')}</h2>
            <p>{site.factory[locale]}</p>
            <a className="text-link" href={site.factoryMap} target="_blank" rel="noreferrer">
              {t('factoryMap')}
            </a>
          </Reveal>
          <Reveal className="about-copy-block" delay={0.18}>
            <h2>{t('workTitle')}</h2>
            <p>{t('workText')}</p>
            <a className="text-link" href={site.officeMap} target="_blank" rel="noreferrer">{t('officeMap')}</a>
          </Reveal>
          <Reveal className="about-copy-block">
            <h2>{t('supportTitle')}</h2><p>{t('supportText')}</p>
          </Reveal>
        </div>
        <div className="cta-actions about-actions">
          <Link className="button button-dark" href={`/${locale}/contact`}>{common('contactUs')}</Link>
        </div>
      </section>
    </>
  );
}
