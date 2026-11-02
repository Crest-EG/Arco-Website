import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/config/site';
import { site } from '@/config/site';
import { categories } from '@/data/products';

export function SiteFooter() {
  const t = useTranslations('footer');
  const common = useTranslations('common');
  const locale = useLocale() as Locale;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href={`/${locale}`} aria-label={site.name[locale]}>
            <Image src="/logo/arco-full-white.svg" alt={site.name[locale]} width={180} height={64} />
          </Link>
          <p>{t('tagline')}</p>
        </div>
        <div>
          <h2>{t('quickLinks')}</h2>
          <ul className="footer-links">
            <li><Link href={`/${locale}`}>{common('home')}</Link></li>
            <li><Link href={`/${locale}/products`}>{common('products')}</Link></li>
            <li><Link href={`/${locale}/about`}>{common('about')}</Link></li>
            <li><Link href={`/${locale}/contact`}>{common('contact')}</Link></li>
          </ul>
        </div>
        <div>
          <h2>{t('categories')}</h2>
          <ul className="footer-links">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/${locale}/products/${category.slug}`}>{category.name[locale]}</Link>
              </li>
            ))}
            <li><Link href={`/${locale}/privacy`}>{t('privacy')}</Link></li>
            <li><Link href={`/${locale}/terms`}>{t('terms')}</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h2>{t('contact')}</h2>
          <a href={`https://wa.me/${site.whatsappNumber}`} dir="ltr">{site.phone}</a>
          <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
          <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
          <a href={site.factoryMap} target="_blank" rel="noreferrer">{t('factory')}</a>
          <a href={site.officeMap} target="_blank" rel="noreferrer">{t('office')}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.name[locale]}. {t('rights')}</span>
        <span>{site.office[locale]}</span>
      </div>
    </footer>
  );
}
