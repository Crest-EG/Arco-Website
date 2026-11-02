'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function LocaleError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useTranslations('errors');
  const common = useTranslations('common');
  const locale = useLocale();
  return (
    <section className="container error-page">
      <p className="error-code">!</p>
      <h1>{t('errorTitle')}</h1>
      <p>{t('errorText')}</p>
      <div className="button-row">
        <button className="button button-dark" type="button" onClick={reset}>{t('retry')}</button>
        <Link className="button button-ghost" href="/">{common('backHome')}</Link>
        <Link className="button button-ghost" href="/products">{common('products')}</Link>
      </div>
      <span className="visually-hidden">{locale}</span>
    </section>
  );
}
