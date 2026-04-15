import type { SvarBlokk } from "@/lib/demo-samtaler";
import { PartiKort } from "./PartiKort";
import { RaaSitat } from "./RaaSitat";
import { SatsKort } from "./SatsKort";
import { Valgomat } from "./Valgomat";

type Props = {
  blokk: SvarBlokk;
  visCursor?: boolean;
  kompakt?: boolean;
};

export function SvarBlokkRenderer({ blokk, visCursor, kompakt }: Props) {
  switch (blokk.type) {
    case "tekst":
      return (
        <p className={kompakt ? "text-xs" : "text-sm"}>
          {blokk.tekst}
          {visCursor && (
            <span
              className={`ml-0.5 inline-block translate-y-0.5 animate-pulse bg-accent ${
                kompakt ? "h-3 w-1" : "h-4 w-1.5"
              }`}
              aria-hidden
            />
          )}
        </p>
      );
    case "raa-sitat":
      return (
        <RaaSitat
          tekst={blokk.tekst}
          kildeNavn={blokk.kildeNavn}
          kildeRef={blokk.kildeRef}
          lenke={blokk.lenke}
          kompakt={kompakt}
        />
      );
    case "parti-kort":
      return (
        <PartiKort
          kort={blokk.kort}
          etikett={blokk.etikett}
          kompakt={kompakt}
        />
      );
    case "valgomat":
      return (
        <Valgomat
          sporsmal={blokk.sporsmal}
          alternativer={blokk.alternativer}
          kilde={blokk.kilde}
          kildeURL={blokk.kildeURL}
          kompakt={kompakt}
        />
      );
    case "sats-kort":
      return (
        <SatsKort
          tittel={blokk.tittel}
          rader={blokk.rader}
          kilde={blokk.kilde}
          kildeURL={blokk.kildeURL}
          kompakt={kompakt}
        />
      );
  }
}
