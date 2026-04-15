type Verdi = {
  type?: "positiv" | "negativ" | "advarsel" | "noeytral";
  tekst: string;
};

type Rad = {
  dimensjon: string;
  kommersiell: Verdi;
  nrki: Verdi;
};

const rader: Rad[] = [
  {
    dimensjon: "Generell ytelse på frittstående oppgaver",
    kommersiell: { type: "positiv", tekst: "Best i klassen" },
    nrki: { type: "noeytral", tekst: "God nok" },
  },
  {
    dimensjon: "Datasuverenitet (norsk/EU)",
    kommersiell: { type: "advarsel", tekst: "CLOUD Act" },
    nrki: { type: "positiv", tekst: "Valgfritt" },
  },
  {
    dimensjon: "Forankret i norsk offentlig data",
    kommersiell: { type: "noeytral", tekst: "Tilfeldig" },
    nrki: { type: "positiv", tekst: "Standard" },
  },
  {
    dimensjon: "Modellvalg-styring for leverandør",
    kommersiell: { type: "negativ", tekst: "" },
    nrki: { type: "positiv", tekst: "" },
  },
  {
    dimensjon: "Demokratisk styring",
    kommersiell: { type: "negativ", tekst: "" },
    nrki: { type: "positiv", tekst: "" },
  },
  {
    dimensjon: "Pris for innbygger",
    kommersiell: { type: "noeytral", tekst: "Gratis / abonnement" },
    nrki: { type: "noeytral", tekst: "Gratis" },
  },
  {
    dimensjon: "Pris for liten kommune å ta i bruk",
    kommersiell: { type: "negativ", tekst: "Tusenvis per måned" },
    nrki: { type: "positiv", tekst: "Gratis" },
  },
  {
    dimensjon: "Sertifisering for offentlig sektor",
    kommersiell: { type: "noeytral", tekst: "Begrenset" },
    nrki: { type: "positiv", tekst: "Standard" },
  },
];

function Celle({ verdi }: { verdi: Verdi }) {
  const { type = "noeytral", tekst } = verdi;
  const ikon =
    type === "positiv" ? (
      <span className="text-emerald-300" aria-hidden>
        ✓
      </span>
    ) : type === "negativ" ? (
      <span className="text-background/40" aria-hidden>
        ✗
      </span>
    ) : type === "advarsel" ? (
      <span className="text-amber-300" aria-hidden>
        ⚠
      </span>
    ) : null;

  const tekstKlasse =
    type === "noeytral" ? "text-background/70" : "text-background";

  return (
    <span className="inline-flex items-center gap-2">
      {ikon}
      {tekst && <span className={tekstKlasse}>{tekst}</span>}
    </span>
  );
}

export function Posisjonering() {
  return (
    <section
      id="posisjonering"
      className="border-b border-border bg-foreground text-background scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
          Posisjonering
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Vi konkurrerer ikke. Vi komplementerer.
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-background/70">
          ChatGPT, Claude og Gemini vil sannsynligvis være bedre på generelle
          oppgaver i overskuelig fremtid — vi har verken budsjettet eller
          ambisjonen å konkurrere på frontier-ytelse. Det vi kan tilby er noe
          annet: tillit, sporbarhet, og en infrastruktur som offentlig sektor
          har bygget for offentlig sektor.
        </p>

        <div className="mt-12 overflow-x-auto border border-background/20">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-background/5 text-xs uppercase tracking-wider text-background/60">
              <tr>
                <th className="px-5 py-3 font-semibold">Dimensjon</th>
                <th className="px-5 py-3 font-semibold">
                  ChatGPT / Claude / Gemini
                </th>
                <th className="px-5 py-3 font-semibold">nrki</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-background/10">
              {rader.map((r) => (
                <tr key={r.dimensjon}>
                  <td className="px-5 py-3 font-medium">{r.dimensjon}</td>
                  <td className="px-5 py-3">
                    <Celle verdi={r.kommersiell} />
                  </td>
                  <td className="px-5 py-3">
                    <Celle verdi={r.nrki} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 max-w-3xl text-background/70">
          Det er fullt mulig å bruke begge: en saksbehandler kan bruke ChatGPT
          for kreativ utforskning og nrki for det som må kunne kildebelegges,
          arkiveres og forsvares overfor innbyggeren.
        </p>
      </div>
    </section>
  );
}
