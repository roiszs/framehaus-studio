"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Layers3,
  Languages,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import StaggerContainer, { staggerItem } from "@/components/motion/StaggerContainer";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { packages } from "@/lib/data/packages";
import { portfolioItems } from "@/lib/data/portfolio";
import { processSteps } from "@/lib/data/process";
import { services } from "@/lib/data/services";
import { useLang } from "@/lib/i18n/LanguageProvider";

export default function CaseStudyPageExperience() {
  const { lang } = useLang();

  const metrics = [
    {
      value: "7+",
      label: {
        en: "Core pages",
        es: "Páginas principales",
      },
    },
    {
      value: "2",
      label: {
        en: "Languages",
        es: "Idiomas",
      },
    },
    {
      value: "6",
      label: {
        en: "Services",
        es: "Servicios",
      },
    },
    {
      value: "5",
      label: {
        en: "Portfolio projects",
        es: "Proyectos visuales",
      },
    },
  ];

  const stack = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "lucide-react",
    "Motion",
    "Vercel",
  ];

  const highlights = [
    {
      icon: MonitorSmartphone,
      title: {
        en: "Responsive premium interface",
        es: "Interfaz premium responsive",
      },
      text: {
        en: "The website was designed to feel strong on desktop while keeping mobile readability, spacing, navigation, and CTAs clean.",
        es: "El website fue diseñado para sentirse fuerte en desktop, manteniendo legibilidad, espaciado, navegación y CTAs limpios en mobile.",
      },
    },
    {
      icon: Languages,
      title: {
        en: "Bilingual content system",
        es: "Sistema de contenido bilingüe",
      },
      text: {
        en: "FrameHaus includes a language provider and structured content in English and Spanish for a more realistic commercial experience.",
        es: "FrameHaus incluye un proveedor de idioma y contenido estructurado en inglés y español para una experiencia comercial más realista.",
      },
    },
    {
      icon: Workflow,
      title: {
        en: "Real booking flow",
        es: "Flujo real de solicitud",
      },
      text: {
        en: "The request page captures service type, package interest, timeline, budget, visual needs, and project details.",
        es: "La página de solicitud captura tipo de servicio, paquete de interés, fecha tentativa, presupuesto, necesidades visuales y detalles del proyecto.",
      },
    },
    {
      icon: Layers3,
      title: {
        en: "Scalable page architecture",
        es: "Arquitectura escalable de páginas",
      },
      text: {
        en: "The project includes main pages, service detail pages, project detail pages, metadata, sitemap, and reusable components.",
        es: "El proyecto incluye páginas principales, páginas detalle de servicio, páginas detalle de proyecto, metadata, sitemap y componentes reutilizables.",
      },
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#F5F1EA]/10 bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,169,106,0.18),transparent_32%),radial-gradient(circle_at_80%_15%,rgba(245,241,234,0.08),transparent_30%),linear-gradient(135deg,#0D0D0D,#120F0D,#0D0D0D)]" />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#C8A96A]">
                  {lang === "en" ? "FronteraCode Case Study" : "Caso de estudio FronteraCode"}
                </p>

                <h1 className="max-w-5xl font-editorial framehaus-mobile-safe-title text-4xl font-semibold leading-[1] tracking-[-0.048em] text-[#F5F1EA] sm:text-5xl md:text-6xl lg:text-6xl">
                  {lang === "en"
                    ? "FrameHaus Studio — a premium bilingual website for a photography and video studio."
                    : "FrameHaus Studio — un website premium bilingüe para un estudio de fotografía y video."}
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#B9B2A8] sm:text-lg">
                  {lang === "en"
                    ? "A portfolio project developed to demonstrate how FronteraCode can design and build modern, commercial, responsive websites for creative businesses."
                    : "Un proyecto de portafolio desarrollado para demostrar cómo FronteraCode puede diseñar y construir websites modernos, comerciales y responsive para negocios creativos."}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    className="h-12 rounded-full bg-[#F5F1EA] px-6 text-[#0D0D0D] shadow-[0_18px_50px_rgba(245,241,234,0.10)] hover:bg-[#C8A96A]"
                  >
                    <Link href="/">
                      {lang === "en" ? "View website" : "Ver website"}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-[#F5F1EA]/15 bg-transparent px-6 text-[#F5F1EA] hover:bg-[#F5F1EA]/10 hover:text-[#F5F1EA]"
                  >
                    <Link href="/contact">
                      {lang === "en" ? "View request flow" : "Ver flujo de solicitud"}
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative overflow-hidden rounded-[2rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
                <div className="relative min-h-[360px] sm:min-h-[520px] overflow-hidden rounded-[1.5rem] bg-[#181410]">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg,rgba(13,13,13,0.06),rgba(13,13,13,0.74)), url('/framehaus/hero-card.webp')",
                    }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(200,169,106,0.24),transparent_35%)]" />

                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
                      FrameHaus Studio
                    </p>

                    <h2 className="mt-4 max-w-xl font-editorial text-4xl font-semibold leading-[0.98] tracking-[-0.052em] text-[#F5F1EA]">
                      {lang === "en"
                        ? "A complete website experience built like a real client project."
                        : "Una experiencia web completa construida como proyecto real para cliente."}
                    </h2>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* METRICS */}
      <section className="bg-[#0D0D0D] py-16 sm:py-20">
        <Container>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((item) => (
              <motion.div
                key={item.value}
                variants={staggerItem}
                className="rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.16)]"
              >
                <p className="font-editorial text-5xl font-semibold text-[#C8A96A]">
                  {item.value}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-[#B9B2A8]">
                  {item.label[lang]}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="border-y border-[#F5F1EA]/10 bg-[#120F0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeader
                eyebrow={lang === "en" ? "Project Overview" : "Resumen del proyecto"}
                title={
                  lang === "en"
                    ? "A commercial website, not just a visual landing page."
                    : "Un website comercial, no solo una landing visual."
                }
                description={
                  lang === "en"
                    ? "FrameHaus was built as a realistic website for a professional photography and video studio. It includes services, portfolio, packages, request flow, bilingual content, responsive design, and a case-study-ready structure."
                    : "FrameHaus fue construido como un website realista para un estudio profesional de fotografía y video. Incluye servicios, portafolio, paquetes, flujo de solicitud, contenido bilingüe, diseño responsive y estructura lista para caso de estudio."
                }
              />
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid gap-4">
                {[
                  {
                    title: {
                      en: "Problem",
                      es: "Problema",
                    },
                    text: {
                      en: "Many creative businesses rely only on Instagram, PDFs, or generic templates that do not explain services, packages, process, or conversion paths clearly.",
                      es: "Muchos negocios creativos dependen solo de Instagram, PDFs o plantillas genéricas que no explican claramente servicios, paquetes, proceso o caminos de conversión.",
                    },
                  },
                  {
                    title: {
                      en: "Solution",
                      es: "Solución",
                    },
                    text: {
                      en: "We designed a premium bilingual website that turns visual work into a structured commercial experience with pages, service details, portfolio projects, and a request form.",
                      es: "Diseñamos un website premium bilingüe que convierte el trabajo visual en una experiencia comercial estructurada con páginas, detalles de servicio, proyectos de portafolio y formulario de solicitud.",
                    },
                  },
                  {
                    title: {
                      en: "Result",
                      es: "Resultado",
                    },
                    text: {
                      en: "A polished portfolio project that demonstrates visual design, frontend architecture, bilingual UX, and business-oriented website strategy.",
                      es: "Un proyecto de portafolio pulido que demuestra diseño visual, arquitectura frontend, UX bilingüe y estrategia web orientada a negocio.",
                    },
                  },
                ].map((item) => (
                  <div
                    key={item.title.en}
                    className="rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.16)]"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#C8A96A]">
                      {item.title[lang]}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[#B9B2A8]">
                      {item.text[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={lang === "en" ? "What was built" : "Qué se construyó"}
              title={
                lang === "en"
                  ? "A complete frontend experience for a creative studio."
                  : "Una experiencia frontend completa para un estudio creativo."
              }
              description={
                lang === "en"
                  ? "The project demonstrates how a creative business can be transformed into a polished, conversion-oriented digital presence."
                  : "El proyecto demuestra cómo un negocio creativo puede transformarse en una presencia digital pulida y orientada a conversión."
              }
            />
          </Reveal>

          <StaggerContainer className="mt-14 grid gap-5 md:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title.en}
                  variants={staggerItem}
                  className="rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.16)]"
                >
                  <div className="mb-6 flex size-12 items-center justify-center rounded-full border border-[#C8A96A]/25 bg-[#C8A96A]/10 text-[#C8A96A]">
                    <Icon size={20} />
                  </div>

                  <h2 className="font-editorial text-3xl font-semibold tracking-[-0.052em] text-[#F5F1EA]">
                    {item.title[lang]}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#B9B2A8]">
                    {item.text[lang]}
                  </p>
                </motion.article>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* SCOPE */}
      <section className="border-y border-[#F5F1EA]/10 bg-[#120F0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeader
                eyebrow={lang === "en" ? "Scope" : "Alcance"}
                title={
                  lang === "en"
                    ? "The site was structured like a real client deliverable."
                    : "El sitio fue estructurado como una entrega real para cliente."
                }
                description={
                  lang === "en"
                    ? "Instead of building a single landing page, the project includes a scalable architecture with pages, dynamic routes, structured data, and reusable components."
                    : "En lugar de construir una sola landing, el proyecto incluye una arquitectura escalable con páginas, rutas dinámicas, data estructurada y componentes reutilizables."
                }
              />
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    value: services.length,
                    label: {
                      en: "Service entries",
                      es: "Servicios estructurados",
                    },
                  },
                  {
                    value: portfolioItems.length,
                    label: {
                      en: "Portfolio entries",
                      es: "Proyectos de portafolio",
                    },
                  },
                  {
                    value: packages.length,
                    label: {
                      en: "Commercial packages",
                      es: "Paquetes comerciales",
                    },
                  },
                  {
                    value: processSteps.length,
                    label: {
                      en: "Process steps",
                      es: "Pasos de proceso",
                    },
                  },
                ].map((item) => (
                  <div
                    key={item.label.en}
                    className="rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.16)]"
                  >
                    <p className="font-editorial text-5xl font-semibold text-[#C8A96A]">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[#B9B2A8]">
                      {item.label[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* STACK */}
      <section className="bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <SectionHeader
                eyebrow={lang === "en" ? "Tech Stack" : "Stack técnico"}
                title={
                  lang === "en"
                    ? "Built with a modern frontend stack."
                    : "Construido con un stack frontend moderno."
                }
                description={
                  lang === "en"
                    ? "The stack matches the type of production workflow FronteraCode can use for modern marketing websites, product demos, and commercial web experiences."
                    : "El stack coincide con el tipo de flujo de producción que FronteraCode puede usar para websites modernos, demos de producto y experiencias web comerciales."
                }
              />
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[2rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.16)]">
                <div className="mb-7 flex size-12 items-center justify-center rounded-full border border-[#C8A96A]/25 bg-[#C8A96A]/10 text-[#C8A96A]">
                  <Code2 size={20} />
                </div>

                <div className="flex flex-wrap gap-3">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#F5F1EA]/10 bg-[#0D0D0D]/55 px-4 py-2 text-sm text-[#F5F1EA]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PORTFOLIO COPY */}
      <section className="border-y border-[#F5F1EA]/10 bg-[#120F0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={lang === "en" ? "Portfolio copy" : "Texto para portafolio"}
              title={
                lang === "en"
                  ? "Short description ready for FronteraCode."
                  : "Descripción corta lista para FronteraCode."
              }
              description={
                lang === "en"
                  ? "This copy can be used in your portfolio grid, presentation, social post, or project detail page."
                  : "Este texto se puede usar en tu grid de portafolio, presentación, post de redes o página de detalle de proyecto."
              }
            />
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-12 rounded-[2rem] border border-[#C8A96A]/25 bg-[#C8A96A]/10 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.16)] sm:p-8">
              <BadgeCheck className="mb-6 text-[#C8A96A]" size={28} />

              <p className="text-lg leading-8 text-[#F5F1EA]">
                {lang === "en"
                  ? "Premium bilingual website developed for a fictional photography and video studio. The project includes services, portfolio, packages, service detail pages, project detail pages, request flow, responsive design, Motion animations, SEO structure, and a polished visual system designed to feel like a real commercial website."
                  : "Website premium bilingüe desarrollado para un estudio ficticio de fotografía y video. El proyecto incluye servicios, portafolio, paquetes, páginas detalle de servicio, páginas detalle de proyecto, flujo de solicitud, diseño responsive, animaciones con Motion, estructura SEO y un sistema visual pulido diseñado para sentirse como un website comercial real."}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,169,106,0.18),transparent_35%)]" />

        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C8A96A]">
                {lang === "en" ? "Project complete" : "Proyecto completo"}
              </p>

              <h2 className="mt-6 font-editorial text-4xl font-semibold leading-[0.98] tracking-[-0.052em] text-[#F5F1EA] sm:text-5xl lg:text-6xl">
                {lang === "en"
                  ? "FrameHaus is ready to be presented as a FronteraCode portfolio project."
                  : "FrameHaus está listo para presentarse como proyecto de portafolio de FronteraCode."}
              </h2>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-full bg-[#F5F1EA] px-7 text-[#0D0D0D] shadow-[0_18px_50px_rgba(245,241,234,0.10)] hover:bg-[#C8A96A]"
                >
                  <Link href="/">
                    {lang === "en" ? "View website" : "Ver website"}
                    <ArrowRight size={16} />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-[#F5F1EA]/15 bg-transparent px-7 text-[#F5F1EA] hover:bg-[#F5F1EA]/10 hover:text-[#F5F1EA]"
                >
                  <Link href="/work">
                    {lang === "en" ? "View portfolio" : "Ver portafolio"}
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
