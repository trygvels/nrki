import { Kodeblokk } from "@/components/Kodeblokk";
import {
  datakontraktEksempel,
  hooksEksempel,
  mcpKonfigEksempel,
  raaformatMedTagEksempel,
  raaformatUtenTagEksempel,
} from "@/lib/standarder-eksempler";

export function StandarderSeksjon() {
  return (
    <section
      id="standarder"
      className="border-b border-border scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Åpne standarder
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Bygget på protokoller alle kan implementere.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          For at en hub skal være åpen, må grensesnittene være åpne. nrki
          bygger på etablerte standarder der det finnes, og åpne, dokumenterte
          tillegg der det ikke gjør det.
        </p>

        {/* MCP */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              MCP — Model Context Protocol
            </h3>
            <p className="mt-3 text-muted">
              MCP er en åpen standard for hvordan AI-applikasjoner kobler seg
              til datakilder, verktøy og arbeidsflyter. Tenk «USB-C for AI».
              Etater registrerer en MCP-server, og nrki kan slå opp i den uten
              skreddersydd integrasjon.
            </p>
            <p className="mt-3 text-sm">
              <a
                href="https://modelcontextprotocol.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                modelcontextprotocol.io ↗
              </a>
            </p>
          </div>
          <Kodeblokk spraak="json" tittel="MCP-konfigurasjon (eksempel)">
{mcpKonfigEksempel}
          </Kodeblokk>
        </div>

        {/* Datakontrakter */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Datakontrakter
            </h3>
            <p className="mt-3 text-muted">
              Hver ressurs en etat eksponerer beskrives med en datakontrakt:
              hva er datatypen, hvilken kilde stammer den fra, når gjelder den
              fra og til, og kan rådata vises ufiltrert?
            </p>
            <p className="mt-3 text-muted">
              Skjemaet er versjonert og åpent. Etater eier sin egen kontrakt.
            </p>
          </div>
          <Kodeblokk spraak="json" tittel="Datakontrakt v1 (eksempel)">
{datakontraktEksempel}
          </Kodeblokk>
        </div>

        {/* Råformat-sitering */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold tracking-tight">
            Råformat-sitering med tags
          </h3>
          <p className="mt-3 max-w-3xl text-muted">
            Noen typer innhold tåler ikke å bli omformulert: lovtekst,
            satser, partiprogramutdrag, vedtak. Ved å markere innholdet med en
            <code className="mx-1 rounded bg-subtle px-1.5 py-0.5 text-sm">
              &lt;kilde-rå&gt;
            </code>
            -tag forplikter nrki seg til å vise teksten ufiltrert med
            kildehenvisning. Modellen kan parafrasere
            <em> rundt </em> sitatet, men ikke i det.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
                Uten tag — modellen omformulerer
              </p>
              <Kodeblokk spraak="chat">
{raaformatUtenTagEksempel}
              </Kodeblokk>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
                Med tag — ufiltrert sitat
              </p>
              <Kodeblokk spraak="chat">
{raaformatMedTagEksempel}
              </Kodeblokk>
            </div>
          </div>
        </div>

        {/* Hooks */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Hooks-API
            </h3>
            <p className="mt-3 text-muted">
              Etater kan abonnere på hendelser knyttet til sine ressurser —
              for eksempel «noen stilte et spørsmål jeg ikke kunne svare på» —
              for å forbedre datagrunnlaget over tid.
            </p>
            <p className="mt-3 text-muted">
              Tilbakekall sendes til en URL hos etaten, signert med en delt
              hemmelighet. Etaten trenger ikke avsløre noe internt for at
              hooken skal fungere.
            </p>
          </div>
          <Kodeblokk spraak="ts" tittel="Hook-registrering (eksempel)">
{hooksEksempel}
          </Kodeblokk>
        </div>
      </div>
    </section>
  );
}
