"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "en" | "te";

interface LanguageContextType {
  language: Language;
  isTelugu: boolean;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  tr: (english: string, telugu: string) => string;
}

const STORAGE_KEY = "webbheads-language";

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  isTelugu: false,
  setLanguage: () => {},
  toggleLanguage: () => {},
  tr: (english) => english,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLanguage === "en" || savedLanguage === "te") {
        setLanguage(savedLanguage);
      }
    } catch {
      // Ignore storage errors and keep default language.
    }
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage errors.
    }

    document.documentElement.lang = language === "te" ? "te" : "en";
  }, [language, mounted]);

  const value = useMemo<LanguageContextType>(
    () => ({
      language,
      isTelugu: language === "te",
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === "en" ? "te" : "en")),
      tr: (english: string, telugu: string) => (language === "te" ? telugu : english),
    }),
    [language]
  );

  if (!mounted) {
    return <>{children}</>;
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
