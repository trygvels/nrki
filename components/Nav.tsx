import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="inline-block h-4 w-1.5 bg-accent" aria-hidden />
          <span className="text-lg">nrki</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted">
          <Link href="/plattform" className="hover:text-foreground">
            Plattform
          </Link>
          <Link href="/#prinsipper" className="hover:text-foreground">
            Prinsipper
          </Link>
          <Link href="/demo" className="hover:text-foreground">
            Demo
          </Link>
          <Link href="/om" className="hover:text-foreground">
            Om
          </Link>
          <a
            href="https://github.com/trygvels/nrki"
            className="hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
