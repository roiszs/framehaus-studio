import type { PackageItem } from "@/types";

export const packages: PackageItem[] = [
  {
    slug: "essential-session",
    name: {
      en: "Essential Session",
      es: "Sesión Essential",
    },
    description: {
      en: "A focused session for professional portraits, personal photos, or quick visual updates.",
      es: "Una sesión enfocada para retratos profesionales, fotos personales o actualizaciones visuales rápidas.",
    },
    priceLabel: {
      en: "Starting at $450",
      es: "Desde $450",
    },
    bestFor: {
      en: "Best for portraits and personal sessions",
      es: "Ideal para retratos y sesiones personales",
    },
    includes: [
      {
        en: "1 hour session",
        es: "1 hora de sesión",
      },
      {
        en: "1 location",
        es: "1 locación",
      },
      {
        en: "15 edited photos",
        es: "15 fotos editadas",
      },
      {
        en: "Private digital gallery",
        es: "Galería digital privada",
      },
    ],
  },
  {
    slug: "brand-story",
    featured: true,
    name: {
      en: "Brand Story",
      es: "Brand Story",
    },
    description: {
      en: "A premium session for founders, professionals, and brands that need stronger visual presence.",
      es: "Una sesión premium para fundadores, profesionales y marcas que necesitan una presencia visual más fuerte.",
    },
    priceLabel: {
      en: "Starting at $950",
      es: "Desde $950",
    },
    bestFor: {
      en: "Best for personal brands and business websites",
      es: "Ideal para marcas personales y websites de negocio",
    },
    includes: [
      {
        en: "2–3 hour session",
        es: "Sesión de 2 a 3 horas",
      },
      {
        en: "Creative direction",
        es: "Dirección creativa",
      },
      {
        en: "2 outfit changes",
        es: "2 cambios de outfit",
      },
      {
        en: "35 edited photos",
        es: "35 fotos editadas",
      },
      {
        en: "Moodboard before the shoot",
        es: "Moodboard previo a la sesión",
      },
    ],
  },
  {
    slug: "content-production-day",
    name: {
      en: "Content Production Day",
      es: "Día de producción de contenido",
    },
    description: {
      en: "A half-day production for businesses that need photo and video assets for a full month.",
      es: "Una producción de medio día para negocios que necesitan foto y video para todo un mes.",
    },
    priceLabel: {
      en: "Starting at $1,800",
      es: "Desde $1,800",
    },
    bestFor: {
      en: "Best for campaigns, ecommerce, and social media",
      es: "Ideal para campañas, ecommerce y redes sociales",
    },
    includes: [
      {
        en: "Half-day production",
        es: "Producción de medio día",
      },
      {
        en: "Photo and short-form video",
        es: "Foto y video corto",
      },
      {
        en: "60 edited photos",
        es: "60 fotos editadas",
      },
      {
        en: "8 vertical clips",
        es: "8 clips verticales",
      },
      {
        en: "Creative planning session",
        es: "Sesión de planeación creativa",
      },
    ],
  },
  {
    slug: "event-coverage",
    name: {
      en: "Event Coverage",
      es: "Cobertura de evento",
    },
    description: {
      en: "Flexible event coverage for launches, private gatherings, and brand experiences.",
      es: "Cobertura flexible para lanzamientos, reuniones privadas y experiencias de marca.",
    },
    priceLabel: {
      en: "Custom quote",
      es: "Cotización personalizada",
    },
    bestFor: {
      en: "Best for events and brand activations",
      es: "Ideal para eventos y activaciones de marca",
    },
    includes: [
      {
        en: "Hourly coverage",
        es: "Cobertura por hora",
      },
      {
        en: "Edited digital gallery",
        es: "Galería digital editada",
      },
      {
        en: "Optional video highlight",
        es: "Video highlight opcional",
      },
      {
        en: "Fast delivery available",
        es: "Entrega rápida disponible",
      },
    ],
  },
];
