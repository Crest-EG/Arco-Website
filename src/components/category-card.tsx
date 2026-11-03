import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpLeft } from 'lucide-react';
import type { Category } from '@/data/products';

export function CategoryCard({ category, locale, index }: { category: Category; locale: 'ar' | 'en'; index: number }) {
  return (
    <Link className={`category-card category-${category.slug}`} href={`/${locale}/products/${category.slug}`}>
      <Image className="category-image" src={category.image} alt="" fill sizes="(max-width: 700px) 90vw, 45vw" />
      <span className="category-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      <span className="category-card-bottom">
        <span>
          <strong>{category.name[locale]}</strong>
          <small>{category.description[locale]}</small>
        </span>
        <ArrowUpLeft aria-hidden="true" size={24} />
      </span>
    </Link>
  );
}
