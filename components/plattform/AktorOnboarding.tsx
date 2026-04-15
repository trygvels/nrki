const steg = [
  {
    nummer: "01",
    tittel: "Registrering av etaten",
    beskrivelse:
      "Tilgang opprettes via Maskinporten / ID-porten. Etaten utpeker ansvarlige kontakter for teknisk integrasjon og fagansvar.",
  },
  {
    nummer: "02",
    tittel: "Eksponering av data via MCP",
    beskrivelse:
      "Etaten setter opp en MCP-server som beskriver ressursene som skal deles. Hver ressurs får en datakontrakt.",
  },
  {
    nummer: "03",
    tittel: "Godkjenning av modeller",
    beskrivelse:
      "Etaten avgjør hvilke modellkategorier som har tilgang til ressursene. Strengeste valg: kun selv-hostet. Bredeste valg: alle godkjente.",
  },
  {
    nummer: "04",
    tittel: "Testing i sandbox før produksjon",
    beskrivelse:
      "Etaten laster opp testspørsmål og sammenligner hvordan ulike modeller svarer på deres materiale — og kan justere før innbyggerne bruker det.",
  },
];

export function AktorOnboarding() {
  return (
    <section
      id="for-aktorer"
      className="border-b border-border scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Tilkobling for offentlige aktører
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Slik ville tilkoblingen fungert.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Fire steg fra ide til kjørende integrasjon. Tekniske krav er
          beskrevet i seksjonen om standarder over.
        </p>

        <ol className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {steg.map((s) => (
            <li key={s.nummer} className="flex flex-col gap-3 bg-background p-6">
              <span className="font-mono text-sm text-accent">{s.nummer}</span>
              <h3 className="text-lg font-semibold">{s.tittel}</h3>
              <p className="text-sm text-muted">{s.beskrivelse}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
