const etater = [
  { navn: "Skatteetaten", omraade: "Skatt, avgifter, folkeregister" },
  { navn: "NAV", omraade: "Trygd, arbeid, ytelser" },
  { navn: "Lånekassen", omraade: "Utdanningsstøtte" },
  { navn: "Helsedirektoratet", omraade: "Helse og pasientrettigheter" },
  { navn: "Husbanken", omraade: "Bolig, bostøtte" },
  { navn: "SSB", omraade: "Statistikk og analyser" },
  { navn: "Utdanningsdirektoratet", omraade: "Skole, utdanning" },
  { navn: "Miljødirektoratet", omraade: "Miljø og klima" },
];

export function OffentligData() {
  return (
    <section className="border-b border-border" id="offentlig-data">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Offentlig data, tilgjengeliggjort
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              En inngang til det offentlige Norge.
            </h2>
            <p className="mt-6 text-lg text-muted">
              nrki skal fungere som et lag over det norske offentlige Norge.
              Når du spør om studielån, skatt, trygd eller helse, henter
              tjenesten svar fra de offisielle kildene — og viser deg hvor
              svaret kommer fra.
            </p>
            <p className="mt-4 text-lg text-muted">
              Offentlige etater kan tilgjengeliggjøre strukturerte data som
              tjenesten verifiserer svar mot, slik at du slipper å gjette hvem
              som har rett.
            </p>
          </div>
          <div>
            <div className="rounded-2xl border border-border bg-background p-2">
              <ul className="divide-y divide-border">
                {etater.map((e) => (
                  <li
                    key={e.navn}
                    className="flex items-center justify-between px-4 py-3 text-sm"
                  >
                    <span className="font-semibold">{e.navn}</span>
                    <span className="text-muted">{e.omraade}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-3 text-xs text-muted">
              Et lite utvalg. Hele det offentlige Norge kan delta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
