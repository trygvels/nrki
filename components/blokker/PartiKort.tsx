import { partiVedId } from "@/lib/partier";
import type { PartiKortKompakt } from "@/lib/demo-samtaler";

type Props = {
  kort: PartiKortKompakt[];
  etikett?: string;
  kompakt?: boolean;
};

export function PartiKort({ kort, etikett, kompakt }: Props) {
  const enkelt = kort.length === 1;
  const padding = kompakt ? "px-2.5 py-2" : "px-3 py-2.5";
  return (
    <div className="border border-border bg-background">
      <div
        className={`flex items-center justify-between gap-3 border-b border-border ${padding} text-[10px] font-semibold uppercase tracking-wider text-flagg-bla`}
      >
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 bg-flagg-bla" aria-hidden />
          MCP-app · Stortingets partier
        </span>
        {etikett && <span className="text-muted">{etikett}</span>}
      </div>
      <ul
        className={
          enkelt
            ? "p-2"
            : "grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {kort.map(({ partiId, posisjon }) => {
          const p = partiVedId(partiId);
          if (!p) return null;
          return (
            <li
              key={partiId}
              className={`flex items-center justify-between gap-2 bg-background ${
                enkelt ? "px-3 py-3" : "px-3 py-2.5"
              }`}
            >
              <span className="flex min-w-0 items-center gap-2.5">
                <span
                  className="inline-block h-3 w-3 shrink-0"
                  style={{ backgroundColor: p.farge }}
                  aria-hidden
                />
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-foreground">
                    {p.navn}
                  </span>
                  {posisjon && (
                    <span className="block text-xs text-muted">{posisjon}</span>
                  )}
                </span>
              </span>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-[11px] font-medium text-accent hover:underline"
              >
                Programmet ↗
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
