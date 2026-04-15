export type Parti = {
  id: string;
  navn: string;
  kortnavn: string;
  farge: string;
  url: string;
};

export const partier: Parti[] = [
  {
    id: "ap",
    navn: "Arbeiderpartiet",
    kortnavn: "Ap",
    farge: "#e60000",
    url: "https://www.arbeiderpartiet.no/politikken/",
  },
  {
    id: "h",
    navn: "Høyre",
    kortnavn: "H",
    farge: "#0066cc",
    url: "https://hoyre.no/politikk/",
  },
  {
    id: "sv",
    navn: "Sosialistisk Venstreparti",
    kortnavn: "SV",
    farge: "#cc0000",
    url: "https://www.sv.no/var-politikk/",
  },
  {
    id: "frp",
    navn: "Fremskrittspartiet",
    kortnavn: "FrP",
    farge: "#003a7e",
    url: "https://www.frp.no/var-politikk",
  },
  {
    id: "sp",
    navn: "Senterpartiet",
    kortnavn: "Sp",
    farge: "#076b35",
    url: "https://www.senterpartiet.no/politikk",
  },
  {
    id: "v",
    navn: "Venstre",
    kortnavn: "V",
    farge: "#006b3f",
    url: "https://www.venstre.no/var-politikk/",
  },
  {
    id: "krf",
    navn: "Kristelig Folkeparti",
    kortnavn: "KrF",
    farge: "#fcb635",
    url: "https://krf.no/politikk/",
  },
  {
    id: "r",
    navn: "Rødt",
    kortnavn: "R",
    farge: "#d70b27",
    url: "https://roedt.no/politikk",
  },
  {
    id: "mdg",
    navn: "Miljøpartiet De Grønne",
    kortnavn: "MDG",
    farge: "#5d9b3d",
    url: "https://www.mdg.no/politikk",
  },
];

export function partiVedId(id: string): Parti | undefined {
  return partier.find((p) => p.id === id);
}
