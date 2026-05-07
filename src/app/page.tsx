"use client";

import Link from "next/link";
import { ArrowRight, Camera, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import Container from "@/components/shared/Container";
import { useLang } from "@/lib/i18n/LanguageProvider";

export default function Home() {
  const { dict } = useLang();

  return (
    <section className="framehaus-noise relative min-h-[calc(100vh-5rem)] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,13,13,0.94),rgba(26,20,16,0.9)),url('/framehaus/hero-placeholder.jpg')]" />

      <Container className="relative z-10">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C8A96A]/20 bg-[#C8A96A]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[#C8A96A]">
                <Sparkles size={14} />
                {dict.home.eyebrow}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="max-w-5xl font-editorial text-5xl font-semibold leading-[0.9] tracking-[-0.06em] text-[#F5F1EA] sm:text-6xl lg:text-8xl">
                {dict.home.title}
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[#A7A29A] sm:text-lg">
                {dict.home.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="h-12 rounded-full bg-[#F5F1EA] px-6 text-[#0D0D0D] hover:bg-[#C8A96A]"
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
              <p className="mt-8 text-xs uppercase tracking-[0.28em] text-[#A7A29A]">
                {dict.home.note}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-[#C8A96A]/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-4 shadow-2xl">
                <div className="aspect-[4/5] rounded-[1.5rem] border border-[#F5F1EA]/10 bg-[linear-gradient(135deg,rgba(245,241,234,0.12),rgba(200,169,106,0.08)),url('/framehaus/hero-card.jpg')] bg-cover bg-center" />

                <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-[#F5F1EA]/10 bg-[#0D0D0D]/70 p-5 backdrop-blur-xl">
                  <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-[#C8A96A]/15 text-[#C8A96A]">
                    <Camera size={18} />
                  </div>

                  <h2 className="font-editorial text-3xl font-semibold tracking-[-0.04em]">
                    FrameHaus Studio
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#A7A29A]">
                    Editorial photography, video production, and creative
                    direction for brands and visual stories.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>

      <section className="relative z-10 border-t border-[#F5F1EA]/10 bg-[#0D0D0D] py-20">
        <Container>
          <Reveal>
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
                {dict.home.statementEyebrow}
              </p>

              <h2 className="font-editorial text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#F5F1EA] sm:text-5xl lg:text-6xl">
                {dict.home.statementTitle}
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-[#A7A29A] sm:text-lg">
                {dict.home.statement}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </section>
  );
}
