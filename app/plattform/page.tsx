import type { Metadata } from "next";
import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { AktorOnboarding } from "@/components/plattform/AktorOnboarding";
import { HubDiagram } from "@/components/plattform/HubDiagram";
import { KommuneBestillingsflyt } from "@/components/plattform/KommuneBestillingsflyt";
import { ModellKatalog } from "@/components/plattform/ModellKatalog";
import {
  PlattformAnkerNavDesktop,
  PlattformAnkerNavMobil,
} from "@/components/plattform/PlattformAnkerNav";
import { Posisjonering } from "@/components/plattform/Posisjonering";
import { SandboxMock } from "@/components/plattform/SandboxMock";
import { StandarderSeksjon } from "@/components/plattform/StandarderSeksjon";

export const metadata: Metadata = {
  title: "Plattform",
  description:
    "nrki som åpen hub for kunstig intelligens i Norge — modellagnostisk, basert på MCP og åpne datakontrakter, designet for offentlig sektor.",
};

export default function PlattformPage() {
  return (
    <>
      <Disclaimer />
      <Nav />
      <main className="flex-1">
        <PlattformAnkerNavMobil />
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[200px_1fr] lg:gap-10 lg:px-8">
          <aside className="hidden lg:block lg:pt-32">
            <PlattformAnkerNavDesktop />
          </aside>
          <div>
            <Hero />
            <HubDiagram />
            <StandarderSeksjon />
            <ModellKatalog />
            <AktorOnboarding />
            <SandboxMock />
            <KommuneBestillingsflyt />
            <Posisjonering />
            <Bidra />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section
      id="intro"
      className="relative overflow-hidden border-b border-border scroll-mt-20"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-accent" aria-hidden />
      <div className="px-4 pt-20 pb-20 sm:px-6 sm:pt-24 sm:pb-24">
        <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="inline-block h-2 w-2 bg-accent" aria-hidden />
          Plattform
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          En åpen hub for kunstig intelligens i Norge.
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-muted sm:text-xl">
          Vi konkurrerer ikke med ChatGPT, Claude eller Gemini på ytelse. Vi
          er tillitslaget under dem — en plattform der norske data, modeller
          og brukere møtes på åpne, demokratisk styrte vilkår.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#arkitektur"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-ink hover:brightness-110"
          >
            Les hele konseptet ↓
          </a>
          <Link
            href="/om"
            className="inline-flex h-12 items-center rounded-full border border-border bg-background px-6 text-sm font-semibold transition hover:border-foreground"
          >
            Les hovedvisjonen
          </Link>
        </div>
      </div>
    </section>
  );
}

function Bidra() {
  return (
    <section id="bidra" className="border-b border-border scroll-mt-20">
      <div className="px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Veien videre
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Vi trenger pilotetater, kommuner og fagpersoner.
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          Plattformen er ikke realisert ennå. Den er en åpen invitasjon. Hvis
          du er i en etat eller kommune som vil være pilot, eller en
          fagperson som vil bidra med kompetanse innen modellevaluering,
          datakontrakter, MCP-implementasjoner eller juridiske rammer — ta
          kontakt.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/trygvels/nrki/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-ink hover:brightness-110"
          >
            Åpne et issue på GitHub →
          </a>
          <Link
            href="/om"
            className="inline-flex h-12 items-center rounded-full border border-border bg-background px-6 text-sm font-semibold transition hover:border-foreground"
          >
            Les hovedvisjonen
          </Link>
        </div>
      </div>
    </section>
  );
}
