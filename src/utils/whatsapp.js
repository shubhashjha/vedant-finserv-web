import { siteConfig } from '@/data/siteData';

export function buildWhatsAppUrl(formValues) {
  const message = [
    'Hello,',
    '',
    `Name: ${formValues.name || '-'}`,
    `Phone: ${formValues.phone || '-'}`,
    `City: ${formValues.city || '-'}`,
    `Loan Type: ${formValues.loanType || '-'}`,
    '',
    formValues.message || 'I am interested in your loan services.',
  ].join('\n');

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappDigits}?text=${encodedMessage}`;
}

