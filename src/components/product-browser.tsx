'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/config/site';
import { categories, products, type CategorySlug } from '@/data/products';
import { ProductCard } from './product-card';

export function ProductBrowser({ initialCategory }: { initialCategory?: CategorySlug }) {
  const locale = useLocale() as Locale;
  const t = useTranslations('products');
  const common = useTranslations('common');
  const [category, setCategory] = useState<CategorySlug | 'all'>(initialCategory ?? 'all');
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () => products.filter((item) => {
      const matchesCategory = category === 'all' || item.category === category;
      const matchesSearch = `${item.name[locale]} ${item.description[locale]}`.toLocaleLowerCase(locale).includes(query.toLocaleLowerCase(locale));
      return matchesCategory && matchesSearch;
    }),
    [category, locale, query],
  );

  return (
    <>
      <div className="product-controls">
        <div className="category-tabs" role="group" aria-label={t('all')}>
          <button type="button" className={category === 'all' ? 'active' : ''} onClick={() => setCategory('all')}>{t('all')}</button>
          {categories.map((item) => (
            <button type="button" className={category === item.slug ? 'active' : ''} key={item.slug} onClick={() => setCategory(item.slug)}>
              {item.name[locale]}
            </button>
          ))}
        </div>
        <label className="search-field">
          <Search size={18} aria-hidden="true" />
          <span className="visually-hidden">{t('searchLabel')}</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('searchPlaceholder')} />
        </label>
      </div>
      {filtered.length ? (
        <div className="product-grid">
          {filtered.map((product) => <ProductCard key={product.slug} product={product} locale={locale} />)}
        </div>
      ) : (
        <div className="empty-state">
          <p>{t('empty')}</p>
          <Link className="button button-dark" href={`/${locale}/contact`}>{common('contactUs')}</Link>
        </div>
      )}
    </>
  );
}
