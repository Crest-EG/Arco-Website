import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ArrowUpLeft, Factory, Headset, Leaf, Mail, MessageCircle, Truck } from 'lucide-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Reveal } from '@/components/reveal';
import { CategoryCard } from '@/components/category-card';
import { ProductCard } from '@/components/product-card';
import { JsonLd } from '@/components/json-ld';
import { categories, products } from '@/data/products';
import { site, type Locale } from '@/config/site';
import { localizedMetadata, siteUrl } from '@/lib/seo';

const wheatFieldImage = '/images/pexels-stitch-20280081.jpg';

const reasons = [
  { icon: Factory, title: 'why1Title', text: 'why1Text' },
  { icon: Leaf, title: 'why2Title', text: 'why2Text' },
  { icon: Headset, title: 'why3Title', text: 'why3Text' },
  { icon: Truck, title: 'why4Title', text: 'why4Text' },
] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return localizedMetadata(locale, '', t('title'), t('description'));
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const common = await getTranslations('common');
  const featured = products.filter((product) => product.category === 'crest-demo' && product.featured);
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'Manufacturer'],
    name: site.name[locale],
    legalName: site.legalName,
    url: siteUrl,
    logo: `${siteUrl}/logo/arco-full-black.svg`,
    telephone: site.phoneInternational,
    sameAs: [site.instagram, site.facebook],
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.factory[locale],
      addressLocality: 'Alexandria',
      addressCountry: 'EG',
    },
  };

  return (
    <>
      <JsonLd data={organizationData} />
      <section className="hero">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">{t('eyebrow')}</p>
            <h1>{t('heroTitle')}</h1>
            <p>{t('heroText')}</p>
            <div className="button-row">
              <Link className="button button-dark" href={`/${locale}/products`}>{common('browseProducts')} <ArrowUpLeft size={18} aria-hidden="true" /></Link>
              <Link className="button button-ghost" href={`/${locale}/contact`}>{common('contactUs')}</Link>
            </div>
          </Reveal>
          <Reveal className="hero-visual" delay={0.14}>
            <Image
              className="hero-photo"
              src={wheatFieldImage}
              alt=""
              fill
              sizes="(max-width: 700px) 90vw, 48vw"
              priority
            />
            <Image className="hero-mark" src="/logo/arco-icon.svg" alt="" width={88} height={88} />
          </Reveal>
        </div>
        <a className="hero-scroll" href="#about"><ArrowDown size={16} aria-hidden="true" /> {t('scroll')}</a>
      </section>

      <section className="section home-section about-band" id="about">
        <div className="container split-about">
          <Reveal className="section-heading">
            <p className="eyebrow">{t('aboutEyebrow')}</p>
            <h2>{t('aboutTitle')}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="large-copy">{t('aboutText')}</p>
            <Link className="text-link" href={`/${locale}/about`}>{common('viewDetails')} <ArrowUpLeft size={18} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section home-section">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">{t('productsEyebrow')}</p>
            <h2>{t('productsTitle')}</h2>
            <p>{t('productsText')}</p>
          </Reveal>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Reveal key={category.slug} delay={index * 0.1}>
                <CategoryCard category={category} locale={locale} />
              </Reveal>
            ))}
          </div>
          <div className="section-heading featured-heading">
            <p className="eyebrow">{t('featured')}</p>
          </div>
          {featured.length ? (
            <div className="product-grid">
              {featured.map((product) => <ProductCard key={product.slug} product={product} locale={locale} />)}
            </div>
          ) : <p>{t('featuredEmpty')}</p>}
          <p className="demo-callout">{common('demoNote')}</p>
          <Link className="text-link" href={`/${locale}/products`}>{common('viewAll')} <ArrowUpLeft size={18} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section home-section">
        <div className="container">
          <Reveal className="section-heading">
            <p className="eyebrow">{t('whyEyebrow')}</p>
            <h2>{t('whyTitle')}</h2>
          </Reveal>
          <div className="why-grid">
            {reasons.map(({ icon: Icon, title, text }, index) => (
              <Reveal className="why-card" key={title} delay={index * 0.06}>
                <span className="card-number"><Icon size={28} aria-hidden="true" /></span>
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {site.servicesEnabled && (
        <section className="section home-section services-band">
          <div className="container">
            <Reveal className="section-heading">
              <p className="eyebrow">{t('servicesEyebrow')}</p>
              <h2>{t('servicesTitle')}</h2>
            </Reveal>
            <div className="services-grid">
              {[1, 2, 3].map((number) => (
                <Reveal className="service-card" key={number} delay={number * 0.08}>
                  <h3>{t(`service${number}Title`)}</h3>
                  <p>{t(`service${number}Text`)}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta-band">
        <div className="container">
          <div className="cta-content">
            <div>
              <h2>{t('ctaTitle')}</h2>
              <p>{t('ctaText')}</p>
            </div>
            <div className="cta-actions">
              <a className="button button-dark" href={`https://wa.me/${site.whatsappNumber}`} dir="ltr">
                <MessageCircle size={18} aria-hidden="true" /> {site.phone}
              </a>
              <a className="button button-ghost" href={`mailto:${site.email}`}>
                <Mail size={18} aria-hidden="true" /> {common('emailUs')}
              </a>
            </div>
          </div>
          <div className="cta-highlights">
            {reasons.slice(0, 3).map(({ icon: Icon, title, text }) => (
              <article className="cta-highlight" key={title}>
                <Icon size={22} aria-hidden="true" />
                <div>
                  <h3>{t(title)}</h3>
                  <p>{t(text)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
