import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { site } from '@/config/site';

export function WhatsAppFloat() {
  const t = useTranslations('contact');
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${site.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label={t('whatsappLink')}
    >
      <MessageCircle aria-hidden="true" size={23} />
      <span>WhatsApp</span>
    </a>
  );
}
