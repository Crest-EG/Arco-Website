import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations('errors');
  const common = await getTranslations('common');
  return (
    <section className="container error-page">
      <p className="error-code">404</p>
      <h1>{t('notFoundTitle')}</h1>
      <p>{t('notFoundText')}</p>
      <div className="button-row">
        <Link className="button button-dark" href={`/${locale}`}>{common('backHome')}</Link>
        <Link className="button button-ghost" href={`/${locale}/products`}>{common('products')}</Link>
      </div>
    </section>
  );
}
