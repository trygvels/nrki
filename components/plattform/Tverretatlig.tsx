const skilsmisseEtater = [
  {
    navn: "Folkeregisteret",
    bidrag: "Endring av sivilstand, ny adresse, oppdaterte foreldreforhold.",
  },
  {
    navn: "Skatteetaten",
    bidrag: "Skatteklasse, fordeling av fradrag, formuesfordeling og fellesgjeld.",
  },
  {
    navn: "NAV",
    bidrag: "Overgangsstønad, utvidet barnetrygd, endring i sykepengegrunnlag.",
  },
  {
    navn: "Husbanken",
    bidrag: "Bostøtte etter ny husstandssituasjon, refinansiering av fellesgjeld.",
  },
  {
    navn: "Lånekassen",
    bidrag: "Endring i samlivsstatus som påvirker rett til stipend og lån.",
  },
  {
    navn: "Domstolene",
    bidrag: "Skifte, separasjons- eller skilsmisseavtale, foreldreansvar.",
  },
];

const verdiPoenger = [
  {
    nummer: "01",
    tittel: "Komponentene kan brukes hvor som helst",
    beskrivelse:
      "Hver MCP-server, datakontrakt og widget en etat publiserer kan konsumeres av nrki, av andre etaters egne løsninger, av kommuner, og av tredjeparter. nrki er ikke et lukket felles-UI — det er et åpent register over offentlig KI-infrastruktur som hvem som helst kan koble seg på.",
  },
  {
    nummer: "02",
    tittel: "Hver etat trenger uansett data fra andre etater",
    beskrivelse:
      "NAV trenger Skatteetatens satser for å beregne ytelser. Skatteetaten trenger NAV-utbetalinger for selvangivelsen. I dag løses dette med skreddersydde integrasjoner per etatpar. Med felles MCP-protokoll blir delingen standardisert, og hver etats egne fagsystemer kan slå opp i de andre.",
  },
  {
    nummer: "03",
    tittel: "Network effects: hver ny etat øker verdien for alle",
    beskrivelse:
      "Som med veinett: ett kommunalt veistykke er begrenset, men koblet til E6 blir det vital infrastruktur. Hver MCP-tilkobling øker både svar-kvaliteten i nrki og kapasiteten i etatenes egne løsninger.",
  },
];

export function Tverretatlig() {
  return (
    <section
      id="tverretatlig"
      className="border-b border-border bg-subtle scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Tverretatlig verdi
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Verdien er i nettverket — ikke i hver enkelt chat.
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          De største etatene har allerede sine egne chat-vinduer. Hvorfor
          trenger de nrki? Fordi nrki ikke er enda et grensesnitt som
          konkurrerer med deres — det er et åpent register av MCP-baserte
          komponenter som <strong>alle</strong> kan bruke i sine egne
          løsninger, ikke bare i én felles chat. Innbyggerens spørsmål
          spenner sjelden bare én etat, og hver etats data blir mer
          verdifull jo flere andre som er koblet på samme nettverk.
        </p>

        {/* Skilsmisse-flyt */}
        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Konkret eksempel
          </p>
          <div className="mt-3 max-w-2xl border border-foreground bg-background p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Innbyggerens spørsmål
            </p>
            <p className="mt-2 font-serif text-xl italic leading-snug text-foreground">
              «Jeg og partneren min skiller oss. Hva må jeg ordne?»
            </p>
          </div>

          <div
            className="ml-6 hidden h-8 w-px bg-foreground sm:block"
            aria-hidden
          />

          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Etater som må bidra for å gi ett komplett svar
            </p>
            <ul className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {skilsmisseEtater.map((e) => (
                <li
                  key={e.navn}
                  className="flex flex-col gap-2 border-l-2 border-l-accent bg-background p-5"
                >
                  <span className="text-sm font-semibold text-foreground">
                    {e.navn}
                  </span>
                  <span className="text-sm text-muted">{e.bidrag}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 max-w-3xl text-base text-foreground/80">
            Ingen enkelt etat kan svare på hele dette spørsmålet alene.
            Når disse seks etatene har eksponert sine MCP-servere, kan
            <strong> både nrki og hver etats egne løsninger </strong>
            slå opp på tvers av dem — innbyggeren får ett samlet svar
            uavhengig av hvor de spør.
          </p>
        </div>

        {/* Tre verdi-poenger */}
        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Hvorfor det betyr noe
          </p>
          <ol className="mt-4 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
            {verdiPoenger.map((p) => (
              <li
                key={p.nummer}
                className="flex flex-col gap-3 bg-background p-6"
              >
                <span className="font-mono text-sm text-accent">{p.nummer}</span>
                <h3 className="text-lg font-semibold leading-snug">
                  {p.tittel}
                </h3>
                <p className="text-sm text-muted">{p.beskrivelse}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Hub vs lukket felles-UI */}
        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Hva slags plattform er dette egentlig?
          </p>
          <div className="mt-3 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            <div className="bg-background p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Det dette IKKE er
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                Et lukket felles-chatvindu hos Digdir
              </h3>
              <p className="mt-2 text-sm text-muted">
                Hvor alle innbyggerspørsmål må gjennom én sentral
                tjeneste, og hver etats data blir låst inne i et UI ingen
                andre kan bruke.
              </p>
            </div>
            <div className="bg-background p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                Det dette ER
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                Et åpent register av MCP-komponenter alle kan bruke
              </h3>
              <p className="mt-2 text-sm text-muted">
                Hvor hver etat publiserer sine data og widgets én gang
                — og kan konsumere andres komponenter i sine egne
                løsninger. nrki.no er bare ett av mange mulige
                grensesnitt på toppen.
              </p>
            </div>
          </div>
        </div>

        {/* En vanlig innvending — beskrivende, ikke adressert */}
        <div className="mt-12 grid gap-8 border border-foreground bg-background p-8 md:grid-cols-[1fr_2fr] md:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              En vanlig innvending
            </p>
            <h3 className="mt-2 font-serif text-2xl italic leading-snug text-foreground">
              «Men mange etater har jo allerede egne chat-vinduer.»
            </h3>
          </div>
          <div className="space-y-4 text-foreground/90">
            <p>
              Ja — og i en slik plattform ville disse chatene beholdt
              sine egne grensesnitt og merkevarer. Ved å koble dem til
              MCP-registret ville de samtidig fått tilgang til Lånekassens
              satser, NAVs ytelseslogikk, Skatteetatens regler — og alt
              det andre som ligger der.
            </p>
            <p>
              Når en etat selv publiserer ressursene sine som MCP-server,
              kan <strong>alle andre</strong> bruke dem også: andre
              etater, kommuner, sivilsamfunn, fagsystemer, akademia.
              Innbyggeren møter hver etat der den selv velger — plattformen
              øker bare hva etaten kan svare på når innbyggeren først
              er der.
            </p>
            <p className="text-sm text-muted">
              Etaten eier fremdeles dataene. Etaten godkjenner hvilke
              modeller de kan brukes med. Som bonus får den innsikt i
              tverretatlige spørsmål som er vanskelig å få i dag.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
