type Props = {
  tekst: string;
  kildeNavn: string;
  kildeRef: string;
  lenke?: string;
  kompakt?: boolean;
};

export function RaaSitat({ tekst, kildeNavn, kildeRef, lenke, kompakt }: Props) {
  const padding = kompakt ? "px-3 py-2.5" : "px-4 py-3.5";
  const tekstStr = kompakt ? "text-xs" : "text-sm";
  return (
    <figure className="border border-border border-l-4 border-l-accent bg-subtle">
      <div
        className={`flex items-center justify-between gap-3 border-b border-border ${padding} text-[10px] font-semibold uppercase tracking-wider text-accent`}
      >
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 bg-accent" aria-hidden />
          Sitert ufiltrert
        </span>
        <span className="text-muted">
          {kildeNavn} · {kildeRef}
        </span>
      </div>
      <blockquote
        className={`${padding} ${tekstStr} font-serif italic leading-relaxed text-foreground`}
      >
        «{tekst}»
      </blockquote>
      {lenke && (
        <figcaption className={`border-t border-border ${padding} text-[11px]`}>
          <a
            href={lenke}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Les hele i kilden ↗
          </a>
        </figcaption>
      )}
    </figure>
  );
}
