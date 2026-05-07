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
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-[#C8A96A]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-editorial text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-[#F5F1EA] sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-6 text-base leading-7 text-[#A7A29A] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
