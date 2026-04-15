import { Disclaimer } from "@/components/Disclaimer";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HvorforNrki } from "@/components/HvorforNrki";
import { Kontakt } from "@/components/Kontakt";
import { Nav } from "@/components/Nav";
import { OffentligData } from "@/components/OffentligData";
import { Prinsipper } from "@/components/Prinsipper";
import { SammenligningNRK } from "@/components/SammenligningNRK";
import { ScriptedChat } from "@/components/ScriptedChat";

export default function Home() {
  return (
    <>
      <Disclaimer />
      <Nav />
      <main className="flex-1">
        <Hero />
        <HvorforNrki />
        <Prinsipper />
        <OffentligData />
        <section className="border-b border-border" id="demo">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Demo
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Hvordan burde en norsk offentlig AI svare?
                </h2>
                <p className="mt-6 text-lg text-muted">
                  Under kan du prøve et utvalg spørsmål som viser hva slags
                  tone, nyanse og kildebruk nrki skal holde. Svarene er
                  kuraterte — de illustrerer ambisjonen, ikke dagens teknologi.
                </p>
                <p className="mt-4 text-sm text-muted">
                  Spørsmålene er bevisst varierte: ett politisk, ett
                  praktisk-offentlig, ett vitenskapelig, ett faktaorientert og
                  ett partipolitisk.
                </p>
              </div>
              <ScriptedChat />
            </div>
          </div>
        </section>
        <SammenligningNRK />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
