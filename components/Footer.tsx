import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-subtle">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block h-4 w-1.5 bg-accent" aria-hidden />
            <span className="text-lg">nrki</span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted">
            Norsk Riks-KI — et konseptforslag til en offentlig
            AI-tjeneste for alle i Norge. Ikke en offisiell statlig tjeneste.
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
              <Link href="/plattform" className="hover:text-accent">
                Plattformen
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
            <li>
              <a
                href="https://github.com/trygvels/nrki/issues"
                className="hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Foreslå endringer
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} nrki — konseptforslag. Innholdet er
          publisert som åpen kildekode.
        </div>
      </div>
    </footer>
  );
}
