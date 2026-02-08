import { createContext, useEffect, useState, ReactNode } from 'react';
import { Locale, translations, Translations } from './translations';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = 'magical-service-locale';

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && (stored === 'en' || stored === 'hi' || stored === 'gu')) {
      return stored as Locale;
    }
  } catch (error) {
    console.error('Failed to read locale from localStorage:', error);
  }
  
  return 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    } catch (error) {
      console.error('Failed to save locale to localStorage:', error);
    }
    
    // Update document language attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLocale;
    }
  };

  // Set initial document language
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const value: I18nContextType = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
