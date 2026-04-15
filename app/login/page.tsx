import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
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
        <div className="mb-8">
          <Logo storrelse="lg" />
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
            Norsk Riks-KI · privat konseptforslag
          </p>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Passordbeskyttet
        </h1>
        <p className="mt-3 text-sm text-muted">
          Denne siden er et privat konseptforslag og er foreløpig
          passordbeskyttet mens innholdet er under utvikling.{" "}
          <strong>Den er ikke tilknyttet NRK eller den norske stat.</strong>
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
            className="block w-full border border-border bg-background px-4 py-3 text-base outline-none ring-accent/30 transition focus:border-accent focus:ring-2"
          />
          <button
            type="submit"
            className="block w-full bg-accent px-4 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-110"
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
