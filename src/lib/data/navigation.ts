import type { Language } from "@/lib/i18n/dictionary";

type NavigationItem = {
  href: string;
  label: Record<Language, string>;
};

export const navigation: NavigationItem[] = [
  {
    href: "/",
    label: {
      en: "Home",
      es: "Inicio",
    },
  },
  {
    href: "/services",
    label: {
      en: "Services",
      es: "Servicios",
    },
  },
  {
    href: "/work",
    label: {
      en: "Work",
      es: "Portafolio",
    },
  },
  {
    href: "/packages",
    label: {
      en: "Packages",
      es: "Paquetes",
    },
  },
  {
    href: "/contact",
    label: {
      en: "Contact",
      es: "Contacto",
    },
  },
];
