"use client";

import Reveal from "@/components/motion/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { useLang } from "@/lib/i18n/LanguageProvider";

export default function ContactPage() {
  const { dict } = useLang();
  const page = dict.pages.contact;

  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-[#0D0D0D] py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,169,106,0.14),transparent_30%),linear-gradient(135deg,#0D0D0D,#120F0D,#0D0D0D)]" />
      <Container className="relative z-10">
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
