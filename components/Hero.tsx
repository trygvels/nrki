import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32">
        <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="inline-block h-2 w-2 bg-accent" aria-hidden />
          Norsk Riks-KI · privat konseptforslag
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Kunstig intelligens
          <br />
          for alle i Norge.
        </h1>
        <p className="mt-8 max-w-2xl text-xl text-muted sm:text-2xl">
          Trygg. Upartisk. Offentlig. Et forslag til en KI-tjeneste som alle i
          Norge kan stole på — slik NRK er for nyhetene.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/demo"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-accent-ink transition hover:brightness-110"
          >
            Prøv demoen
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/om"
            className="inline-flex h-12 items-center rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground transition hover:border-foreground"
          >
            Les visjonen
          </Link>
        </div>
      </div>
    </section>
  );
}
