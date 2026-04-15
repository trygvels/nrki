import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full bg-accent text-accent-ink shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-3xl leading-none tracking-wide"
          aria-label="nrki — forsiden"
        >
          <span className="text-accent-ink">NR</span>
          <span className="text-flagg-bla">KI</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium">
          <Link href="/plattform" className="opacity-90 hover:opacity-100">
            Plattform
          </Link>
          <Link href="/#prinsipper" className="opacity-90 hover:opacity-100">
            Prinsipper
          </Link>
          <Link href="/demo" className="opacity-90 hover:opacity-100">
            Demo
          </Link>
          <Link href="/om" className="opacity-90 hover:opacity-100">
            Om
          </Link>
          <a
            href="https://github.com/trygvels/nrki"
            className="opacity-90 hover:opacity-100"
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
