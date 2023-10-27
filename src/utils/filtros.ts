interface FiltrosProps {
  value: string;
  key: string;
  color:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
}

export const filtros: FiltrosProps[] = [
  {
    value: "caia",
    key: "caía",
    color: "default",
  },
  {
    value: "hacia-pis",
    key: "hacia pís",
    color: "danger",
  },
  {
    value: "volaba",
    key: "volaba",
    color: "primary",
  },
  {
    value: "alguien-me-perseguia",
    key: "alguien me perseguía",
    color: "secondary",
  },
  {
    value: "no-podia-correr",
    key: "no podía correr",
    color: "success",
  },
  {
    value: "yo-moría",
    key: "yo moría",
    color: "warning",
  },
  {
    value: "alguien-moria",
    key: "alguien moría",
    color: "success",
  },
  {
    value: "alguien-muerto",
    key: "veía un muerto",
    color: "secondary",
  },
];
