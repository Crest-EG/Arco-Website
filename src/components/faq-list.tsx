import { useLocale, useTranslations } from 'next-intl';
import { faq } from '@/data/faq';
import { JsonLd } from './json-ld';

export function FaqList() {
  const locale = useLocale() as 'ar' | 'en';
  const t = useTranslations('contact');
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question[locale],
      acceptedAnswer: { '@type': 'Answer', text: item.answer[locale] },
    })),
  };

  return (
    <section className="faq-section">
      <JsonLd data={structuredData} />
      <div className="section-heading">
        <p className="eyebrow">{t('contactDetails')}</p>
        <h2>{t('faqTitle')}</h2>
      </div>
      <div className="faq-list">
        {faq.map((item) => (
          <details className="faq-item" key={item.question.en}>
            <summary>{item.question[locale]}</summary>
            <p>{item.answer[locale]}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
