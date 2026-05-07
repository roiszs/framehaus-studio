"use client";

import { useLang } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center rounded-full border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-1">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "rounded-full px-3 py-1 text-xs font-medium transition",
          lang === "en"
            ? "bg-[#F5F1EA] text-[#0D0D0D]"
            : "text-[#A7A29A] hover:text-[#F5F1EA]"
        )}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLang("es")}
        className={cn(
          "rounded-full px-3 py-1 text-xs font-medium transition",
          lang === "es"
            ? "bg-[#F5F1EA] text-[#0D0D0D]"
            : "text-[#A7A29A] hover:text-[#F5F1EA]"
        )}
      >
        ES
      </button>
    </div>
  );
}
