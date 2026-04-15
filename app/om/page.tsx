import type { Metadata } from "next";
import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Om nrki",
  description:
    "Bakgrunn, visjon og prinsipper for nrki — forslaget om en norsk offentlig KI-tjeneste.",
};

export default function OmPage() {
  return (
    <>
      <Disclaimer />
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Om nrki
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Et forslag om en norsk offentlig KI.
          </h1>

          <div className="prose prose-neutral mt-12 max-w-none space-y-6 text-lg leading-relaxed">
            <p>
              <strong>nrki</strong> — Norsk Riks-KI — er et
              forslag om at den norske staten skal etablere en offentlig,
              gratis, trygg og upartisk KI-tjeneste tilgjengelig for alle som
              bor i Norge. Navnet og ideen er inspirert av{" "}
              <strong>NRK</strong> (Norsk rikskringkasting), som siden 1933 har
              sikret at alle i Norge har tilgang til nyheter og
              allmennkunnskap, uavhengig av betalingsevne.
            </p>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">
              Hvorfor trenger Norge dette?
            </h2>
            <p>
              Kunstig intelligens er i rask ferd med å bli en
              infrastrukturteknologi — på linje med elektrisitet, internett
              eller mobilnett. I dag er de mest brukte KI-tjenestene eid av
              noen få, hovedsakelig amerikanske, selskaper. Modellene er
              optimalisert for engelsk, forretningsmodellen deres er
              betalingsabonnement, og de har ingen særlig plikt til å forholde
              seg til det norske samfunnet, norske språk, norske offentlige
              tjenester eller norske verdier.
            </p>
            <p>
              Dette er et demokratisk og samfunnsmessig problem — ikke bare et
              teknisk. Når en teknologi blir så kraftig og så vanlig, og så
              samtidig er gatekept av private aktører, blir tilgangen til god
              informasjon og gode verktøy ujevn. De med penger får bedre
              KI-hjelp enn de uten. De som er komfortable på engelsk får bedre
              svar enn de som ikke er det. Og svarene i seg selv bærer verdier
              og antakelser fra andre samfunn.
            </p>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">
              Hva er nrki?
            </h2>
            <p>
              nrki skal være en allmenn KI-tjeneste som nordmenn kan stole på —
              slik mange stoler på NRK for nyheter, Kartverket for kart,
              Altinn for dialog med det offentlige, eller Lånekassen for
              studiestøtte. Konkret betyr det:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                En KI-modell trent eller tunet for norsk språk, norske
                offentlige kilder og norsk samfunnsforståelse.
              </li>
              <li>
                Et svar-lag som kobler modellen til verifiserte offentlige
                datakilder — Skatteetaten, NAV, Lånekassen, Helsedirektoratet,
                SSB og andre — slik at svar er forankret og kan kildebelegges.
              </li>
              <li>
                En tydelig, programfestet redaksjonell linje: upartiskhet på
                politiske og verdiladede spørsmål, faglig tyngde på vitenskap,
                og kildehenvisninger som standard.
              </li>
              <li>
                Åpen kildekode, åpen evaluering, og en styringsmodell der
                Stortinget og et uavhengig fagråd har siste ordet — ikke en
                styreleder i Silicon Valley.
              </li>
              <li>Gratis og tilgjengelig for alle som bor i Norge.</li>
            </ul>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">
              Hva er nrki ikke?
            </h2>
            <p>
              nrki skal ikke konkurrere ut private aktører. Kommersielle
              KI-tjenester vil fortsatt ha sin plass, som alternativer for de
              som ønsker det. nrki skal være <em>grunnlinjen</em> — den alle
              skal ha tilgang til. På samme måte som NRK ikke erstatter VG,
              men finnes ved siden av dem og holder en minstestandard for
              nyhetsformidling.
            </p>
            <p>
              nrki skal heller ikke være en generell chatbot uten grenser.
              Tjenesten vil være best der det offentlige Norge har data og
              ansvar: rettigheter, skatt, helse, utdanning, trygd, bolig,
              miljø, statistikk. For skjønnlitterær skriving, kodeassistanse
              eller bildegenerering finnes det bedre, kommersielle verktøy.
            </p>

            <h2 className="mt-10 text-2xl font-semibold tracking-tight">
              Veien videre
            </h2>
            <p>
              Dette nettstedet er foreløpig bare et forslag, skrevet av én
              person som synes ideen fortjener en samtale. Ekte realisering vil
              kreve politisk vilje, offentlig finansiering, samarbeid med
              offentlige etater, fagmiljøer som IT- og språkforskning, og ikke
              minst brukere som er villige til å gi tilbakemelding.
            </p>
            <p>
              All koden bak siden er åpen. Du kan lese den, foreslå endringer,
              eller bare diskutere ideen videre på{" "}
              <a
                href="https://github.com/trygvels/nrki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                GitHub
              </a>
              .
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-semibold text-accent-ink transition hover:brightness-110"
              >
                Prøv demoen →
              </Link>
              <Link
                href="/"
                className="inline-flex h-11 items-center rounded-full border border-border bg-background px-5 text-sm font-semibold transition hover:border-foreground"
              >
                Tilbake til forsiden
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
