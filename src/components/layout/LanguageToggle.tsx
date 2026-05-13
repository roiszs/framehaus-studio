"use client";

import { useLang } from "@/lib/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center rounded-full border border-[#F5F1EA]/10 bg-[#F5F1EA]/5 p-1 shadow-[inset_0_0_0_1px_rgba(245,241,234,0.02)]">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "rounded-full px-2 py-1 text-[10px] font-semibold transition sm:px-3 sm:text-xs",
          lang === "en"
            ? "bg-[#F5F1EA] text-[#0D0D0D]"
            : "text-[#B9B2A8] hover:text-[#F5F1EA]"
        )}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLang("es")}
        className={cn(
          "rounded-full px-2 py-1 text-[10px] font-semibold transition sm:px-3 sm:text-xs",
          lang === "es"
            ? "bg-[#F5F1EA] text-[#0D0D0D]"
            : "text-[#B9B2A8] hover:text-[#F5F1EA]"
        )}
      >
        ES
      </button>
    </div>
  );
}
