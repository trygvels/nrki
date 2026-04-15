"use client";

import { useState } from "react";
import { Tag } from "@/components/Tag";
import {
  sandboxEtater,
  sandboxResultater,
  type SandboxEtat,
} from "@/lib/sandbox-mock-data";

type Steg = "login" | "opplasting" | "modeller" | "resultat";

const tilgjengeligeModeller = [
  { id: "claude-sonnet", navn: "Claude Sonnet 4.5", kategori: "frontier" as const },
  { id: "normistral", navn: "NorMistral 7B", kategori: "norsk-hostet" as const },
  { id: "egen-llama", navn: "Egen Llama-instans", kategori: "selv-hostet" as const },
];

export function SandboxMock() {
  const [steg, setSteg] = useState<Steg>("login");
  const [etat, setEtat] = useState<SandboxEtat>(sandboxEtater[0]);
  const [opplastet, setOpplastet] = useState(false);
  const [valgteModeller, setValgteModeller] = useState<string[]>([
    "claude-sonnet",
    "normistral",
  ]);

  const nullstill = () => {
    setSteg("login");
    setEtat(sandboxEtater[0]);
    setOpplastet(false);
    setValgteModeller(["claude-sonnet", "normistral"]);
  };

  const toggleModell = (id: string) => {
    setValgteModeller((arr) =>
      arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id],
    );
  };

  const resultater = (sandboxResultater[etat.id] ?? []).filter((r) =>
    valgteModeller.includes(r.modellId),
  );

  return (
    <section
      id="sandbox"
      className="border-b border-border bg-subtle scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Sandbox
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Test før dere åpner for innbyggerne.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Innloggings-portal for offentlige aktører. Last opp deres eget
          materiale, velg modeller å sammenligne, og se hvordan de svarer på
          deres faktiske spørsmål.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
          {/* Stegindikator */}
          <div className="flex items-center justify-between border-b border-border bg-subtle px-5 py-3 text-xs">
            <div className="flex items-center gap-3">
              {(["login", "opplasting", "modeller", "resultat"] as Steg[]).map(
                (s, i) => (
                  <div
                    key={s}
                    className={`flex items-center gap-2 ${
                      s === steg ? "font-semibold text-accent" : "text-muted"
                    }`}
                  >
                    <span
                      className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] ${
                        s === steg
                          ? "bg-accent text-accent-ink"
                          : "border border-border bg-background"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="hidden sm:inline">
                      {s === "login" && "Logg inn"}
                      {s === "opplasting" && "Last opp"}
                      {s === "modeller" && "Velg modeller"}
                      {s === "resultat" && "Sammenlign"}
                    </span>
                  </div>
                ),
              )}
            </div>
            <span className="text-[10px] uppercase tracking-wider text-muted">
              Demo — ingen ekte modellkjøring
            </span>
          </div>

          <div className="p-6 sm:p-8">
            {steg === "login" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">
                    Logg inn som offentlig aktør
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    I produksjon: ID-porten / Maskinporten. I demoen: velg en
                    forhåndsregistrert etat.
                  </p>
                </div>
                <select
                  value={etat.id}
                  onChange={(e) => {
                    const valgt = sandboxEtater.find(
                      (x) => x.id === e.target.value,
                    );
                    if (valgt) setEtat(valgt);
                  }}
                  className="block w-full max-w-sm rounded-lg border border-border bg-background px-4 py-3 text-base focus:border-accent focus:outline-none"
                >
                  {sandboxEtater.map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.navn} — {e.beskrivelse}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => setSteg("opplasting")}
                  className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink hover:brightness-110"
                >
                  Logg inn →
                </button>
              </div>
            )}

            {steg === "opplasting" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">
                    Last opp testdokument
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Drag-drop en PDF, eller bruk det forhåndsvalgte
                    eksempeldokumentet.
                  </p>
                </div>
                <button
                  onClick={() => setOpplastet(true)}
                  className={`flex w-full items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-10 text-sm transition ${
                    opplastet
                      ? "border-accent bg-accent/5"
                      : "border-border bg-subtle hover:border-foreground"
                  }`}
                >
                  {opplastet ? (
                    <>
                      <span className="text-accent">✓</span>
                      <span className="font-semibold">
                        {etat.forhåndslagetDokument}
                      </span>
                      <span className="text-muted">lastet opp</span>
                    </>
                  ) : (
                    <>
                      <span className="text-2xl text-muted" aria-hidden>
                        ⤴
                      </span>
                      <span>Klikk for å bruke eksempeldokument</span>
                    </>
                  )}
                </button>
                <div className="rounded-lg bg-subtle p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Forhåndsdefinert testspørsmål
                  </div>
                  <p className="mt-2 text-sm">{etat.testSporsmal}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSteg("login")}
                    className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-foreground"
                  >
                    ← Tilbake
                  </button>
                  <button
                    onClick={() => setSteg("modeller")}
                    disabled={!opplastet}
                    className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink hover:brightness-110 disabled:opacity-40"
                  >
                    Neste →
                  </button>
                </div>
              </div>
            )}

            {steg === "modeller" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">
                    Velg modeller å sammenligne
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Hak av modellene dere vil teste mot. Vi viser svarene side
                    om side.
                  </p>
                </div>
                <div className="space-y-2">
                  {tilgjengeligeModeller.map((m) => {
                    const valgt = valgteModeller.includes(m.id);
                    return (
                      <label
                        key={m.id}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition ${
                          valgt
                            ? "border-accent bg-accent/5"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={valgt}
                          onChange={() => toggleModell(m.id)}
                          className="h-4 w-4 accent-accent"
                        />
                        <span className="font-semibold">{m.navn}</span>
                        <Tag>{m.kategori}</Tag>
                      </label>
                    );
                  })}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSteg("opplasting")}
                    className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-foreground"
                  >
                    ← Tilbake
                  </button>
                  <button
                    onClick={() => setSteg("resultat")}
                    disabled={valgteModeller.length === 0}
                    className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink hover:brightness-110 disabled:opacity-40"
                  >
                    Kjør sammenligning →
                  </button>
                </div>
              </div>
            )}

            {steg === "resultat" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">
                    Sammenligning av svar
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    <strong>Spørsmål:</strong> {etat.testSporsmal}
                  </p>
                </div>
                <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
                  {resultater.map((r) => (
                    <div
                      key={r.modellId}
                      className="flex flex-col gap-3 rounded-xl border border-border bg-subtle p-5"
                    >
                      <header className="flex items-center justify-between">
                        <h4 className="font-semibold">{r.modellNavn}</h4>
                        <Tag
                          variant={
                            r.kategori === "frontier" ? "warn" : "ok"
                          }
                        >
                          {r.kategori}
                        </Tag>
                      </header>
                      <p className="text-sm leading-relaxed">{r.svar}</p>
                      <dl className="mt-2 grid grid-cols-3 gap-2 border-t border-border pt-3 text-[11px]">
                        <Score
                          label="Presisjon"
                          score={r.vurdering.presisjon}
                        />
                        <Score
                          label="Kildebruk"
                          score={r.vurdering.kildebruk}
                        />
                        <Score
                          label="Norsk"
                          score={r.vurdering.norsktilpasning}
                        />
                      </dl>
                      {r.bemerkning && (
                        <p className="rounded bg-background px-3 py-2 text-xs italic text-muted">
                          {r.bemerkning}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSteg("modeller")}
                    className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-foreground"
                  >
                    ← Velg andre modeller
                  </button>
                  <button
                    onClick={nullstill}
                    className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink hover:brightness-110"
                  >
                    Start på nytt
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Score({ label, score }: { label: string; score: number }) {
  return (
    <div>
      <dt className="font-semibold uppercase tracking-wider text-muted">
        {label}
      </dt>
      <dd className="mt-0.5">
        {"★".repeat(score)}
        <span className="text-muted">{"★".repeat(5 - score)}</span>
      </dd>
    </div>
  );
}
