export function Disclaimer() {
  return (
    <div className="w-full bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-2 text-center text-xs sm:px-6">
        Konseptforslag — ikke en offisiell statlig tjeneste.{" "}
        <a
          href="https://github.com/trygvels/nrki"
          className="underline underline-offset-2 hover:text-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          Les mer på GitHub
        </a>
        .
      </div>
    </div>
  );
}
