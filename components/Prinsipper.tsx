const prinsipper = [
  {
    tittel: "Trygg",
    beskrivelse:
      "Vurderte og testede svar. Tjenesten tar ansvar for ikke å gi skadelig eller villedende veiledning — særlig på helse, økonomi og rettigheter.",
  },
  {
    tittel: "Upartisk",
    beskrivelse:
      "Balanserte og nyanserte svar på politiske og verdiladede spørsmål. Brukeren blir hjulpet til å forstå — ikke overbevist.",
  },
  {
    tittel: "Verifisert",
    beskrivelse:
      "Svar er forankret i åpne, offentlige kilder. Kilder oppgis og lenkes, slik at alle kan kontrollere påstander selv.",
  },
  {
    tittel: "Åpen",
    beskrivelse:
      "Åpen kildekode, åpne datasett og offentlig revisjon. Sivilsamfunn, forskere og etater kan granske hvordan tjenesten virker.",
  },
  {
    tittel: "Offentlig",
    beskrivelse:
      "Statlig mandatert og demokratisk styrt. Tjenesten har ingen kommersielle insentiver som kan komme i konflikt med brukerens interesser.",
  },
  {
    tittel: "Gratis for alle",
    beskrivelse:
      "Tilgjengelig for alle som bor i Norge, uten betalingsmur. KI skal ikke bli et nytt digitalt klasseskille.",
  },
];

export function Prinsipper() {
  return (
    <section className="border-b border-border bg-subtle" id="prinsipper">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Prinsipper
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Seks prinsipper nrki er bygget på.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Disse prinsippene er ikke markedsføring — de er tekniske og
            organisatoriske krav tjenesten må innfri for å kunne kalles en
            allmenn KI-tjeneste.
          </p>
        </div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {prinsipper.map((p, i) => (
            <li
              key={p.tittel}
              className="flex flex-col gap-3 bg-background p-8"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold">{p.tittel}</h3>
              </div>
              <p className="text-muted">{p.beskrivelse}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
