import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#C8A96A]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-editorial text-3xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#F5F1EA] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#B9B2A8] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
