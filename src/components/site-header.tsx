'use client';

import Image from 'next/image';
import NextLink from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Languages, Menu, X } from 'lucide-react';
import type { MouseEvent } from 'react';
import type { Locale } from '@/config/site';
import { site } from '@/config/site';
import { Link as LocaleLink, usePathname, useRouter } from '@/i18n/navigation';

export function SiteHeader() {
  const t = useTranslations('nav');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const otherLocale = locale === 'ar' ? 'en' : 'ar';
  const switchLocale = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    router.replace(`${pathname}${window.location.search}${window.location.hash}`, { locale: otherLocale });
    setMenuOpen(false);
  };
  const items = [
    { href: `/${locale}`, label: t('home') },
    { href: `/${locale}/products`, label: t('products') },
    { href: `/${locale}/about`, label: t('about') },
    { href: `/${locale}/contact`, label: t('contact') },
  ];

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header-inner">
        <NextLink className="brand-link" href={`/${locale}`} aria-label={site.name[locale]}>
          <Image
            src="/logo/arco-full-black.svg"
            alt={site.name[locale]}
            width={180}
            height={68}
            priority
          />
        </NextLink>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label={t('mainNavigation')}>
          {items.map((item) => (
            <NextLink key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </NextLink>
          ))}
          <LocaleLink className="language-link" href={pathname} locale={otherLocale} onClick={switchLocale}>
            <Languages size={17} aria-hidden="true" />
            {t('language')}
          </LocaleLink>
          <NextLink className="button button-dark nav-cta" href={`/${locale}/contact`} onClick={() => setMenuOpen(false)}>
            {t('contactCta')}
          </NextLink>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? t('closeMenu') : t('openMenu')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
