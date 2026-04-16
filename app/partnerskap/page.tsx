import type { Metadata } from "next";
import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Partnerskap med privat sektor",
  description:
    "Hvordan nrki bygges sammen med norsk IKT-næring — tre roller, anskaffelsesregler, SMB-strategi.",
};

type Rolle = {
  tittel: string;
  beskrivelse: string;
  kandidater: string[];
  krav: string;
};

const roller: Rolle[] = [
  {
    tittel: "Infrastrukturleverandører",
    beskrivelse:
      "Hosting av GPU-klynger, inference-endepunkter, databaser og datasentertjenester.",
    kandidater: [
      "Sky.no",
      "TietoEVRY",
      "Bulk Infrastructure",
      "Altibox",
      "Green Mountain",
      "Basefarm/Orange Business",
    ],
    krav: "Datasenter i Norge eller tilgrensende EU/EØS, norsk juridisk enhet, ISO 27001, uavhengig av amerikansk morselskap for grunnleggende drift.",
  },
  {
    tittel: "Modell-leverandører",
    beskrivelse:
      "Levering og vedlikehold av basemodeller (åpen-vekt) som nrki fine-tuner for norske formål.",
    kandidater: [
      "Mistral AI (Frankrike)",
      "NorLLM / NorGPT (Nasjonalbiblioteket)",
      "Meta Llama (åpen-vekt)",
      "Google Gemma (åpen-vekt)",
    ],
    krav: "Teknisk evaluering på norsk benchmark-pakke, åpen-vekt-lisens, støtte for fine-tuning. Frontier-modeller er valgfrie, aldri påkrevde.",
  },
  {
    tittel: "Applikasjonsleverandører",
    beskrivelse:
      "Bygger widgets for kommuner, saksbehandler-verktøy, domenespesifikke apper, bransjeløsninger.",
    kandidater: [
      "Bekk, Capgemini, Knowit",
      "Bouvet, Kantega, Variant",
      "Computas, Sopra Steria",
      "SMB-er og oppstartsselskaper",
    ],
    krav: "Registrering i sertifiseringsprogrammet 'nrki Certified Integrator', bruk av åpne standarder (MCP, OpenAPI), revisjonspliktige leveranser.",
  },
];

export default function PartnerskapPage() {
  return (
    <>
      <Disclaimer />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Utgangspunkt />
        <Roller />
        <Regler />
        <Eksempel />
        <KomIgang />
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
          For norsk privat sektor
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Plattform, ikke konkurrent.
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-muted sm:text-xl">
          nrki skal ikke bygge kommune-chatbotene som i dag leveres av
          private selskaper. nrki skal tilby en åpen plattform som gjør det
          billigere, tryggere og mer forenlig for disse selskapene å
          levere gode løsninger — slik Vipps og BankID gjorde det enklere
          for norsk banknæring.
        </p>
      </div>
    </section>
  );
}

function Utgangspunkt() {
  return (
    <section className="border-b border-border bg-subtle">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Utgangspunkt
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Plattformen skaper etterspørsel. Privat sektor dekker den.
        </h2>
        <div className="prose prose-neutral mt-6 max-w-none space-y-5 text-lg leading-relaxed">
          <p>
            Tre roller er åpne for private leverandører:{" "}
            <strong>infrastruktur</strong>,{" "}
            <strong>modeller</strong> og{" "}
            <strong>applikasjoner</strong>. Innenfor hver rolle konkurrerer
            norske og europeiske aktører. Roterende tildeling og åpne
            standarder sikrer at ingen blir låst inne — verken leverandør
            eller kjøper.
          </p>
        </div>
      </div>
    </section>
  );
}

