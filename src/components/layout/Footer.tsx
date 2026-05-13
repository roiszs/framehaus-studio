"use client";

import Link from "next/link";
import Container from "@/components/shared/Container";
import FrameHausLogo from "@/components/brand/FrameHausLogo";
import { navigation } from "@/lib/data/navigation";
import { useLang } from "@/lib/i18n/LanguageProvider";

export default function Footer() {
  const { lang, dict } = useLang();

  const footerLinks = [
    ...navigation,
    {
      href: "/case-study",
      label: {
        en: "Case Study",
        es: "Caso de estudio",
      },
    },
  ];

  return (
    <footer className="border-t border-[#F5F1EA]/10 bg-[#0A0A0A]">
      <Container>
        <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:py-16">
          <div>
            <FrameHausLogo />

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#B9B2A8]">
              {dict.footer.description}
            </p>

            <p className="mt-7 max-w-xl text-xs uppercase leading-6 tracking-[0.24em] text-[#C8A96A]">
              {dict.footer.builtBy}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-1 lg:justify-self-end">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-[#F5F1EA]/10 px-4 py-2 text-center text-sm text-[#B9B2A8] transition hover:border-[#C8A96A]/30 hover:bg-[#F5F1EA]/5 hover:text-[#F5F1EA] lg:min-w-36"
              >
                {item.label[lang]}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#F5F1EA]/10 py-6 text-xs text-[#B9B2A8] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FrameHaus Studio.</p>
          <p>{dict.footer.bottom}</p>
        </div>
      </Container>
    </footer>
  );
}
