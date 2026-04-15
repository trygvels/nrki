type Storrelse = "sm" | "md" | "lg";

const sizes: Record<Storrelse, string> = {
  sm: "text-base px-1.5 py-0.5",
  md: "text-2xl px-2 py-1",
  lg: "text-5xl px-3 py-2",
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
      className={`inline-flex bg-white font-black leading-none tracking-tight ${sizes[storrelse]} ${className}`}
    >
      <span className="text-accent">nr</span>
      <span className="text-flagg-bla">ki</span>
    </span>
  );
}
