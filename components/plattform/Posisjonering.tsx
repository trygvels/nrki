type Rad = {
  dimensjon: string;
  kommersiell: string;
  nrki: string;
  vinner: "kommersiell" | "nrki" | "lik";
};

const rader: Rad[] = [
  {
    dimensjon: "Generell ytelse på frittstående oppgaver",
    kommersiell: "Best i klassen",
    nrki: "God nok",
    vinner: "kommersiell",
  },
  {
    dimensjon: "Datasuverenitet (norsk/EU)",
    kommersiell: "⚠ CLOUD Act",
    nrki: "✓ Valgfritt",
    vinner: "nrki",
  },
  {
    dimensjon: "Forankret i norsk offentlig data",
    kommersiell: "Tilfeldig",
    nrki: "✓ Standard",
    vinner: "nrki",
  },
  {
    dimensjon: "Modellvalg-styring for leverandør",
    kommersiell: "✗",
    nrki: "✓",
    vinner: "nrki",
  },
  {
    dimensjon: "Demokratisk styring",
    kommersiell: "✗",
    nrki: "✓",
    vinner: "nrki",
  },
  {
    dimensjon: "Pris for innbygger",
    kommersiell: "Gratis / abo",
    nrki: "Gratis",
    vinner: "lik",
  },
  {
    dimensjon: "Pris for liten kommune å ta i bruk",
    kommersiell: "Tusenvis per måned",
    nrki: "Gratis",
    vinner: "nrki",
  },
  {
    dimensjon: "Sertifisering for offentlig sektor",
    kommersiell: "Begrenset",
    nrki: "Standard",
    vinner: "nrki",
  },
];

export function Posisjonering() {
  return (
    <section
      id="posisjonering"
      className="border-b border-border bg-foreground text-background scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
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

        <div className="mt-12 overflow-hidden rounded-2xl border border-background/20">
          <table className="w-full text-left text-sm">
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
                  <td
                    className={`px-5 py-3 ${
                      r.vinner === "kommersiell" ? "font-semibold text-accent" : ""
                    }`}
                  >
                    {r.kommersiell}
                  </td>
                  <td
                    className={`px-5 py-3 ${
                      r.vinner === "nrki" ? "font-semibold text-accent" : ""
                    }`}
                  >
                    {r.nrki}
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
