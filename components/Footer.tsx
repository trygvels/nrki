import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-subtle">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Logo storrelse="md" />
            <span className="text-sm text-muted">Norsk Riks-KI</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted">
            Et privat konseptforslag til hvordan en offentlig norsk
            KI-tjeneste kunne sett ut. <strong>Ikke tilknyttet NRK eller
            den norske stat.</strong> Eventuelle likheter med offisielle
            tjenester er bevisste, men kun illustrative.
          </p>
          <p className="mt-6 text-sm text-muted">
            Forfatter:{" "}
            <span className="font-semibold text-foreground">
              Trygve Leithe Svalheim
            </span>
          </p>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Sidene
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-accent">
                Forsiden
              </Link>
            </li>
            <li>
              <Link href="/konsept" className="hover:text-accent">
                Konsept
              </Link>
            </li>
            <li>
              <Link href="/om" className="hover:text-accent">
                Om nrki
              </Link>
            </li>
            <li>
              <Link href="/demo" className="hover:text-accent">
                Demo
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Åpen kildekode
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href="https://github.com/trygvels/nrki"
                className="hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub-repo
              </a>
            </li>
            <li>
              <a
                href="https://github.com/trygvels/nrki/tree/main/docs"
                className="hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dokumentasjon
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} privat konseptforslag. Innholdet er
          publisert som åpen kildekode. NRK®, Norsk rikskringkasting AS og
          den norske stat er ikke involvert i prosjektet.
        </div>
      </div>
    </footer>
  );
}
