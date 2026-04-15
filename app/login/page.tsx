import type { Metadata } from "next";
import { logInn } from "./actions";

export const metadata: Metadata = {
  title: "Logg inn",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ feil?: string }>;
};

export default async function LoginPage({ searchParams }: Props) {
  const { feil } = await searchParams;

  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex items-center gap-2">
          <span className="inline-block h-5 w-1.5 bg-accent" aria-hidden />
          <span className="text-xl font-semibold tracking-tight">nrki</span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Konseptforslag
        </h1>
        <p className="mt-3 text-sm text-muted">
          Denne siden er foreløpig passordbeskyttet mens innholdet er under
          utvikling.
        </p>

        <form action={logInn} className="mt-8 space-y-3">
          <label htmlFor="passord" className="sr-only">
            Passord
          </label>
          <input
            id="passord"
            name="passord"
            type="password"
            autoFocus
            autoComplete="current-password"
            placeholder="Passord"
            required
            className="block w-full rounded-lg border border-border bg-background px-4 py-3 text-base outline-none ring-accent/30 transition focus:border-accent focus:ring-2"
          />
          <button
            type="submit"
            className="block w-full rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-110"
          >
            Logg inn
          </button>
          {feil && (
            <p className="text-sm text-accent" role="alert">
              Feil passord. Prøv igjen.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
