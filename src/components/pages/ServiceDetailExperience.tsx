"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Camera, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { services } from "@/lib/data/services";
import { useLang } from "@/lib/i18n/LanguageProvider";

type ServiceDetailExperienceProps = {
  slug: string;
};

export default function ServiceDetailExperience({
  slug,
}: ServiceDetailExperienceProps) {
  const { lang } = useLang();
  const service = services.find((item) => item.slug === slug);
  const relatedServices = services
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  if (!service) {
    return (
      <section className="min-h-[70vh] bg-[#0D0D0D] py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow={lang === "en" ? "Service not found" : "Servicio no encontrado"}
            title={
              lang === "en"
                ? "This service does not exist."
                : "Este servicio no existe."
            }
            description={
              lang === "en"
                ? "Return to the services page to explore the available options."
                : "Regresa a la página de servicios para explorar las opciones disponibles."
            }
          />

          <Button
            asChild
            className="mt-10 rounded-full bg-[#F5F1EA] text-[#0D0D0D] hover:bg-[#C8A96A]"
          >
            <Link href="/services">
              <ArrowLeft size={16} />
              {lang === "en" ? "Back to services" : "Volver a servicios"}
            </Link>
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#F5F1EA]/10 bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,169,106,0.18),transparent_32%),linear-gradient(135deg,#0D0D0D,#120F0D,#0D0D0D)]" />

        <Container className="relative z-10">
          <Link
            href="/services"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#B9B2A8] transition hover:text-[#F5F1EA]"
          >
            <ArrowLeft size={16} />
            {lang === "en" ? "Back to services" : "Volver a servicios"}
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                  {lang === "en" ? "Service Detail" : "Detalle de servicio"}
                </p>

                <h1 className="font-editorial framehaus-mobile-safe-title text-4xl font-semibold leading-[1] tracking-[-0.048em] text-[#F5F1EA] sm:text-5xl md:text-6xl lg:text-6xl">
                  {service.title[lang]}
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#B9B2A8] sm:text-lg">
                  {service.description[lang]}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    className="h-12 rounded-full bg-[#F5F1EA] px-6 text-[#0D0D0D] shadow-[0_18px_50px_rgba(245,241,234,0.10)] hover:bg-[#C8A96A]"
                  >
                    <Link href="/contact">
                      {lang === "en"
                        ? "Request this service"
                        : "Solicitar este servicio"}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-[#F5F1EA]/15 bg-transparent px-6 text-[#F5F1EA] hover:bg-[#F5F1EA]/10 hover:text-[#F5F1EA]"
                  >
                    <Link href="/packages">
                      {lang === "en" ? "View packages" : "Ver paquetes"}
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative min-h-[340px] sm:min-h-[460px] overflow-hidden rounded-[2rem] border border-[#F5F1EA]/10 bg-[#181410]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(13,13,13,0.08),rgba(13,13,13,0.74)), url('${service.image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(200,169,106,0.24),transparent_34%)]" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-full border border-[#C8A96A]/25 bg-[#C8A96A]/10 text-[#C8A96A]">
                    <Camera size={20} />
                  </div>

                  <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
                    FrameHaus Studio
                  </p>

                  <h2 className="mt-4 font-editorial text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#F5F1EA]">
                    {service.shortDescription[lang]}
                  </h2>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* DETAILS */}
      <section className="bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeader
                eyebrow={lang === "en" ? "What is included" : "Qué incluye"}
                title={
                  lang === "en"
                    ? "A service designed with creative direction and business use in mind."
                    : "Un servicio diseñado con dirección creativa y uso comercial en mente."
                }
                description={
                  lang === "en"
                    ? "The goal is not only to create beautiful images, but to deliver assets that can be used across websites, campaigns, social media, profiles, and sales materials."
                    : "El objetivo no es solo crear imágenes bonitas, sino entregar assets que puedan usarse en websites, campañas, redes sociales, perfiles y materiales de venta."
                }
              />
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[2rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-6 sm:p-8">
                <p className="mb-6 text-xs uppercase tracking-[0.32em] text-[#C8A96A]">
                  {service.title[lang]}
                </p>

                <div className="grid gap-4">
                  {service.features.map((feature) => (
                    <div
                      key={feature[lang]}
                      className="flex gap-4 rounded-2xl border border-[#F5F1EA]/10 bg-[#0D0D0D]/55 p-4 text-sm leading-7 text-[#F5F1EA]"
                    >
                      <Check size={17} className="mt-1 shrink-0 text-[#C8A96A]" />
                      <span>{feature[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* RELATED */}
      <section className="border-y border-[#F5F1EA]/10 bg-[#120F0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={lang === "en" ? "Related services" : "Servicios relacionados"}
              title={
                lang === "en"
                  ? "Explore other ways FrameHaus can support your visual presence."
                  : "Explora otras formas en que FrameHaus puede apoyar tu presencia visual."
              }
              description={
                lang === "en"
                  ? "A real studio website should guide users toward the right service, even when they arrive from a specific page."
                  : "Un website real de estudio debe guiar al usuario hacia el servicio correcto, incluso cuando llega desde una página específica."
              }
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {relatedServices.map((item) => (
              <Reveal key={item.slug}>
                <Link
                  href={item.href}
                  className="group block overflow-hidden rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 shadow-[0_20px_70px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1.5 hover:border-[#C8A96A]/40"
                >
                  <div
                    className="h-52 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(180deg,rgba(13,13,13,0.15),rgba(13,13,13,0.60)), url('${item.image}')`,
                    }}
                  />

                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
                      {lang === "en" ? "Service" : "Servicio"}
                    </p>
                    <h3 className="mt-4 font-editorial text-3xl font-semibold tracking-[-0.04em] text-[#F5F1EA]">
                      {item.title[lang]}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#B9B2A8]">
                      {item.shortDescription[lang]}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
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
                {lang === "en" ? "Next step" : "Siguiente paso"}
              </p>

              <h2 className="mt-6 font-editorial text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#F5F1EA] sm:text-5xl lg:text-6xl">
                {lang === "en"
                  ? "Tell us what you want to create."
                  : "Cuéntanos qué quieres crear."}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#B9B2A8] sm:text-lg">
                {lang === "en"
                  ? "Request a session and share the type of project, tentative date, and visual needs."
                  : "Solicita una sesión y comparte el tipo de proyecto, fecha tentativa y necesidades visuales."}
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
