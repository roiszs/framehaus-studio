"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Camera, Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageToggle from "@/components/layout/LanguageToggle";
import Container from "@/components/shared/Container";
import { navigation } from "@/lib/data/navigation";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, dict } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#F5F1EA]/10 bg-[#0D0D0D]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full border border-[#C8A96A]/30 bg-[#C8A96A]/10 text-[#C8A96A] transition group-hover:border-[#C8A96A]/60">
              <Camera size={18} />
            </div>

            <div className="leading-none">
              <p className="font-editorial text-2xl font-semibold tracking-[-0.04em] text-[#F5F1EA]">
                FrameHaus
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-[#A7A29A]">
                Studio
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition",
                    active
                      ? "text-[#F5F1EA]"
                      : "text-[#A7A29A] hover:text-[#F5F1EA]"
                  )}
                >
                  {item.label[lang]}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle />

            <Button
              asChild
              className="rounded-full bg-[#F5F1EA] px-5 text-[#0D0D0D] hover:bg-[#C8A96A]"
            >
              <Link href="/contact">
                {dict.nav.cta}
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageToggle />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label={dict.nav.openMenu}
                  className="flex size-10 items-center justify-center rounded-full border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 text-[#F5F1EA]"
                >
                  <Menu size={18} />
                </button>
              </SheetTrigger>

              <SheetContent className="border-[#F5F1EA]/10 bg-[#0D0D0D] text-[#F5F1EA]">
                <SheetTitle className="sr-only">{dict.nav.openMenu}</SheetTitle>

                <div className="mt-10">
                  <div className="mb-10">
                    <p className="font-editorial text-3xl font-semibold tracking-[-0.04em]">
                      FrameHaus
                    </p>
                    <p className="mt-2 text-sm text-[#A7A29A]">
                      Premium Photography & Video Studio
                    </p>
                  </div>

                  <nav className="flex flex-col gap-5">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="text-2xl font-medium text-[#F5F1EA]"
                      >
                        {item.label[lang]}
                      </Link>
                    ))}
                  </nav>

                  <Button
                    asChild
                    className="mt-10 w-full rounded-full bg-[#F5F1EA] text-[#0D0D0D] hover:bg-[#C8A96A]"
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
