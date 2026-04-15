import type { SatsRad } from "@/lib/demo-samtaler";

type Props = {
  tittel: string;
  rader: SatsRad[];
  kilde: string;
  kildeURL?: string;
  kompakt?: boolean;
};

export function SatsKort({ tittel, rader, kilde, kildeURL, kompakt }: Props) {
  const padding = kompakt ? "px-3 py-2.5" : "px-4 py-3";
  return (
    <div className="border border-border bg-background">
      <div
        className={`flex items-center justify-between gap-3 border-b border-border ${padding} text-[10px] font-semibold uppercase tracking-wider text-flagg-bla`}
      >
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 bg-flagg-bla" aria-hidden />
          Datakontrakt · {tittel}
        </span>
        {kildeURL ? (
          <a
            href={kildeURL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-accent"
          >
            {kilde} ↗
          </a>
        ) : (
          <span className="text-muted">{kilde}</span>
        )}
      </div>
      <ul className="divide-y divide-border">
        {rader.map((r, i) => (
          <li
            key={i}
            className={`flex items-baseline justify-between gap-3 ${padding} text-sm`}
          >
            <span className="min-w-0 text-muted">
              <span className="block truncate text-foreground">{r.tittel}</span>
              {r.periode && (
                <span className="text-[11px] text-muted">{r.periode}</span>
              )}
            </span>
            <span className="shrink-0 font-mono text-sm font-semibold text-foreground">
              {r.verdi}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
