import type { Language } from "@/lib/i18n/dictionary";

export type LocalizedText = Record<Language, string>;

export type ServiceItem = {
  slug: string;
  href: string;
  icon: string;
  image: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
};

export type PackageItem = {
  slug: string;
  featured?: boolean;
  name: LocalizedText;
  description: LocalizedText;
  priceLabel: LocalizedText;
  bestFor: LocalizedText;
  includes: LocalizedText[];
};

export type PortfolioItem = {
  slug: string;
  image: string;
  category: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
};

export type TestimonialItem = {
  quote: LocalizedText;
  name: string;
  role: LocalizedText;
};

export type FaqItem = {
  question: LocalizedText;
  answer: LocalizedText;
};

export type ProcessStep = {
  step: string;
  title: LocalizedText;
  description: LocalizedText;
};
