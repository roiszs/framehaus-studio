import Link from "next/link";

type FrameHausLogoProps = {
  href?: string;
  compact?: boolean;
};

export default function FrameHausLogo({
  href = "/",
  compact = false,
}: FrameHausLogoProps) {
  return (
    <Link href={href} className="group inline-flex min-w-0 items-center gap-3">
      <div className="relative flex size-11 shrink-0 items-center justify-center rounded-full border border-[#C8A96A]/35 bg-[#C8A96A]/10 text-[#C8A96A] transition group-hover:border-[#C8A96A]/65 group-hover:bg-[#C8A96A]/15">
        <svg
          viewBox="0 0 48 48"
          className="size-6"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M14 31.5V20.8L24 13l10 7.8v10.7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 34.5h15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="24"
            cy="25"
            r="7"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M24 18v14M18.8 21.4l10.4 7.2M29.2 21.4l-10.4 7.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </div>

      {!compact ? (
        <div className="min-w-0 leading-none">
          <p className="font-editorial text-2xl font-semibold tracking-[-0.055em] text-[#F5F1EA] sm:text-3xl">
            FrameHaus
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.32em] text-[#B9B2A8] sm:text-[10px]">
            Studio
          </p>
        </div>
      ) : null}
    </Link>
  );
}
