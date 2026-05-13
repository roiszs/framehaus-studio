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
  Sparkles,
  Video,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import StaggerContainer, { staggerItem } from "@/components/motion/StaggerContainer";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { processSteps } from "@/lib/data/process";
import { services } from "@/lib/data/services";
import { useLang } from "@/lib/i18n/LanguageProvider";

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  Package,
  CalendarDays,
  Camera,
  Sparkles,
  Video,
};

function ServiceVisual({
  image,
  label,
}: {
  image: string;
  label: string;
}) {
  return (
    <div className="relative h-64 overflow-hidden rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#181410]">
      <div
        className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(180deg,rgba(13,13,13,0.12),rgba(13,13,13,0.60)), url('${image}')`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(200,169,106,0.22),transparent_32%)]" />
      <div className="absolute left-5 top-5 rounded-full border border-[#F5F1EA]/10 bg-[#0D0D0D]/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.24em] text-[#F5F1EA] backdrop-blur-xl">
        {label}
      </div>
    </div>
  );
}

export default function ServicesPageExperience() {
  const { lang } = useLang();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#F5F1EA]/10 bg-[#0D0D0D] py-14 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(200,169,106,0.18),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(245,241,234,0.08),transparent_30%),linear-gradient(135deg,#0D0D0D,#120F0D,#0D0D0D)]" />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <Reveal>
              <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                  {lang === "en" ? "Services" : "Servicios"}
                </p>

                <h1 className="max-w-5xl font-editorial framehaus-mobile-safe-title text-4xl font-semibold leading-[1] tracking-[-0.048em] text-[#F5F1EA] sm:text-5xl md:text-6xl lg:text-6xl">
                  {lang === "en"
                    ? "Photography and video services built around visual strategy."
                    : "Servicios de fotografía y video construidos alrededor de estrategia visual."}
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#B9B2A8] sm:text-lg">
                  {lang === "en"
                    ? "FrameHaus is designed like a real creative studio: each service has a clear purpose, visual direction, commercial value, and a path toward booking."
                    : "FrameHaus está diseñado como un estudio creativo real: cada servicio tiene un propósito claro, dirección visual, valor comercial y un camino hacia la reserva."}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    className="framehaus-white-button h-12 rounded-full bg-[#F5F1EA] px-6 text-[#0D0D0D] shadow-[0_18px_50px_rgba(245,241,234,0.10)] hover:bg-[#F5F1EA]"
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
                    <Link href="/work">
                      {lang === "en" ? "View Work" : "Ver portafolio"}
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid gap-4 sm:grid-cols-2">
                {services.slice(0, 4).map((service) => (
                  <div
                    key={service.slug}
                    className="rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-5"
                  >
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#C8A96A]">
                      {service.title[lang]}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[#B9B2A8]">
                      {service.shortDescription[lang]}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#0D0D0D] py-14 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={lang === "en" ? "What FrameHaus offers" : "Qué ofrece FrameHaus"}
              title={
                lang === "en"
                  ? "A service system built for real client needs."
                  : "Un sistema de servicios construido para necesidades reales de clientes."
              }
              description={
                lang === "en"
                  ? "Each service is positioned with a specific buyer in mind: brands, professionals, ecommerce businesses, event organizers, and creative teams."
                  : "Cada servicio está posicionado pensando en un comprador específico: marcas, profesionales, negocios ecommerce, organizadores de eventos y equipos creativos."
              }
            />
          </Reveal>

          <StaggerContainer className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Camera;

              return (
                <motion.article
                  key={service.slug}
                  variants={staggerItem}
                  className="group overflow-hidden rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 shadow-[0_20px_70px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1.5 hover:border-[#C8A96A]/40 hover:bg-[#F5F1EA]/[0.07]"
                >
                  <ServiceVisual image={service.image} label={service.title[lang]} />

                  <div className="p-6">
                    <div className="mb-5 flex size-11 items-center justify-center rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/10 text-[#C8A96A]">
                      <Icon size={18} />
                    </div>

                    <h2 className="font-editorial text-3xl font-semibold tracking-[-0.04em] text-[#F5F1EA]">
                      {service.title[lang]}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#B9B2A8]">
                      {service.description[lang]}
                    </p>

                    <div className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <div
                          key={feature[lang]}
                          className="flex gap-3 text-sm leading-6 text-[#F5F1EA]"
                        >
                          <Check size={16} className="mt-1 shrink-0 text-[#C8A96A]" />
                          <span>{feature[lang]}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={service.href}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#C8A96A] transition group-hover:gap-3"
                    >
                      {lang === "en" ? "View service details" : "Ver detalles del servicio"}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </StaggerContainer>
        </Container>
      </section>

      {/* COMMERCIAL VALUE */}
      <section className="border-y border-[#F5F1EA]/10 bg-[#120F0D] py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="relative min-h-[340px] sm:min-h-[480px] overflow-hidden rounded-[2rem] border border-[#F5F1EA]/10 bg-[#181410]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg,rgba(13,13,13,0.1),rgba(13,13,13,0.74)), url('/framehaus/content-day.webp')",
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(200,169,106,0.26),transparent_35%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
                    {lang === "en" ? "Commercial Structure" : "Estructura comercial"}
                  </p>
                  <h2 className="mt-4 font-editorial text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#F5F1EA] sm:text-5xl">
                    {lang === "en"
                      ? "Not just a portfolio. A website designed to sell creative services."
                      : "No solo un portafolio. Un website diseñado para vender servicios creativos."}
                  </h2>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <SectionHeader
                  eyebrow={lang === "en" ? "Why this works" : "Por qué funciona"}
                  title={
                    lang === "en"
                      ? "The service page gives the studio clarity, authority, and conversion."
                      : "La página de servicios le da claridad, autoridad y conversión al estudio."
                  }
                  description={
                    lang === "en"
                      ? "A real photography business needs more than a gallery. It needs to explain what it offers, who each service is for, what is included, and how a client can take the next step."
                      : "Un negocio real de fotografía necesita más que una galería. Necesita explicar qué ofrece, para quién es cada servicio, qué incluye y cómo el cliente puede dar el siguiente paso."
                  }
                />

                <div className="mt-8 grid gap-4">
                  {[
                    {
                      en: "Clear service positioning",
                      es: "Posicionamiento claro de servicios",
                    },
                    {
                      en: "Commercial language for real buyers",
                      es: "Lenguaje comercial para compradores reales",
                    },
                    {
                      en: "Individual service detail pages",
                      es: "Páginas individuales de detalle por servicio",
                    },
                    {
                      en: "Direct path toward requesting a session",
                      es: "Camino directo hacia solicitar una sesión",
                    },
                  ].map((item) => (
                    <div
                      key={item.en}
                      className="flex items-center gap-3 rounded-2xl border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 px-4 py-4 text-sm text-[#F5F1EA]"
                    >
                      <Check size={16} className="text-[#C8A96A]" />
                      {item[lang]}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="bg-[#0D0D0D] py-14 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={lang === "en" ? "How it works" : "Cómo funciona"}
              title={
                lang === "en"
                  ? "From inquiry to final gallery, the process feels guided."
                  : "Desde la solicitud hasta la galería final, el proceso se siente guiado."
              }
              description={
                lang === "en"
                  ? "This section helps potential clients understand what happens after they reach out."
                  : "Esta sección ayuda a los clientes potenciales a entender qué pasa después de contactarse."
              }
            />
          </Reveal>

          <div className="mt-14 grid gap-4">
            {processSteps.map((step) => (
              <Reveal key={step.step}>
                <div className="grid gap-5 rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.16)] md:grid-cols-[0.2fr_0.8fr_1.4fr] md:items-center">
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

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-[#F5F1EA]/10 bg-[#120F0D] py-14 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,169,106,0.18),transparent_35%)]" />
        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                {lang === "en" ? "Ready to book?" : "¿Listo para reservar?"}
              </p>

              <h2 className="mt-6 font-editorial text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#F5F1EA] sm:text-5xl lg:text-6xl">
                {lang === "en"
                  ? "Choose the service that fits your next visual project."
                  : "Elige el servicio que encaja con tu próximo proyecto visual."}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#B9B2A8] sm:text-lg">
                {lang === "en"
                  ? "FrameHaus turns creative direction, production, and delivery into a clear client experience."
                  : "FrameHaus convierte la dirección creativa, producción y entrega en una experiencia clara para el cliente."}
              </p>

              <div className="mt-10 flex justify-center">
                <Button
                  asChild
                  className="framehaus-white-button h-12 rounded-full bg-[#F5F1EA] px-7 text-[#0D0D0D] shadow-[0_18px_50px_rgba(245,241,234,0.10)] hover:bg-[#F5F1EA]"
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
