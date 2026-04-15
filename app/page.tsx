import Link from "next/link";
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
        <PlattformTease />
        <section className="border-b border-border" id="demo">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
            <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Demo
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Hvordan burde en norsk offentlig KI svare?
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

function PlattformTease() {
  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Mer enn en chatbot
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              nrki er også en åpen plattform for KI i offentlig sektor.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-background/70">
              Modellagnostisk hub bygget på MCP. Norsk-hostede modeller for
              de som trenger datasuverenitet. Innbygger-KI på én dag for små
              kommuner. Sandbox der etater kan teste før de godkjenner.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link
              href="/plattform"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-ink transition hover:brightness-110"
            >
              Les om plattformen →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
