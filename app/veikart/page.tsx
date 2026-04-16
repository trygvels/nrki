import type { Metadata } from "next";
import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Veikart",
  description:
    "Fasebasert implementeringsplan for nrki — fra politisk forankring i 2026 til modent økosystem i 2031.",
};

type Fase = {
  nummer: string;
  tittel: string;
  tidsrom: string;
  aarligDrift: string;
  ingress: string;
  punkter: string[];
  port: string;
};

const faser: Fase[] = [
  {
    nummer: "0",
    tittel: "Politisk forankring",
    tidsrom: "0–6 måneder",
    aarligDrift: "30–50 mill",
    ingress:
      "Få Stortinget og en regjering til å bestille utredning.",
    punkter: [
      "Stortingsmelding eller NOU-utredning bestilles fra Kommunal- og distriktsdepartementet.",
      "Foreløpig sekretariat (3–5 personer) plasseres hos Digdir med tilknytning til Nasjonalbibliotekets AI-lab.",
      "Høringsrunde med etater, akademia, sivilsamfunn, IKT-Norge, Tekna.",
      "Sammenligning med europeiske initiativ (BSC, IT4Innovations, Mistral-relaterte planer).",
    ],
    port: "Stortingsvedtak eller konkret oppdragsbrev fra KDD.",
  },
  {
    nummer: "1",
    tittel: "Fundament",
    tidsrom: "6–18 måneder",
    aarligDrift: "200–300 mill",
    ingress:
      "Etablere organisasjonen, få fagrådet på plass, starte tre konkrete pilotsamarbeid.",
    punkter: [
      "Eget forvaltningsorgan (arbeidsnavn Riks-KI) etableres under KDD.",
      "Kjerneteam på 15–25 personer på tvers av modell, infrastruktur, datakontrakter, sikkerhet, redaksjonell linje.",
      "Fagråd på 13 medlemmer oppnevnes.",
      "Åpen referansearkitektur publiseres på GitHub.",
      "Pilotavtaler med Skatteetaten, Lånekassen og Lovdata.",
    ],
    port: "Pilotetatene har MCP-servere i sandbox, fagrådet har vedtatt redaksjonell linje v1, referansearkitektur er vurdert av to uavhengige fagmiljøer.",
  },
  {
    nummer: "2",
    tittel: "Teknisk pilot",
    tidsrom: "18–36 måneder",
    aarligDrift: "400–600 mill",
    ingress:
      "Bygge noe som faktisk virker, evaluere grundig, la en begrenset gruppe teste i praksis.",
    punkter: [
      "MCP-servere fra pilotetatene i produksjon, med versjonerte datakontrakter.",
      "Modellvalg gjennom strukturert evaluering (NorMistral, NorLLM, Llama, Mistral-Large, Gemma).",
      "Norsk fine-tuning med Språkbanken-korpus, stortingsdokumenter, Lovdata.",
      "RAG-infrastruktur i drift (hybrid: vektor + BM25 + re-ranking).",
      "Lukket beta med 5 000–10 000 testbrukere via ID-porten.",
      "Red teaming-syklus etablert, første kvartalsrapport til Stortinget.",
    ],
    port: "Fagrådet godkjenner balanse-evalueringen, feilraten på fakta er under definert terskel, og Datatilsynet har godkjent personvernmodellen.",
  },
  {
    nummer: "3",
    tittel: "Offentlig lansering",
    tidsrom: "36–48 måneder",
    aarligDrift: "600–900 mill",
    ingress: "Tjenesten åpnes for alle som bor i Norge.",
    punkter: [
      "Full produksjon for innbyggere med åpen tilgang og ID-porten for personaliserte svar.",
      "Widget-løsning for kommuner — én linje HTML.",
      "Hooks-API åpnes for etater.",
      "50–100 datakilder tilkoblet: alle store etater og 20–30 kommuner.",
      "Lov om offentlig kunstig intelligens trer i kraft.",
    ],
    port: "Driftsindikatorer innenfor terskel, tilstrekkelig geografisk og språklig dekning, ISO 27001-sertifisering i orden.",
  },
  {
    nummer: "4",
    tittel: "Økosystem og modning",
    tidsrom: "48+ måneder",
    aarligDrift: "700–1000 mill",
    ingress: "Bli en plattform andre bygger på, ikke bare en chatbot.",
    punkter: [
      "Tredjepartsapper på nrki-API (saksbehandler-verktøy, utdanning, forskning).",
      "Samiske språk i full støtte — nordsamisk først, så lule- og sørsamisk.",
      "EU-samarbeid gjennom åpne modeller og datakontrakt-standarder.",
      "Utveksling av modeller og evalueringer mellom offentlige KI-initiativ i EU.",
    ],
    port: "Løpende revisjon, ingen definert sluttport.",
  },
];

