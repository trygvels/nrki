type Storrelse = "sm" | "md" | "lg";

const tekstSizes: Record<Storrelse, string> = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-5xl",
};

const merkeSizes: Record<Storrelse, string> = {
  sm: "h-1.5 w-1.5",
  md: "h-2 w-2",
  lg: "h-3 w-3",
};

export function Logo({
  storrelse = "md",
  className = "",
}: {
  storrelse?: Storrelse;
  className?: string;
}) {
  return (
    <span
      aria-label="nrki"
      className={`inline-flex items-center gap-2 text-foreground ${className}`}
    >
      <span
        aria-hidden
        className={`inline-block bg-accent ${merkeSizes[storrelse]}`}
      />
      <span
        className={`font-serif font-semibold leading-none tracking-tight ${tekstSizes[storrelse]}`}
      >
        nrki
      </span>
    </span>
  );
}
