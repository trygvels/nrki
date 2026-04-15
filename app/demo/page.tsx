import type { Metadata } from "next";
import { Disclaimer } from "@/components/Disclaimer";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ScriptedChat } from "@/components/ScriptedChat";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Prøv et utvalg spørsmål for å se hvordan en offentlig norsk AI-tjeneste kunne svart.",
};

export default function DemoPage() {
  return (
    <>
      <Disclaimer />
      <Nav />
      <main className="flex-1">
        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Demo
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Slik burde en norsk offentlig AI høres ut.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Velg et spørsmål for å se et kuratert eksempelsvar. Dette er ikke
              ekte AI — det er en illustrasjon av tonen, nyanseringen og
              kildebruken nrki må holde for å være en troverdig offentlig
              tjeneste.
            </p>
            <div className="mt-12">
              <ScriptedChat />
            </div>
            <div className="mt-8 grid gap-4 rounded-2xl border border-border bg-subtle p-6 text-sm text-muted sm:grid-cols-2">
              <div>
                <div className="font-semibold text-foreground">
                  Hvorfor kuratert?
                </div>
                <p className="mt-1">
                  En ekte, offentlig norsk AI vil ikke fungere skikkelig før
                  modellen, datagrunnlaget og evalueringen er på plass. Denne
                  demoen viser kravene vi bør stille — så kan teknologien bygges
                  til å møte dem.
                </p>
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  Hvordan skrives svarene?
                </div>
                <p className="mt-1">
                  Svarene i demoen er skrevet for å vise fem ting: nøytral tone,
                  konkrete kildehenvisninger, erkjennelse av usikkerhet, respekt
                  for brukerens selvstendighet, og bruk av offisielle data der
                  det finnes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
