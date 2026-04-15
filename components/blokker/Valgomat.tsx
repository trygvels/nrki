"use client";

import { useState } from "react";
import type { ValgAlternativ } from "@/lib/demo-samtaler";

type Props = {
  sporsmal: string;
  alternativer: ValgAlternativ[];
  kilde: string;
  kildeURL?: string;
  kompakt?: boolean;
};

export function Valgomat({ sporsmal, alternativer, kilde, kildeURL, kompakt }: Props) {
  const [valgt, setValgt] = useState<string | null>(null);
  const padding = kompakt ? "px-3 py-2.5" : "px-4 py-3.5";
  const innerPadding = kompakt ? "p-3" : "p-4";

  const valgtAlt = alternativer.find((a) => a.id === valgt);

  return (
    <div className="border border-border bg-background">
      <div
        className={`flex items-center justify-between gap-3 border-b border-border ${padding} text-[10px] font-semibold uppercase tracking-wider text-flagg-bla`}
      >
        <span className="inline-flex items-center gap-1.5">
          <span className="inline-block h-2 w-2 bg-flagg-bla" aria-hidden />
          MCP-app · NRK Valgomat
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

      <div className={innerPadding}>
        <p className="text-sm font-semibold leading-snug text-foreground">
          {sporsmal}
        </p>

        <div className="mt-3 grid gap-1.5">
          {alternativer.map((alt) => {
            const erValgt = valgt === alt.id;
            return (
              <button
                key={alt.id}
                type="button"
                onClick={() => setValgt(alt.id)}
                className={`flex items-center justify-between border px-3 py-2 text-left text-xs transition ${
                  erValgt
                    ? "border-accent bg-accent text-accent-ink"
                    : "border-border bg-background hover:border-foreground"
                }`}
              >
                <span>{alt.tekst}</span>
                {erValgt && <span aria-hidden>✓</span>}
              </button>
            );
          })}
        </div>

        {valgtAlt && (
          <div className="mt-3 border border-border bg-subtle px-3 py-2 text-xs text-foreground">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted">
              Foreløpig match
            </div>
            <p className="mt-1">{valgtAlt.match}</p>
          </div>
        )}

        <p className="mt-3 text-[10px] italic text-muted">
          Demo: ett av ca. 30 spørsmål i ekte valgomat. I produksjon ville
          MCP-appen tatt deg gjennom hele testen og lagt opp resultatet
          uten at nrki ser svarene dine.
        </p>
      </div>
    </div>
  );
}
