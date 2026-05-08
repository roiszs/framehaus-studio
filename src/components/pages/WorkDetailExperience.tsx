"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Camera, Check, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { portfolioItems } from "@/lib/data/portfolio";
import { useLang } from "@/lib/i18n/LanguageProvider";

type WorkDetailExperienceProps = {
  slug: string;
};

export default function WorkDetailExperience({ slug }: WorkDetailExperienceProps) {
  const { lang } = useLang();
  const project = portfolioItems.find((item) => item.slug === slug);
  const relatedProjects = portfolioItems
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  if (!project) {
    return (
      <section className="min-h-[70vh] bg-[#0D0D0D] py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow={lang === "en" ? "Project not found" : "Proyecto no encontrado"}
            title={
              lang === "en"
                ? "This project does not exist."
                : "Este proyecto no existe."
            }
            description={
              lang === "en"
                ? "Return to the portfolio page to explore the available work."
                : "Regresa al portafolio para explorar los proyectos disponibles."
            }
          />

          <Button
            asChild
            className="mt-10 rounded-full bg-[#F5F1EA] text-[#0D0D0D] hover:bg-[#C8A96A]"
          >
            <Link href="/work">
              <ArrowLeft size={16} />
              {lang === "en" ? "Back to portfolio" : "Volver al portafolio"}
            </Link>
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-[#F5F1EA]/10 bg-[#0D0D0D] py-20 sm:py-28 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,169,106,0.18),transparent_32%),linear-gradient(135deg,#0D0D0D,#120F0D,#0D0D0D)]" />

        <Container className="relative z-10">
          <Link
            href="/work"
            className="mb-10 inline-flex items-center gap-2 text-sm text-[#A7A29A] transition hover:text-[#F5F1EA]"
          >
            <ArrowLeft size={16} />
            {lang === "en" ? "Back to portfolio" : "Volver al portafolio"}
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <Reveal>
              <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                  {project.category[lang]}
                </p>

                <h1 className="font-editorial text-5xl font-semibold leading-[0.88] tracking-[-0.06em] text-[#F5F1EA] sm:text-6xl md:text-7xl lg:text-8xl">
                  {project.title[lang]}
                </h1>

                <p className="mt-8 max-w-2xl text-base leading-8 text-[#A7A29A] sm:text-lg">
                  {project.description[lang]}
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    asChild
                    className="h-12 rounded-full bg-[#F5F1EA] px-6 text-[#0D0D0D] hover:bg-[#C8A96A]"
                  >
                    <Link href="/contact">
                      {lang === "en"
                        ? "Request a similar project"
                        : "Solicitar un proyecto similar"}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-[#F5F1EA]/15 bg-transparent px-6 text-[#F5F1EA] hover:bg-[#F5F1EA]/10 hover:text-[#F5F1EA]"
                  >
                    <Link href="/services">
                      {lang === "en" ? "View services" : "Ver servicios"}
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-[#F5F1EA]/10 bg-[#181410]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(180deg,rgba(13,13,13,0.06),rgba(13,13,13,0.88)), url('${project.image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(200,169,106,0.22),transparent_34%)]" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-full border border-[#C8A96A]/25 bg-[#C8A96A]/10 text-[#C8A96A]">
                    <Camera size={20} />
                  </div>

                  <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
                    FrameHaus Studio
                  </p>

                  <h2 className="mt-4 font-editorial text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#F5F1EA]">
                    {lang === "en"
                      ? "A visual direction built for clarity, trust, and premium presentation."
                      : "Una dirección visual construida para claridad, confianza y presentación premium."}
                  </h2>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeader
                eyebrow={lang === "en" ? "Project Approach" : "Enfoque del proyecto"}
                title={
                  lang === "en"
                    ? "Designed like a case-style portfolio page, not just an image preview."
                    : "Diseñado como una página tipo caso de estudio, no solo como una vista previa de imagen."
                }
                description={
                  lang === "en"
                    ? "This structure helps a visitor understand the business purpose behind the visuals: what was created, why it matters, and how similar work can support their own brand or project."
                    : "Esta estructura ayuda al visitante a entender el propósito comercial detrás de los visuales: qué se creó, por qué importa y cómo un trabajo similar puede apoyar su propia marca o proyecto."
                }
              />
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-[2rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-6 sm:p-8">
                <p className="mb-6 text-xs uppercase tracking-[0.32em] text-[#C8A96A]">
                  {lang === "en" ? "What this project demonstrates" : "Qué demuestra este proyecto"}
                </p>

                <div className="grid gap-4">
                  {[
                    {
                      en: "Editorial visual direction",
                      es: "Dirección visual editorial",
                    },
                    {
                      en: "Commercial storytelling",
                      es: "Narrativa comercial",
                    },
                    {
                      en: "Brand-ready image system",
                      es: "Sistema de imágenes listo para marca",
                    },
                    {
                      en: "Content usable across web, social, and campaigns",
                      es: "Contenido usable en web, redes y campañas",
                    },
                  ].map((item) => (
                    <div
                      key={item.en}
                      className="flex gap-4 rounded-2xl border border-[#F5F1EA]/10 bg-[#0D0D0D]/55 p-4 text-sm leading-7 text-[#F5F1EA]"
                    >
                      <Check size={17} className="mt-1 shrink-0 text-[#C8A96A]" />
                      <span>{item[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#F5F1EA]/10 bg-[#120F0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={lang === "en" ? "Visual System" : "Sistema visual"}
              title={
                lang === "en"
                  ? "A project page should show how the studio thinks."
                  : "Una página de proyecto debe mostrar cómo piensa el estudio."
              }
              description={
                lang === "en"
                  ? "This layout gives the project more depth than a basic gallery by explaining direction, outcome, and business relevance."
                  : "Este layout le da más profundidad al proyecto que una galería básica al explicar dirección, resultado y relevancia comercial."
              }
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                title: {
                  en: "Direction",
                  es: "Dirección",
                },
                text: {
                  en: "A clear editorial mood and intentional composition.",
                  es: "Un mood editorial claro y composición intencional.",
                },
              },
              {
                title: {
                  en: "Production",
                  es: "Producción",
                },
                text: {
                  en: "Lighting, styling, and framing built around the subject.",
                  es: "Iluminación, styling y encuadre construidos alrededor del sujeto.",
                },
              },
              {
                title: {
                  en: "Delivery",
                  es: "Entrega",
                },
                text: {
                  en: "Assets prepared for modern digital use.",
                  es: "Assets preparados para uso digital moderno.",
                },
              },
            ].map((item) => (
              <Reveal key={item.title.en}>
                <div className="min-h-64 rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-6">
                  <Sparkles className="mb-6 text-[#C8A96A]" size={24} />
                  <h3 className="font-editorial text-3xl font-semibold tracking-[-0.04em] text-[#F5F1EA]">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#A7A29A]">
                    {item.text[lang]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#0D0D0D] py-16 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={lang === "en" ? "Related Work" : "Trabajo relacionado"}
              title={
                lang === "en"
                  ? "Explore more visual directions from FrameHaus."
                  : "Explora más direcciones visuales de FrameHaus."
              }
              description={
                lang === "en"
                  ? "Related projects help the visitor continue exploring without reaching a dead end."
                  : "Los proyectos relacionados ayudan al visitante a seguir explorando sin llegar a un punto muerto."
              }
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {relatedProjects.map((item) => (
              <Reveal key={item.slug}>
                <Link
                  href={`/work/${item.slug}`}
                  className="group block overflow-hidden rounded-[1.75rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 transition hover:-translate-y-1 hover:border-[#C8A96A]/35"
                >
                  <div
                    className="h-64 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(180deg,rgba(13,13,13,0.15),rgba(13,13,13,0.86)), url('${item.image}')`,
                    }}
                  />

                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96A]">
                      {item.category[lang]}
                    </p>
                    <h3 className="mt-4 font-editorial text-3xl font-semibold tracking-[-0.04em] text-[#F5F1EA]">
                      {item.title[lang]}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#A7A29A]">
                      {item.description[lang]}
                    </p>
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
                {lang === "en" ? "Create something similar" : "Crear algo similar"}
              </p>

              <h2 className="mt-6 font-editorial text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#F5F1EA] sm:text-6xl lg:text-7xl">
                {lang === "en"
                  ? "Your next project can have this level of visual direction."
                  : "Tu próximo proyecto puede tener este nivel de dirección visual."}
              </h2>

              <div className="mt-10 flex justify-center">
                <Button
                  asChild
                  className="h-12 rounded-full bg-[#F5F1EA] px-7 text-[#0D0D0D] hover:bg-[#C8A96A]"
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
