import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpLeft } from 'lucide-react';
import type { Category } from '@/data/products';

export function CategoryCard({ category, locale }: { category: Category; locale: 'ar' | 'en' }) {
  return (
    <Link className={`category-card category-${category.slug}`} href={`/${locale}/products/${category.slug}`}>
      <Image className="category-image" src={category.image} alt="" fill sizes="(max-width: 700px) 90vw, 45vw" />
      <span className="category-number" aria-hidden="true">{category.slug === 'pesticides' ? '01' : '02'}</span>
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
