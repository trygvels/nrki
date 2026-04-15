export function Kodeblokk({
  spraak,
  tittel,
  children,
}: {
  spraak?: string;
  tittel?: string;
  children: string;
}) {
  return (
    <figure className="overflow-hidden border border-border bg-foreground text-background">
      {(tittel || spraak) && (
        <figcaption className="flex items-center justify-between border-b border-background/10 px-4 py-2 text-xs text-background/70">
          <span className="font-semibold tracking-wider uppercase">
            {tittel}
          </span>
          {spraak && (
            <span className="font-mono text-[10px] uppercase">{spraak}</span>
          )}
        </figcaption>
      )}
      <pre className="overflow-x-auto px-4 py-4 text-xs leading-relaxed">
        <code className="font-mono">{children}</code>
      </pre>
    </figure>
  );
}
