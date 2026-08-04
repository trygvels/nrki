import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-24 sm:px-6">
        <Logo storrelse="lg" />

        <p className="mt-14 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="inline-block h-2 w-2 bg-accent" aria-hidden />
          Norsk Riks-KI · reservert
        </p>

        <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
          Kunstig intelligens
          <br />
          for alle i Norge.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted sm:text-xl">
          nrki.no er et utstillingsvindu for idéen om en norsk riks-KI —
          trygg, upartisk og offentlig, slik NRK er for allmennkringkasting.
          Domenet holdes av i påvente av den dagen Norge velger å bygge en
          nasjonal KI-plattform for alle.
        </p>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Reservert av
          </p>
          <p className="mt-2 text-lg font-semibold">Trygve Leithe Svalheim</p>
        </div>
      </div>

      <footer className="border-t border-border bg-subtle">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <p className="text-sm text-muted">
            Et privat initiativ.{" "}
            <strong>Ikke tilknyttet NRK eller den norske stat.</strong>
          </p>
        </div>
      </footer>
    </main>
  );
}