const risikoer: Array<{ risiko: string; tiltak: string }> = [
  {
    risiko: "Politisk vilje svekkes før Fase 2 er ferdig",
    tiltak:
      "Lovforankring tidlig i Fase 1, flerårige budsjettavsetninger i statsbudsjettet.",
  },
  {
    risiko: "Modellutviklingen holder ikke følge med frontier",
    tiltak:
      "Modellagnostisk arkitektur; evalueringsramme som gjør modellbytte mulig hvert halvår.",
  },
  {
    risiko: "Etatene bidrar ikke med data",
    tiltak:
      "Forskrift under Digdir som krever åpne MCP-servere; pilotetatene får finansiert integrasjon.",
  },
  {
    risiko: "Datatilsynet stopper personvernopplegget",
    tiltak: "Tidlig forhåndsgodkjenning (DPIA) i Fase 1, kontinuerlig dialog.",
  },
  {
    risiko: "Rekrutteringsutfordringer i et hett KI-marked",
    tiltak:
      "Partneravtaler med Simula, NTNU, UiO, UiB; konkurransedyktige rammer innenfor statlig lønnsregulativ.",
  },
];

export default function VeikartPage() {
  return (
    <>
      <Disclaimer />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Tidslinje />
        <Faser />
        <Beslutningsporter />
        <Risikoregister />
        <Lenker />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="inline-block h-2 w-2 bg-accent" aria-hidden />
          Veikart 2026–2031
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Fra manifest til infrastruktur.
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-muted sm:text-xl">
          En tjeneste som skal være infrastruktur for alle i Norge kan ikke
          lanseres ferdig på dag én. Dette er fem faser — med tydelige mål,
          beslutningsporter, og kriterier som må være oppfylt før neste fase
          starter. Bedre å bruke tolv måneder lenger enn å lansere noe som
          gir dårlige svar om trygd eller rettigheter.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#faser"
            className="inline-flex h-12 items-center gap-2 bg-accent px-6 text-sm font-semibold text-accent-ink hover:brightness-110"
          >
            Se fasene ↓
          </a>
          <Link
            href="/arkitektur"
            className="inline-flex h-12 items-center border border-border bg-background px-6 text-sm font-semibold transition hover:border-foreground"
          >
            Teknisk arkitektur →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Tidslinje() {
  return (
    <section className="border-b border-border bg-subtle">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Tidslinje
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Fem faser over fem år.
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Tallene er grove størrelsesordener — endelige budsjetter fastsettes
          av Stortinget, og rekkefølgen kan justeres når fagmiljøer og
          etater har sagt sitt.
        </p>

        <ol className="mt-10 space-y-4">
          {faser.map((f) => (
            <li
              key={f.nummer}
              className="grid gap-4 border border-border bg-background p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6"
            >
              <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                <span className="inline-flex h-12 w-12 items-center justify-center bg-accent text-xl font-semibold text-accent-ink">
                  {f.nummer}
                </span>
                <span className="text-sm font-medium text-muted sm:hidden">
                  {f.tidsrom}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {f.tittel}
                </h3>
                <p className="mt-1 text-sm text-muted">{f.ingress}</p>
                <p className="mt-2 hidden text-sm font-medium text-muted sm:block">
                  {f.tidsrom}
                </p>
              </div>
              <div className="text-sm sm:text-right">
                <div className="font-semibold">{f.aarligDrift} kr/år</div>
                <div className="text-xs text-muted">årlig drift</div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-sm text-muted">
          Til sammenligning: NRK ~7 mrd per år, Digdir ~1 mrd, Kartverket
          ~1,4 mrd. Riks-KI i modnet tilstand er realistisk på størrelse med
          Kartverket eller 10–15 prosent av NRK.
        </p>
      </div>
    </section>
  );
}

function Faser() {
  return (
    <section id="faser" className="border-b border-border">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Fasene i detalj
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Hva skjer når.
        </h2>

        <div className="mt-12 space-y-16">
          {faser.map((f) => (
            <article
              key={f.nummer}
              className="border-l-2 border-accent pl-6 sm:pl-8"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
                  Fase {f.nummer}
                </span>
                <span className="text-sm text-muted">{f.tidsrom}</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {f.tittel}
              </h3>
              <p className="mt-3 text-lg text-muted">{f.ingress}</p>

              <ul className="mt-6 space-y-3 text-base leading-relaxed">
                {f.punkter.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-[0.55rem] inline-block h-1.5 w-1.5 shrink-0 bg-accent"
                      aria-hidden
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border border-border bg-subtle p-4 text-sm">
                <div className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  Port videre
                </div>
                <p>{f.port}</p>
              </div>

              <div className="mt-3 text-sm text-muted">
                <span className="font-medium">Årlig drift:</span>{" "}
                {f.aarligDrift} kr
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Beslutningsporter() {
  return (
    <section className="border-b border-border bg-subtle">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Beslutningsporter
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Ingen fase starter før den forrige har levert.
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Ved hver faseovergang rapporteres kvantitative kriterier til
          Stortinget. Manglende oppfyllelse utløser forlengelse av
          foregående fase, ikke videreføring med svakheter.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {[
            "Brukervekst og geografisk fordeling",
            "Feilrate på fakta (mot evalueringssett)",
            "Andel svar med kildebelegging",
            "Partipolitisk balanse-evaluering",
            "Personvernhendelser og responstid",
            "Uavhengige revisjoner og kodebidrag",
          ].map((kriterium) => (
            <li
              key={kriterium}
              className="border border-border bg-background p-4 text-sm"
            >
              {kriterium}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Risikoregister() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Risikoregister
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Hva kan gå galt, og hva gjør vi med det.
        </h2>

        <div className="mt-10 space-y-4">
          {risikoer.map((r) => (
            <article
              key={r.risiko}
              className="grid gap-3 border border-border p-5 sm:grid-cols-[1fr_2fr] sm:gap-6"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  Risiko
                </div>
                <p className="mt-1 font-medium">{r.risiko}</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  Tiltak
                </div>
                <p className="mt-1 text-muted">{r.tiltak}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lenker() {
  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Gå videre.
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Veikartet fungerer ikke alene — les også om styring, arkitektur,
          sikkerhet og hvordan privat sektor kobles på.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <LenkeKort
            href="/arkitektur"
            tittel="Teknisk arkitektur"
            beskrivelse="Tre lag, åpne grensesnitt, konkrete komponenter."
          />
          <LenkeKort
            href="/sikkerhet"
            tittel="Sikkerhet og datasuverenitet"
            beskrivelse="Trusselmodell, CLOUD Act, datasensitivitetsklasser."
          />
          <LenkeKort
            href="/partnerskap"
            tittel="For privat sektor"
            beskrivelse="Tre roller, anskaffelsesregler, SMB-strategi."
          />
          <LenkeKort
            href="/konsept"
            tittel="Konseptet i sin helhet"
            beskrivelse="Verdier, prinsipper, modellkatalog, hub-diagram."
          />
        </div>
      </div>
    </section>
  );
}

function LenkeKort({
  href,
  tittel,
  beskrivelse,
}: {
  href: string;
  tittel: string;
  beskrivelse: string;
}) {
  return (
    <Link
      href={href}
      className="group border border-border p-5 transition hover:border-foreground"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{tittel}</h3>
        <span
          className="text-accent transition group-hover:translate-x-0.5"
          aria-hidden
        >
          →
        </span>
      </div>
      <p className="mt-2 text-sm text-muted">{beskrivelse}</p>
    </Link>
  );
}
