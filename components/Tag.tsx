type Variant = "default" | "ok" | "warn" | "info";

const styles: Record<Variant, string> = {
  default: "border-border bg-background text-foreground",
  ok: "border-emerald-200 bg-emerald-50 text-emerald-800",
  warn: "border-amber-200 bg-amber-50 text-amber-800",
  info: "border-sky-200 bg-sky-50 text-sky-800",
};

export function Tag({
  children,
  variant = "default",
  title,
}: {
  children: React.ReactNode;
  variant?: Variant;
  title?: string;
}) {
  return (
    <span
      title={title}
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium leading-none ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
