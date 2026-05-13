"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  Check,
  Clock,
  PackageCheck,
  Sparkles,
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
import { processSteps } from "@/lib/data/process";
import { useLang } from "@/lib/i18n/LanguageProvider";

export default function PackagesPageExperience() {
  const { lang } = useLang();
  const featuredPackage = packages.find((item) => item.featured);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#F5F1EA]/10 bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(200,169,106,0.18),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(245,241,234,0.08),transparent_30%),linear-gradient(135deg,#0D0D0D,#120F0D,#0D0D0D)]" />

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                  {lang === "en" ? "Packages" : "Paquetes"}
                </p>

                <h1 className="max-w-5xl font-editorial framehaus-mobile-safe-title text-4xl font-semibold leading-[1] tracking-[-0.048em] text-[#F5F1EA] sm:text-5xl md:text-6xl lg:text-6xl">
                  {lang === "en"
                    ? "Clear session packages for brands, people, and businesses."
                    : "Paquetes claros para marcas, personas y negocios."}
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#B9B2A8] sm:text-lg">
                  {lang === "en"
                    ? "FrameHaus packages are structured to make the buying decision easier: clear scope, clear deliverables, and a guided path toward booking."
                    : "Los paquetes de FrameHaus están estructurados para facilitar la decisión de compra: alcance claro, entregables claros y un camino guiado hacia la reserva."}
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
              <div className="relative overflow-hidden rounded-[2rem] border border-[#C8A96A]/25 bg-[#F5F1EA]/5 p-6 sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,169,106,0.18),transparent_35%)]" />

                <div className="relative z-10">
                  <div className="mb-8 flex size-14 items-center justify-center rounded-full border border-[#C8A96A]/25 bg-[#C8A96A]/10 text-[#C8A96A]">
                    <PackageCheck size={24} />
                  </div>

                  <p className="text-xs uppercase tracking-[0.32em] text-[#C8A96A]">
                    {lang === "en" ? "Most requested" : "Más solicitado"}
                  </p>

                  <h2 className="mt-5 font-editorial text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#F5F1EA] sm:text-6xl">
                    {featuredPackage?.name[lang]}
                  </h2>

                  <p className="mt-6 text-base leading-8 text-[#B9B2A8]">
                    {featuredPackage?.description[lang]}
                  </p>

                  <p className="mt-6 text-2xl font-semibold text-[#C8A96A]">
                    {featuredPackage?.priceLabel[lang]}
                  </p>

                  <div className="mt-8 grid gap-3">
                    {featuredPackage?.includes.slice(0, 4).map((item) => (
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
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PACKAGES GRID */}
      <section className="bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={lang === "en" ? "Choose your session" : "Elige tu sesión"}
              title={
                lang === "en"
                  ? "Packages designed around real creative needs."
                  : "Paquetes diseñados alrededor de necesidades creativas reales."
              }
              description={
                lang === "en"
                  ? "Each package is positioned for a different type of client, from personal portraits to full content production days."
                  : "Cada paquete está posicionado para un tipo distinto de cliente, desde retratos personales hasta días completos de producción de contenido."
              }
            />
          </Reveal>

          <StaggerContainer className="mt-14 grid gap-5 lg:grid-cols-4">
            {packages.map((item) => (
              <motion.article
                key={item.slug}
                variants={staggerItem}
                className={`relative flex min-h-0 flex-col rounded-[1.75rem] border p-5 sm:p-6 lg:min-h-[620px] ${
                  item.featured
                    ? "border-[#C8A96A]/45 bg-[#C8A96A]/10 shadow-[0_0_60px_rgba(200,169,106,0.08)]"
                    : "border-[#F5F1EA]/10 bg-[#F5F1EA]/5"
                }`}
              >
                {item.featured ? (
                  <div className="mb-6 flex w-fit items-center gap-2 rounded-full bg-[#C8A96A] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0D0D0D]">
                    <Sparkles size={12} />
                    {lang === "en" ? "Most requested" : "Más solicitado"}
                  </div>
                ) : (
                  <div className="mb-6 flex size-10 items-center justify-center rounded-full border border-[#F5F1EA]/10 bg-[#0D0D0D]/45 text-[#C8A96A]">
                    <Camera size={17} />
                  </div>
                )}

                <h2 className="font-editorial text-4xl font-semibold leading-none tracking-[-0.05em] text-[#F5F1EA]">
                  {item.name[lang]}
                </h2>

                <p className="mt-5 text-sm leading-7 text-[#B9B2A8]">
                  {item.description[lang]}
                </p>

                <p className="mt-7 text-2xl font-semibold text-[#C8A96A]">
                  {item.priceLabel[lang]}
                </p>

                <p className="mt-4 rounded-2xl border border-[#F5F1EA]/10 bg-[#0D0D0D]/45 px-4 py-3 text-xs leading-6 text-[#F5F1EA]">
                  {item.bestFor[lang]}
                </p>

                <div className="mt-7 space-y-4">
                  {item.includes.map((include) => (
                    <div key={include[lang]} className="flex gap-3 text-sm text-[#F5F1EA]">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#C8A96A]" />
                      <span>{include[lang]}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  <Button
                    asChild
                    className={`h-12 w-full rounded-full ${
                      item.featured
                        ? "bg-[#F5F1EA] text-[#0D0D0D] hover:bg-[#C8A96A]"
                        : "bg-[#F5F1EA]/10 text-[#F5F1EA] hover:bg-[#F5F1EA] hover:text-[#0D0D0D]"
                    }`}
                  >
                    <Link href="/contact">
                      {lang === "en" ? "Request package" : "Solicitar paquete"}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* COMPARISON / VALUE */}
      <section className="border-y border-[#F5F1EA]/10 bg-[#120F0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="relative min-h-[360px] sm:min-h-[520px] overflow-hidden rounded-[2rem] border border-[#F5F1EA]/10 bg-[#181410]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg,rgba(13,13,13,0.1),rgba(13,13,13,0.76)), url('/framehaus/content-day.webp')",
                  }}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(200,169,106,0.28),transparent_34%)]" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
                    {lang === "en" ? "Package Strategy" : "Estrategia de paquetes"}
                  </p>

                  <h2 className="mt-4 font-editorial text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#F5F1EA] sm:text-5xl">
                    {lang === "en"
                      ? "Clear packages reduce friction and make the studio easier to hire."
                      : "Los paquetes claros reducen fricción y hacen más fácil contratar al estudio."}
                  </h2>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <SectionHeader
                  eyebrow={lang === "en" ? "Why packages matter" : "Por qué importan los paquetes"}
                  title={
                    lang === "en"
                      ? "A real client needs to understand what they are buying."
                      : "Un cliente real necesita entender qué está comprando."
                  }
                  description={
                    lang === "en"
                      ? "This page gives the studio a stronger commercial structure: pricing direction, scope clarity, deliverables, and a direct path toward requesting a session."
                      : "Esta página le da al estudio una estructura comercial más fuerte: dirección de precios, claridad de alcance, entregables y un camino directo para solicitar una sesión."
                  }
                />

                <div className="mt-8 grid gap-4">
                  {[
                    {
                      icon: BadgeCheck,
                      en: "Clear scope before the first call",
                      es: "Alcance claro antes de la primera llamada",
                    },
                    {
                      icon: Clock,
                      en: "Faster decision-making for potential clients",
                      es: "Decisión más rápida para clientes potenciales",
                    },
                    {
                      icon: PackageCheck,
                      en: "Packages aligned with different client types",
                      es: "Paquetes alineados con distintos tipos de cliente",
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

      {/* PROCESS */}
      <section className="bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={lang === "en" ? "Booking Flow" : "Flujo de reserva"}
              title={
                lang === "en"
                  ? "The package is only the start. The experience is guided."
                  : "El paquete es solo el inicio. La experiencia es guiada."
              }
              description={
                lang === "en"
                  ? "FrameHaus uses a clear production process so the client knows what happens before, during, and after the session."
                  : "FrameHaus usa un proceso de producción claro para que el cliente sepa qué sucede antes, durante y después de la sesión."
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

      {/* FAQ */}
      <section className="border-y border-[#F5F1EA]/10 bg-[#120F0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <SectionHeader
                eyebrow={lang === "en" ? "Before booking" : "Antes de reservar"}
                title={
                  lang === "en"
                    ? "Questions that help clients feel ready to take the next step."
                    : "Preguntas que ayudan al cliente a sentirse listo para dar el siguiente paso."
                }
                description={
                  lang === "en"
                    ? "A pricing page should answer objections and reduce uncertainty before someone reaches out."
                    : "Una página de paquetes debe resolver objeciones y reducir incertidumbre antes de que alguien contacte."
                }
              />
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[2rem] border border-[#F5F1EA]/10 bg-[#0D0D0D]/60 p-6 sm:p-8">
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,169,106,0.18),transparent_35%)]" />

        <Container className="relative z-10">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                {lang === "en" ? "Choose your package" : "Elige tu paquete"}
              </p>

              <h2 className="mt-6 font-editorial text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#F5F1EA] sm:text-5xl lg:text-6xl">
                {lang === "en"
                  ? "Ready to plan your next visual session?"
                  : "¿Listo para planear tu próxima sesión visual?"}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#B9B2A8] sm:text-lg">
                {lang === "en"
                  ? "Send the project details and FrameHaus will recommend the best package or build a custom quote."
                  : "Envía los detalles del proyecto y FrameHaus recomendará el mejor paquete o preparará una cotización personalizada."}
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
