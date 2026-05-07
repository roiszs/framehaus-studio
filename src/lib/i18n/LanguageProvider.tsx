"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { dictionary, type Language } from "@/lib/i18n/dictionary";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  dict: (typeof dictionary)[Language];
};

const STORAGE_KEY = "framehaus-lang";
const LANGUAGE_EVENT = "framehaus-language-change";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "es";
}

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLang = window.localStorage.getItem(STORAGE_KEY);

  return isLanguage(savedLang) ? savedLang : "en";
}

function getServerLanguage(): Language {
  return "en";
}

function subscribeToLanguage(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("storage", callback);
  window.addEventListener(LANGUAGE_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(LANGUAGE_EVENT, callback);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore<Language>(
    subscribeToLanguage,
    getStoredLanguage,
    getServerLanguage
  );

  const setLang = useCallback((newLang: Language) => {
    window.localStorage.setItem(STORAGE_KEY, newLang);
    window.dispatchEvent(new Event(LANGUAGE_EVENT));
  }, []);

  const toggleLang = useCallback(() => {
    const currentLang = getStoredLanguage();
    setLang(currentLang === "en" ? "es" : "en");
  }, [setLang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      dict: dictionary[lang],
    }),
    [lang, setLang, toggleLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLang must be used inside LanguageProvider");
  }

  return context;
}