function Roller() {
  return (
    <section id="roller" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Tre roller
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Hvor kan dere bidra.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {roller.map((r, i) => (
            <article
              key={r.tittel}
              className="flex flex-col border border-border p-5"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-accent">
                Rolle {i + 1}
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                {r.tittel}
              </h3>
              <p className="mt-3 text-sm text-muted">{r.beskrivelse}</p>

              <div className="mt-5 border-t border-border pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Kandidater
                </p>
                <ul className="mt-2 space-y-1 text-sm">
                  {r.kandidater.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto border-t border-border pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Krav
                </p>
                <p className="mt-2 text-sm text-muted">{r.krav}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Regler() {
  const regler = [
    "Offentlig anbud (LOA/FOA) for alle større avtaler.",
    "Maks fire års rammeavtale, med to ganger to års opsjon.",
    "Åpne standarder i kravspekk — MCP, OCI, OpenAPI, JSON Schema.",
    "Proprietære format tillates ikke som eneste vei inn.",
    "Maks 40 prosent av volum til én enkelt leverandør.",
    "Roterende tildeling av kapasitet mellom godkjente leverandører.",
    "Transparent prisbok publiseres offentlig.",
  ];

  return (
    <section className="border-b border-border bg-subtle">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Anskaffelsesregler
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Åpent, roterende, uten lock-in.
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Hele arkitekturens verdi hviler på at en leverandør som mister en
          kontrakt kan byttes ut uten å rive resten av stacken.
        </p>

        <ul className="mt-10 space-y-3">
          {regler.map((r) => (
            <li
              key={r}
              className="flex gap-3 border border-border bg-background p-4 text-sm"
            >
              <span
                className="mt-[0.5rem] inline-block h-1.5 w-1.5 shrink-0 bg-accent"
                aria-hidden
              />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Eksempel() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Eksempel
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Fullstack-samarbeid — hvordan brikkene henger sammen.
        </h2>

        <figure className="mt-10 border-l-2 border-accent bg-subtle p-6 text-lg leading-relaxed">
          <blockquote className="space-y-3">
            <p>
              Skatteetaten publiserer MCP-server hos{" "}
              <strong>Sky.no</strong>.
            </p>
            <p>
              Orkestratoren kjører hos <strong>TietoEVRY</strong>.
            </p>
            <p>
              Basemodellen er <strong>NorMistral</strong> fine-tuned med
              støtte fra <strong>NTNU</strong>.
            </p>
            <p>
              Oslo kommune embedder en widget bygget av{" "}
              <strong>Kantega</strong> på oslo.kommune.no.
            </p>
          </blockquote>
          <figcaption className="mt-6 text-sm text-muted">
            Ingen av disse leverandørene er låst inne. Skatteetaten kan
            flytte MCP-serveren til en annen leverandør. nrki kan flytte
            orkestratoren. Oslo kommune kan bytte integrasjonspartner.
            Grensesnittet er det samme — MCP og åpne standarder — så
            bytter er et driftsprosjekt, ikke en migrasjon.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function KomIgang() {
  const veier = [
    {
      tittel: "MCP-server-leverandør",
      beskrivelse:
        "Fullt selvbetjent prosess: registrer, publiser endepunkt, bli vurdert, kom på godkjent liste.",
    },
    {
      tittel: "Bygg på nrki-API",
      beskrivelse:
        "Tenk på nrki som Stripe eller Twilio for offentlig KI i Norge — en plattform du bygger produktet ditt på toppen av.",
    },
    {
      tittel: "Åpen kildekode-bidrag",
      beskrivelse:
        "Vesentlige forbedringer kompenseres med stipend eller konsulentoppdrag.",
    },
    {
      tittel: "Forskningspartnerskap",
      beskrivelse:
        "Simula, NTNU, UiO, UiB, NR, SINTEF kan få finansiering for spesifikke forskningsspørsmål — språkkvalitet, samiske språk, fairness, sikkerhetsevaluering.",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Kom i gang
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Fire veier inn for små og store aktører.
        </h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {veier.map((v) => (
            <article key={v.tittel} className="border border-border p-5">
              <h3 className="text-lg font-semibold tracking-tight">
                {v.tittel}
              </h3>
              <p className="mt-2 text-sm text-muted">{v.beskrivelse}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="https://github.com/trygvels/nrki/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center bg-accent px-6 text-sm font-semibold text-accent-ink hover:brightness-110"
          >
            Åpne issue på GitHub ↗
          </a>
          <Link
            href="/arkitektur"
            className="inline-flex h-12 items-center border border-border bg-background px-6 text-sm font-semibold transition hover:border-foreground"
          >
            Les teknisk arkitektur →
          </Link>
          <Link
            href="/veikart"
            className="inline-flex h-12 items-center border border-border bg-background px-6 text-sm font-semibold transition hover:border-foreground"
          >
            Veikart →
          </Link>
        </div>
      </div>
    </section>
  );
}
