"use client";

import Reveal from "@/components/motion/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { useLang } from "@/lib/i18n/LanguageProvider";

export default function PackagesPage() {
  const { dict } = useLang();
  const page = dict.pages.packages;

  return (
    <section className="min-h-[70vh] bg-[#0D0D0D] py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={page.eyebrow}
            title={page.title}
            description={page.description}
          />
        </Reveal>
      </Container>
    </section>
  );
}
