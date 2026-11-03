'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useLocale, useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { site } from '@/config/site';
import { products } from '@/data/products';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
  product: string;
  country: string;
  channel: 'whatsapp' | 'email';
  website: string;
};

function openWhatsApp(phone: string, text: string) {
  const webLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  window.location.assign(webLink);
}

export function ContactForm({ productFromQuery = '' }: { productFromQuery?: string }) {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [submittedChannel, setSubmittedChannel] = useState<FormValues['channel'] | null>(null);
  const [preparing, setPreparing] = useState(false);
  const schema = useMemo(() => z.object({
    name: z.string().trim().min(1, t('required')),
    email: z.string().trim().email(t('invalidEmail')).or(z.literal('')),
    phone: z.string().trim(),
    message: z.string().trim().min(1, t('required')),
    product: z.string(),
    country: z.string(),
    channel: z.enum(['whatsapp', 'email']),
    website: z.string(),
  }).superRefine((value, context) => {
    if (!value.email && !value.phone) {
      context.addIssue({ code: 'custom', message: t('contactRequired'), path: ['phone'] });
    }
  }), [t]);

  const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      product: products.some((product) => product.slug === productFromQuery) ? productFromQuery : '',
      country: '',
      channel: 'whatsapp',
      website: '',
    },
  });
  const selectedChannel = watch('channel');

  const submit = (values: FormValues) => {
    if (values.website) return;
    const productName = products.find((product) => product.slug === values.product)?.name[locale as 'ar' | 'en'] ?? '';
    const payload = {
      ...values,
      productName,
      locale,
      timestamp: new Date().toISOString(),
    };
    const endpoint = process.env.NEXT_PUBLIC_SHEET_ENDPOINT;
    setPreparing(true);
    if (endpoint) {
      const body = new URLSearchParams({ payload: JSON.stringify(payload) });
      void fetch(endpoint, { method: 'POST', mode: 'no-cors', body, keepalive: true })
        .catch((error: unknown) => console.error('Could not record the inquiry with the configured endpoint.', error));
    }

    const message = [
      `${t('whatsappName')}: ${values.name}`,
      values.email ? `${t('whatsappEmail')}: ${values.email}` : '',
      values.phone ? `${t('whatsappPhone')}: ${values.phone}` : '',
      productName ? `${t('whatsappProduct')}: ${productName}` : '',
      values.country ? `${t('whatsappCountry')}: ${values.country}` : '',
      `${t('whatsappMessage')}: ${values.message}`,
      `${t('whatsappLocale')}: ${locale}`,
    ].filter(Boolean).join('\n');

    setSubmitted(true);
    setSubmittedChannel(values.channel);
    window.setTimeout(() => setPreparing(false), 900);
    if (values.channel === 'email' && site.email) {
      const subject = encodeURIComponent(`Arco Chemicals inquiry${productName ? ` - ${productName}` : ''}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(message)}`;
    } else {
      openWhatsApp(site.whatsappNumber, message);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit(submit)} noValidate>
      <h2>{t('formTitle')}</h2>
      <label className="field">
        <span>{t('name')} *</span>
        <input autoComplete="name" {...register('name')} placeholder={t('namePlaceholder')} aria-invalid={Boolean(errors.name)} />
        {errors.name && <span className="field-error">{errors.name.message}</span>}
      </label>
      <div className="field-row">
        <label className="field">
          <span>{t('emailOrPhone')}</span>
          <input type="email" autoComplete="email" {...register('email')} placeholder={t('emailPlaceholder')} aria-invalid={Boolean(errors.email)} />
          {errors.email && <span className="field-error">{errors.email.message}</span>}
        </label>
        <label className="field">
          <span>{t('phone')}</span>
          <input type="tel" autoComplete="tel" {...register('phone')} placeholder={t('phonePlaceholder')} aria-invalid={Boolean(errors.phone)} />
          {errors.phone && <span className="field-error">{errors.phone.message}</span>}
        </label>
      </div>
      <div className="field-row">
        <label className="field">
          <span>{t('product')}</span>
          <select {...register('product')}>
            <option value="">{t('selectProduct')}</option>
            {products.map((product) => (
              <option value={product.slug} key={product.slug}>{product.name[locale as 'ar' | 'en']}</option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>{t('country')}</span>
          <input autoComplete="country-name" {...register('country')} />
        </label>
      </div>
      <label className="field">
        <span>{t('message')} *</span>
        <textarea rows={5} {...register('message')} placeholder={t('messagePlaceholder')} aria-invalid={Boolean(errors.message)} />
        {errors.message && <span className="field-error">{errors.message.message}</span>}
      </label>
      <div className="field">
        <span id="contact-channel-label">{t('channel')}</span>
        <input type="hidden" {...register('channel')} />
        <div className="channel-options" role="group" aria-labelledby="contact-channel-label">
          <button
            className={`button channel-option${selectedChannel === 'whatsapp' ? ' is-selected' : ''}`}
            type="button"
            aria-pressed={selectedChannel === 'whatsapp'}
            onClick={() => setValue('channel', 'whatsapp', { shouldDirty: true, shouldValidate: true })}
          >
            {t('whatsapp')}
          </button>
          {site.email && (
            <button
              className={`button channel-option${selectedChannel === 'email' ? ' is-selected' : ''}`}
              type="button"
              aria-pressed={selectedChannel === 'email'}
              onClick={() => setValue('channel', 'email', { shouldDirty: true, shouldValidate: true })}
            >
              {t('emailChannel')}
            </button>
          )}
        </div>
      </div>
      <label className="honeypot" aria-hidden="true">
        {t('honeypot')}
        <input tabIndex={-1} autoComplete="off" {...register('website')} />
      </label>
      <button className="button button-dark form-submit" type="submit" disabled={isSubmitting || preparing}>
        {isSubmitting || preparing ? t('sending') : selectedChannel === 'email' ? t('emailSubmit') : t('submit')}
      </button>
      <p className="form-note">
        {selectedChannel === 'email' ? t('emailSendNote') : t('sendNote')}
      </p>
      <p className="form-status" role="status" aria-live="polite">
        {submitted
          ? submittedChannel === 'email' ? t('emailSuccess') : t('success')
          : ''}
      </p>
    </form>
  );
}
