import en from '@/locale/en.json';

export default function useStringResources() {
  const messages = {
    "en-GB": en,
    "en-UK": en,
    "en": en,
    "en-US": en,
  }
  const locale = navigator.language || 'en';
  return messages[locale];
}