"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Camera, Grid3X3, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import StaggerContainer, { staggerItem } from "@/components/motion/StaggerContainer";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { portfolioItems } from "@/lib/data/portfolio";
import { services } from "@/lib/data/services";
import { useLang } from "@/lib/i18n/LanguageProvider";

export default function WorkPageExperience() {
  const { lang } = useLang();

  return (
    <>
      <section className="relative overflow-hidden border-b border-[#F5F1EA]/10 bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(200,169,106,0.18),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(245,241,234,0.08),transparent_30%),linear-gradient(135deg,#0D0D0D,#120F0D,#0D0D0D)]" />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <Reveal>
              <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                  {lang === "en" ? "Portfolio" : "Portafolio"}
                </p>

                <h1 className="max-w-5xl font-editorial framehaus-mobile-safe-title text-4xl font-semibold leading-[1] tracking-[-0.048em] text-[#F5F1EA] sm:text-5xl md:text-6xl lg:text-6xl">
                  {lang === "en"
                    ? "A visual archive built to feel editorial, commercial, and real."
                    : "Un archivo visual construido para sentirse editorial, comercial y real."}
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#B9B2A8] sm:text-lg">
                  {lang === "en"
                    ? "FrameHaus presents work across branding, product, events, portraits, and lifestyle sessions. The goal is to show range, style, and commercial value."
                    : "FrameHaus presenta trabajo en branding, producto, eventos, retratos y sesiones lifestyle. El objetivo es mostrar variedad, estilo y valor comercial."}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    className="h-12 rounded-full bg-[#F5F1EA] px-6 text-[#0D0D0D] shadow-[0_18px_50px_rgba(245,241,234,0.10)] hover:bg-[#C8A96A]"
                  >
                    <Link href="/contact">
                      {lang === "en" ? "Request a Session" : "Solicitar sesión"}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-[#F5F1EA]/15 bg-transparent px-6 text-[#F5F1EA] hover:bg-[#F5F1EA]/10 hover:text-[#F5F1EA]"
                  >
                    <Link href="/services">
                      {lang === "en" ? "Explore services" : "Ver servicios"}
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid gap-4 sm:grid-cols-2">
                {portfolioItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/work/${item.slug}`}
                    className="group relative min-h-52 overflow-hidden rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#181410]"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `linear-gradient(180deg,rgba(13,13,13,0.12),rgba(13,13,13,0.76)), url('${item.image}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(200,169,106,0.22),transparent_32%)]" />

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#C8A96A]">
                        {item.category[lang]}
                      </p>
                      <h2 className="mt-3 font-editorial text-2xl font-semibold leading-none tracking-[-0.04em] text-[#F5F1EA]">
                        {item.title[lang]}
                      </h2>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={lang === "en" ? "Selected Work" : "Trabajo seleccionado"}
              title={
                lang === "en"
                  ? "Projects organized like a real creative studio portfolio."
                  : "Proyectos organizados como un portafolio real de estudio creativo."
              }
              description={
                lang === "en"
                  ? "Each project card is built to show category, visual direction, commercial use, and a path toward a detailed case-style page."
                  : "Cada tarjeta de proyecto está construida para mostrar categoría, dirección visual, uso comercial y una ruta hacia una página de detalle tipo caso de estudio."
              }
            />
          </Reveal>

          <StaggerContainer className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {portfolioItems.map((item, index) => (
              <motion.article
                key={item.slug}
                variants={staggerItem}
                className={`group relative min-h-[360px] sm:min-h-[420px] overflow-hidden rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#181410] ${
                  index === 0 || index === 3
                    ? "lg:col-span-4"
                    : "lg:col-span-2"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(13,13,13,0.08),rgba(13,13,13,0.78)), url('${item.image}')`,
                  }}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(200,169,106,0.18),transparent_32%)]" />

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-[#F5F1EA]/10 bg-[#0D0D0D]/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-[#F5F1EA] backdrop-blur-xl">
                  <Camera size={12} />
                  {item.category[lang]}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h2 className="font-editorial text-4xl font-semibold leading-none tracking-[-0.04em] text-[#F5F1EA]">
                    {item.title[lang]}
                  </h2>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[#B9B2A8]">
                    {item.description[lang]}
                  </p>

                  <Link
                    href={`/work/${item.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#C8A96A] transition group-hover:gap-3"
                  >
                    {lang === "en" ? "View project" : "Ver proyecto"}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      <section className="border-y border-[#F5F1EA]/10 bg-[#120F0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="relative min-h-[340px] sm:min-h-[480px] overflow-hidden rounded-[2rem] border border-[#F5F1EA]/10 bg-[#181410]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(200,169,106,0.26),transparent_34%),linear-gradient(135deg,#1A1410,#0D0D0D)]" />

                <div className="absolute inset-0 opacity-80">
                  <div className="grid h-full grid-cols-2 gap-3 p-4">
                    {portfolioItems.slice(0, 4).map((item) => (
                      <div
                        key={item.slug}
                        className="rounded-[1.5rem] bg-cover bg-center"
                        style={{
                          backgroundImage: `linear-gradient(180deg,rgba(13,13,13,0.15),rgba(13,13,13,0.60)), url('${item.image}')`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/70 to-transparent p-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
                    {lang === "en" ? "Portfolio Logic" : "Lógica de portafolio"}
                  </p>
                  <h2 className="mt-4 font-editorial text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#F5F1EA] sm:text-5xl">
                    {lang === "en"
                      ? "A portfolio should sell trust, not only show images."
                      : "Un portafolio debe vender confianza, no solo mostrar imágenes."}
                  </h2>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <SectionHeader
                  eyebrow={lang === "en" ? "Why this page matters" : "Por qué importa esta página"}
                  title={
                    lang === "en"
                      ? "The portfolio is structured to support buying decisions."
                      : "El portafolio está estructurado para apoyar decisiones de compra."
                  }
                  description={
                    lang === "en"
                      ? "A photography website should not only display beautiful images. It should help visitors understand what kind of work the studio produces, who it serves, and how each visual category can support real business or personal goals."
                      : "Un website de fotografía no solo debe mostrar imágenes bonitas. Debe ayudar al visitante a entender qué tipo de trabajo produce el estudio, a quién sirve y cómo cada categoría visual puede apoyar objetivos reales de negocio o personales."
                  }
                />

                <div className="mt-8 grid gap-4">
                  {[
                    {
                      icon: Grid3X3,
                      en: "Portfolio organized by visual category",
                      es: "Portafolio organizado por categoría visual",
                    },
                    {
                      icon: Sparkles,
                      en: "Editorial presentation with commercial context",
                      es: "Presentación editorial con contexto comercial",
                    },
                    {
                      icon: ArrowRight,
                      en: "Project detail pages for stronger storytelling",
                      es: "Páginas de detalle para una narrativa más fuerte",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.en}
                        className="flex items-center gap-4 rounded-2xl border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 px-4 py-4 text-sm text-[#F5F1EA]"
                      >
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#C8A96A]/10 text-[#C8A96A]">
                          <Icon size={16} />
                        </div>
                        {item[lang]}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={lang === "en" ? "Categories" : "Categorías"}
              title={
                lang === "en"
                  ? "The portfolio connects directly with FrameHaus services."
                  : "El portafolio conecta directamente con los servicios de FrameHaus."
              }
              description={
                lang === "en"
                  ? "This makes the site feel cohesive: visitors can move from a visual example to a relevant service or session request."
                  : "Esto hace que el sitio se sienta cohesivo: el visitante puede pasar de un ejemplo visual a un servicio relevante o solicitud de sesión."
              }
            />
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Reveal key={service.slug}>
                <Link
                  href={service.href}
                  className="group flex min-h-48 flex-col justify-between rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.16)] transition hover:-translate-y-1.5 hover:border-[#C8A96A]/40"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
                      {lang === "en" ? "Service" : "Servicio"}
                    </p>
                    <h3 className="mt-4 font-editorial text-3xl font-semibold tracking-[-0.04em] text-[#F5F1EA]">
                      {service.title[lang]}
                    </h3>
                  </div>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#C8A96A] transition group-hover:gap-3">
                    {lang === "en" ? "Explore" : "Explorar"}
                    <ArrowRight size={15} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t border-[#F5F1EA]/10 bg-[#120F0D] py-16 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,169,106,0.18),transparent_35%)]" />

        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                {lang === "en" ? "Inspired by the work?" : "¿Te inspiró el trabajo?"}
              </p>

              <h2 className="mt-6 font-editorial text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#F5F1EA] sm:text-5xl lg:text-6xl">
                {lang === "en"
                  ? "Let’s create a visual system for your next project."
                  : "Construyamos un sistema visual para tu próximo proyecto."}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#B9B2A8] sm:text-lg">
                {lang === "en"
                  ? "Request a session and tell FrameHaus what kind of images, video, or campaign assets you need."
                  : "Solicita una sesión y cuéntale a FrameHaus qué tipo de imágenes, video o assets de campaña necesitas."}
              </p>

              <div className="mt-10 flex justify-center">
                <Button
                  asChild
                  className="h-12 rounded-full bg-[#F5F1EA] px-7 text-[#0D0D0D] shadow-[0_18px_50px_rgba(245,241,234,0.10)] hover:bg-[#C8A96A]"
                >
                  <Link href="/contact">
                    {lang === "en" ? "Request a Session" : "Solicitar sesión"}
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
