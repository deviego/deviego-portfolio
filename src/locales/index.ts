import { createI18n } from 'next-international'
import type Locale from './en'

export const { useI18n, I18nProvider, getLocaleProps } = createI18n<
  typeof Locale
>({
  en: async () => await import('./en'),
  pt: async () => await import('./pt')
})
