export const normalizeWhatsAppNumber = (value: string) => value.replace(/\D/g, "");

export const createWhatsAppUrl = (phone: string, message?: string) => {
  const number = normalizeWhatsAppNumber(phone);
  const baseUrl = `https://wa.me/${number}`;

  if (!message?.trim()) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message.trim())}`;
};
