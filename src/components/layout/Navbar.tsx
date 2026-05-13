"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageToggle from "@/components/layout/LanguageToggle";
import FrameHausLogo from "@/components/brand/FrameHausLogo";
import Container from "@/components/shared/Container";
import { navigation } from "@/lib/data/navigation";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, dict } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#F5F1EA]/10 bg-[#0D0D0D]/82 backdrop-blur-2xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 sm:h-20">
          <FrameHausLogo />

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium transition",
                    active
                      ? "text-[#F5F1EA]"
                      : "text-[#B9B2A8] hover:text-[#F5F1EA]"
                  )}
                >
                  {item.label[lang]}
                  {active ? (
                    <span className="absolute -bottom-3 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#C8A96A]" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle />

            <Button
              asChild
              className="framehaus-white-button rounded-full bg-[#F5F1EA] px-5 text-[#0D0D0D] shadow-[0_0_35px_rgba(245,241,234,0.08)] hover:bg-[#F5F1EA]"
            >
              <Link href="/contact">
                {dict.nav.cta}
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <LanguageToggle />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label={dict.nav.openMenu}
                  className="flex size-10 items-center justify-center rounded-full border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 text-[#F5F1EA] transition hover:bg-[#F5F1EA]/10"
                >
                  <Menu size={18} />
                </button>
              </SheetTrigger>

              <SheetContent className="w-[88vw] border-[#F5F1EA]/10 bg-[#0D0D0D] p-6 text-[#F5F1EA] sm:max-w-md">
                <SheetTitle className="sr-only">{dict.nav.openMenu}</SheetTitle>

                <div className="mt-8">
                  <div className="mb-10 rounded-[2rem] border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-5">
                    <p className="font-editorial text-3xl font-semibold tracking-[-0.04em]">
                      FrameHaus
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#B9B2A8]">
                      {lang === "en"
                        ? "Premium photography and video studio."
                        : "Estudio premium de fotografía y video."}
                    </p>
                  </div>

                  <nav className="flex flex-col gap-2">
                    {navigation.map((item) => {
                      const active = pathname === item.href;

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "rounded-2xl px-4 py-4 text-2xl font-medium transition",
                            active
                              ? "bg-[#F5F1EA] text-[#0D0D0D]"
                              : "text-[#F5F1EA] hover:bg-[#F5F1EA]/8"
                          )}
                        >
                          {item.label[lang]}
                        </Link>
                      );
                    })}
                  </nav>

                  <Button
                    asChild
                    className="framehaus-white-button mt-10 h-12 w-full rounded-full bg-[#F5F1EA] text-[#0D0D0D] hover:bg-[#F5F1EA]"
                  >
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      {dict.nav.cta}
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}
