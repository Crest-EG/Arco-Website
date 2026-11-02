import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/config/site';
import type { Product } from '@/data/products';

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  const href = `/${locale}/products/${product.category}/${product.slug}`;
  const isPackageImage = product.category === 'crest-demo';
  return (
    <article className="product-card">
      <Link className={`product-image${isPackageImage ? ' is-package-image' : ''}`} href={href} tabIndex={-1} aria-hidden="true">
        <Image src={product.image} alt={product.name[locale]} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 30vw" />
      </Link>
      <div className="product-card-copy">
        <h3><Link href={href}>{product.name[locale]}</Link></h3>
        <p>{product.description[locale]}</p>
      </div>
    </article>
  );
}
