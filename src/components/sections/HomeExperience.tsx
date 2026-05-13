"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Camera,
  Check,
  Package,
  Play,
  Quote,
  Sparkles,
  Video,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import StaggerContainer, { staggerItem } from "@/components/motion/StaggerContainer";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { faqs } from "@/lib/data/faqs";
import { packages } from "@/lib/data/packages";
import { portfolioItems } from "@/lib/data/portfolio";
import { processSteps } from "@/lib/data/process";
import { services } from "@/lib/data/services";
import { testimonials } from "@/lib/data/testimonials";
import { useLang } from "@/lib/i18n/LanguageProvider";

const iconMap = {
  BadgeCheck,
  Package,
  CalendarDays,
  Camera,
  Sparkles,
  Video,
};

function VisualBlock({
  image,
  label,
  className = "",
  position = "object-center",
}: {
  image?: string;
  label?: string;
  className?: string;
  position?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#181410] ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt={label ?? "FrameHaus visual"}
          className={`absolute inset-0 h-full w-full object-cover ${position}`}
        />
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/5 via-[#0D0D0D]/18 to-[#0D0D0D]/72" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(200,169,106,0.14),transparent_34%)]" />

      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-[#F5F1EA]/10 bg-[#0D0D0D]/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-[#F5F1EA] backdrop-blur-xl">
        <Camera size={12} />
        {label}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0D0D0D]/90 to-transparent" />
    </div>
  );
}

export default function HomeExperience() {
  const { lang, dict } = useLang();

  const featuredPackage =
    packages.find((item) => item.slug === "brand-story") ?? packages[1];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden border-b border-[#F5F1EA]/10 bg-[#0D0D0D]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(200,169,106,0.18),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(245,241,234,0.08),transparent_30%),linear-gradient(135deg,#0D0D0D,#18120E_52%,#0D0D0D)]" />

        <Container className="relative z-10">
          <div className="grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div>
              <Reveal>
                <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#C8A96A]/25 bg-[#C8A96A]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-[#C8A96A]">
                  <Sparkles size={15} />
                  {dict.home.eyebrow}
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="max-w-5xl font-editorial framehaus-mobile-safe-title text-4xl font-semibold leading-[1] tracking-[-0.048em] text-[#F5F1EA] sm:text-5xl md:text-6xl lg:text-7xl">
                  {dict.home.title}
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-8 max-w-2xl text-base leading-8 text-[#B9B2A8] sm:text-lg">
                  {dict.home.subtitle}
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    className="framehaus-white-button h-12 rounded-full bg-[#F5F1EA] px-6 text-[#0D0D0D] shadow-[0_18px_50px_rgba(245,241,234,0.10)] hover:bg-[#F5F1EA]"
                  >
                    <Link href="/work">
                      {dict.home.primaryCta}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-[#F5F1EA]/15 bg-transparent px-6 text-[#F5F1EA] hover:bg-[#F5F1EA]/10 hover:text-[#F5F1EA]"
                  >
                    <Link href="/contact">{dict.home.secondaryCta}</Link>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 sm:mt-10 border-t border-[#F5F1EA]/10 pt-6">
                  {[
                    { value: "6", label: lang === "en" ? "Services" : "Servicios" },
                    { value: "4", label: lang === "en" ? "Packages" : "Paquetes" },
                    { value: "2", label: lang === "en" ? "Languages" : "Idiomas" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-editorial text-3xl font-semibold text-[#F5F1EA]">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#B9B2A8]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.18}>
              <div className="relative hidden lg:block">
                <div className="absolute -inset-10 rounded-[3rem] bg-[#C8A96A]/10 blur-3xl" />

                <div className="relative grid gap-4">
                  <div className="grid grid-cols-[0.75fr_1fr] gap-4">
                    <VisualBlock
                      label="Brand"
                      image="/framehaus/brand-session.jpg"
                      className="h-72"
                    />
                    <VisualBlock
                      label="Studio"
                      image="/framehaus/hero-card.webp"
                      className="h-96"
                    />
                  </div>

                  <div className="grid grid-cols-[1fr_0.78fr] gap-4">
                    <div className="rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 shadow-[0_20px_70px_rgba(0,0,0,0.16)] p-6 backdrop-blur-xl">
                      <div className="mb-5 flex size-11 items-center justify-center rounded-full bg-[#C8A96A]/15 text-[#C8A96A]">
                        <Play size={18} />
                      </div>
                      <p className="font-editorial text-3xl font-semibold leading-none tracking-[-0.04em] text-[#F5F1EA]">
                        {lang === "en" ? "Creative direction for premium visual stories." : "Dirección creativa para historias visuales premium."}
                      </p>
                      <p className="mt-4 text-sm leading-6 text-[#B9B2A8]">
                        {lang === "en" ? "Photography, video, campaigns, portraits, product and brand content." : "Fotografía, video, campañas, retratos, producto y contenido de marca."}
                      </p>
                    </div>

                    <VisualBlock
                      label="Product"
                      image="/framehaus/product-photography.jpg"
                      className="h-56"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* BRAND STATEMENT */}
      <section className="border-b border-[#F5F1EA]/10 bg-[#0D0D0D] py-12 sm:py-16 lg:py-20">
        <Container>
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                  {dict.home.statementEyebrow}
                </p>
              </div>

              <div>
                <h2 className="font-editorial text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#F5F1EA] sm:text-5xl lg:text-6xl">
                  {dict.home.statementTitle}
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-8 text-[#B9B2A8] sm:text-lg">
                  {dict.home.statement}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="bg-[#0D0D0D] py-14 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={lang === "en" ? "Services" : "Servicios"}
              title={
                lang === "en"
                  ? "Photography, video, and visual direction for modern brands."
                  : "Fotografía, video y dirección visual para marcas modernas."
              }
              description={
                lang === "en"
                  ? "FrameHaus is structured as a complete creative studio, not just a single-service photographer."
                  : "FrameHaus está estructurado como un estudio creativo completo, no solo como un fotógrafo de un solo servicio."
              }
            />
          </Reveal>

          <StaggerContainer className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Camera;

              return (
                <motion.article
                  key={service.slug}
                  variants={staggerItem}
                  className="group overflow-hidden rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 shadow-[0_20px_70px_rgba(0,0,0,0.16)] shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1.5 hover:border-[#C8A96A]/40 hover:bg-[#F5F1EA]/[0.08]"
                >
                  <VisualBlock
                    image={service.image}
                    label={service.title[lang]}
                    className="h-60 rounded-none border-0"
                  />

                  <div className="p-6">
                    <div className="mb-5 flex size-11 items-center justify-center rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/10 text-[#C8A96A]">
                      <Icon size={18} />
                    </div>

                    <h3 className="font-editorial text-3xl font-semibold tracking-[-0.04em] text-[#F5F1EA]">
                      {service.title[lang]}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#B9B2A8]">
                      {service.shortDescription[lang]}
                    </p>

                    <Link
                      href={service.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#C8A96A] transition group-hover:gap-3"
                    >
                      {lang === "en" ? "Explore service" : "Ver servicio"}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* PORTFOLIO */}
      <section className="border-y border-[#F5F1EA]/10 bg-[#120F0D] py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeader
                eyebrow={lang === "en" ? "Featured Work" : "Portafolio destacado"}
                title={
                  lang === "en"
                    ? "A gallery built to feel editorial, commercial, and real."
                    : "Una galería construida para sentirse editorial, comercial y real."
                }
                description={
                  lang === "en"
                    ? "The portfolio preview is designed to show range: branding, product, events, portraits, and lifestyle."
                    : "El preview del portafolio está diseñado para mostrar variedad: marca, producto, eventos, retratos y lifestyle."
                }
              />
            </Reveal>

            <Reveal delay={0.12}>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-[#F5F1EA]/15 bg-transparent text-[#F5F1EA] hover:bg-[#F5F1EA]/10 hover:text-[#F5F1EA]"
              >
                <Link href="/work">
                  {lang === "en" ? "View all work" : "Ver todo"}
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </Reveal>
          </div>

          <StaggerContainer className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {portfolioItems.map((item, index) => (
              <motion.article
                key={item.slug}
                variants={staggerItem}
                className={`group relative min-h-[300px] overflow-hidden rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#181410] ${
                  index === 0 || index === 2 || index === 3
                    ? "lg:col-span-2"
                    : index === 4
                      ? "lg:col-span-3"
                      : "lg:col-span-1"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(13,13,13,0.1),rgba(13,13,13,0.78)), url('${item.image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(200,169,106,0.18),transparent_32%)]" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-[#C8A96A]">
                    {item.category[lang]}
                  </p>
                  <h3 className="font-editorial text-3xl font-semibold leading-none tracking-[-0.04em] text-[#F5F1EA]">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#B9B2A8]">
                    {item.description[lang]}
                  </p>
                </div>
              </motion.article>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* FEATURED PACKAGE */}
      <section className="bg-[#0D0D0D] py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <Reveal>
              <VisualBlock
                image="/framehaus/content-day.webp"
                label={lang === "en" ? "Featured Package" : "Paquete destacado"}
                className="min-h-[360px] sm:min-h-[360px] sm:min-h-[520px]"
              />
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex h-full flex-col justify-between rounded-[2.5rem] border border-[#C8A96A]/25 bg-[#F5F1EA]/5 p-5 sm:p-10">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                    {lang === "en" ? "Featured Package" : "Paquete destacado"}
                  </p>

                  <h2 className="mt-6 font-editorial text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#F5F1EA] sm:text-6xl">
                    {featuredPackage.name[lang]}
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#B9B2A8] sm:text-lg">
                    {featuredPackage.description[lang]}
                  </p>

                  <p className="mt-6 text-2xl font-semibold text-[#C8A96A]">
                    {featuredPackage.priceLabel[lang]}
                  </p>

                  <div className="mt-8 grid gap-3">
                    {featuredPackage.includes.map((item) => (
                      <div
                        key={item[lang]}
                        className="flex items-center gap-3 rounded-2xl border border-[#F5F1EA]/10 bg-[#0D0D0D]/50 px-4 py-3 text-sm text-[#F5F1EA]"
                      >
                        <Check size={16} className="text-[#C8A96A]" />
                        {item[lang]}
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  className="framehaus-white-button mt-10 h-12 w-full rounded-full bg-[#F5F1EA] text-[#0D0D0D] hover:bg-[#F5F1EA] sm:w-fit"
                >
                  <Link href="/contact">
                    {lang === "en" ? "Request this package" : "Solicitar este paquete"}
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="border-y border-[#F5F1EA]/10 bg-[#120F0D] py-14 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={lang === "en" ? "Process" : "Proceso"}
              title={
                lang === "en"
                  ? "A clear production flow from idea to final delivery."
                  : "Un flujo claro de producción desde la idea hasta la entrega final."
              }
              description={
                lang === "en"
                  ? "The website explains how a real client would move from inquiry to gallery delivery."
                  : "El website explica cómo un cliente real pasaría de la solicitud inicial a la entrega de su galería."
              }
            />
          </Reveal>

          <div className="mt-14 grid gap-4">
            {processSteps.map((step) => (
              <Reveal key={step.step}>
                <div className="grid gap-5 rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 shadow-[0_20px_70px_rgba(0,0,0,0.16)] p-6 md:grid-cols-[0.2fr_0.8fr_1.4fr] md:items-center">
                  <p className="font-editorial text-5xl font-semibold text-[#C8A96A]">
                    {step.step}
                  </p>
                  <h3 className="font-editorial text-3xl font-semibold tracking-[-0.04em] text-[#F5F1EA]">
                    {step.title[lang]}
                  </h3>
                  <p className="text-sm leading-7 text-[#B9B2A8]">
                    {step.description[lang]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="bg-[#0D0D0D] py-14 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={lang === "en" ? "Packages" : "Paquetes"}
              title={
                lang === "en"
                  ? "Commercial packages that make the studio easier to hire."
                  : "Paquetes comerciales que hacen más fácil contratar al estudio."
              }
              description={
                lang === "en"
                  ? "This gives the website a real business structure instead of being only a visual portfolio."
                  : "Esto le da al website una estructura de negocio real, no solo un portafolio visual."
              }
            />
          </Reveal>

          <StaggerContainer className="mt-14 grid gap-5 lg:grid-cols-4">
            {packages.map((item) => (
              <motion.article
                key={item.slug}
                variants={staggerItem}
                className={`rounded-[1.75rem] border p-6 ${
                  item.featured
                    ? "border-[#C8A96A]/40 bg-[#C8A96A]/10"
                    : "border-[#F5F1EA]/10 bg-[#F5F1EA]/5"
                }`}
              >
                {item.featured ? (
                  <p className="mb-5 w-fit rounded-full bg-[#C8A96A] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0D0D0D]">
                    {lang === "en" ? "Most requested" : "Más solicitado"}
                  </p>
                ) : null}

                <h3 className="font-editorial text-3xl font-semibold tracking-[-0.04em] text-[#F5F1EA]">
                  {item.name[lang]}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#B9B2A8]">
                  {item.description[lang]}
                </p>

                <p className="mt-6 text-xl font-semibold text-[#C8A96A]">
                  {item.priceLabel[lang]}
                </p>

                <div className="mt-6 space-y-3">
                  {item.includes.slice(0, 4).map((include) => (
                    <div key={include[lang]} className="flex gap-3 text-sm text-[#F5F1EA]">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#C8A96A]" />
                      <span>{include[lang]}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* TESTIMONIALS + FAQ */}
      <section className="border-y border-[#F5F1EA]/10 bg-[#120F0D] py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <div>
              <Reveal>
                <SectionHeader
                  eyebrow={lang === "en" ? "Client Trust" : "Confianza"}
                  title={
                    lang === "en"
                      ? "Built to show credibility before the first conversation."
                      : "Construido para generar confianza antes de la primera conversación."
                  }
                  description={
                    lang === "en"
                      ? "Testimonials and FAQs help the site feel complete, commercial, and client-ready."
                      : "Los testimonios y preguntas frecuentes hacen que el sitio se sienta completo, comercial y listo para clientes."
                  }
                />
              </Reveal>

              <div className="mt-10 grid gap-4">
                {testimonials.map((item) => (
                  <Reveal key={item.name}>
                    <div className="rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 shadow-[0_20px_70px_rgba(0,0,0,0.16)] p-6">
                      <Quote className="mb-5 text-[#C8A96A]" size={24} />
                      <p className="font-editorial text-2xl leading-tight tracking-[-0.03em] text-[#F5F1EA]">
                        “{item.quote[lang]}”
                      </p>
                      <p className="mt-5 text-sm font-medium text-[#F5F1EA]">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#B9B2A8]">
                        {item.role[lang]}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.12}>
              <div className="rounded-[2.5rem] border border-[#F5F1EA]/10 bg-[#0D0D0D]/60 p-5 sm:p-8">
                <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                  FAQ
                </p>

                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((item, index) => (
                    <AccordionItem
                      key={item.question[lang]}
                      value={`item-${index}`}
                      className="border-[#F5F1EA]/10"
                    >
                      <AccordionTrigger className="text-left text-base text-[#F5F1EA] hover:text-[#C8A96A] hover:no-underline">
                        {item.question[lang]}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-7 text-[#B9B2A8]">
                        {item.answer[lang]}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#0D0D0D] py-14 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,169,106,0.18),transparent_35%)]" />
        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                {lang === "en" ? "Start a project" : "Iniciar proyecto"}
              </p>

              <h2 className="mt-6 font-editorial text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#F5F1EA] sm:text-5xl lg:text-6xl">
                {lang === "en"
                  ? "Ready to build a stronger visual presence?"
                  : "¿Listo para construir una presencia visual más fuerte?"}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#B9B2A8] sm:text-lg">
                {lang === "en"
                  ? "Request a session and tell FrameHaus what you want to create."
                  : "Solicita una sesión y cuéntale a FrameHaus qué quieres crear."}
              </p>

              <div className="mt-10 flex justify-center">
                <Button
                  asChild
                  className="framehaus-white-button h-12 rounded-full bg-[#F5F1EA] px-7 text-[#0D0D0D] shadow-[0_18px_50px_rgba(245,241,234,0.10)] hover:bg-[#F5F1EA]"
                >
                  <Link href="/contact">
                    {dict.nav.cta}
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
