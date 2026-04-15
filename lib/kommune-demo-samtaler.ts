import type { Samtale, SvarBlokk } from "@/lib/demo-samtaler";

export const kommuneNavn = "Porsgrunn kommune";
export const kommuneURL = "porsgrunn.kommune.no";

const tekst = (t: string): SvarBlokk => ({ type: "tekst", tekst: t });

export const kommuneSamtaler: Samtale[] = [
  {
    id: "byggesak",
    sporsmal: "Hvordan søker jeg byggesak?",
    kategori: "Bygg og bolig",
    blokker: [
      tekst(
        "I Porsgrunn kommune sender du byggesøknad digitalt via byggesoknad.dibk.no, som er Direktoratet for byggkvalitet sitt fellessystem.",
      ),
      tekst(
        "Før du søker, sjekk om tiltaket er søknadspliktig: små tilbygg under 50 m² eller frittliggende garasjer/uthus inntil 70 m² kan ofte unntas, men det avhenger av reguleringsplanen for din eiendom.",
      ),
      tekst(
        "Gebyrene for byggesøknad i Porsgrunn følger kommunens gebyrregulativ. For en typisk enebolig ligger behandlingsgebyret på rundt 25 000 – 35 000 kr.",
      ),
    ],
    kilder: [
      { navn: "Porsgrunn kommune — Byggesak", url: "https://www.porsgrunn.kommune.no/" },
      { navn: "Direktoratet for byggkvalitet", url: "https://dibk.no/" },
    ],
  },
  {
    id: "svommehall",
    sporsmal: "Når åpner svømmehallen?",
    kategori: "Kultur og fritid",
    blokker: [
      tekst(
        "Porsgrunn bad har normalt åpent mandag–fredag 06:30–21:00, lørdag 09:00–17:00 og søndag 10:00–17:00.",
      ),
      tekst(
        "Åpningstidene varierer i skoleferier, og enkelte tider er reservert for skoleundervisning på dagtid.",
      ),
      tekst(
        "Sjekk dagens aktuelle åpningstider på porsgrunn.kommune.no/svommehall, eller ring 35 54 70 00 for siste oppdatering.",
      ),
    ],
    kilder: [
      { navn: "Porsgrunn kommune — Bad og svømmehall", url: "https://www.porsgrunn.kommune.no/" },
    ],
  },
  {
    id: "skoleinnskriving",
    sporsmal: "Når og hvordan melder jeg barnet på skole?",
    kategori: "Skole og barnehage",
    blokker: [
      tekst(
        "Innskriving til 1. klasse i Porsgrunn skjer normalt i januar–februar året før skolestart. Foresatte får brev fra kommunen med informasjon om hvilken skole barnet sokner til.",
      ),
      tekst(
        "Selve innskrivingen gjør du digitalt via Foreldreportalen på vigilo.no, eller ved fysisk oppmøte på skolen hvis det passer best.",
      ),
      tekst(
        "Hvis du vil søke om plass på en annen skole enn nærskolen, må du sende egen søknad innen samme frist.",
      ),
    ],
    kilder: [
      { navn: "Porsgrunn kommune — Skole", url: "https://www.porsgrunn.kommune.no/" },
    ],
  },
  {
    id: "tomgang",
    sporsmal: "Hva gjør jeg hvis vannet er borte i blokken min?",
    kategori: "Tekniske tjenester",
    blokker: [
      tekst(
        "Først: sjekk om det er meldt en planlagt vannavstenging på porsgrunn.kommune.no/driftsmeldinger.",
      ),
      tekst(
        "Hvis det ikke er en planlagt avstenging, kan det være et akutt brudd. Ring kommunens vakttelefon 35 54 70 00 (døgnåpen) for å melde feilen.",
      ),
      tekst(
        "Mens du venter: lukk hovedstoppekrana i din leilighet, og åpne en kran lavt i bygget for å unngå undertrykk når vannet kommer tilbake.",
      ),
    ],
    kilder: [
      { navn: "Porsgrunn kommune — Driftsmeldinger", url: "https://www.porsgrunn.kommune.no/" },
    ],
    merknad: "Ved akutt vannlekkasje eller kloakkproblem: ring vakttelefonen.",
  },
];
