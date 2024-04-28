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
    value: "1",
    key: "caía",
    color: "default",
  },
  {
    value: "2",
    key: "hacia pís",
    color: "danger",
  },
  {
    value: "3",
    key: "volaba",
    color: "primary",
  },
  {
    value: "4",
    key: "alguien me perseguía",
    color: "secondary",
  },
  {
    value: "5",
    key: "no podía correr",
    color: "success",
  },
  {
    value: "6",
    key: "yo moría",
    color: "warning",
  },
  {
    value: "7",
    key: "alguien moría",
    color: "success",
  },
  {
    value: "8",
    key: "veía un muerto",
    color: "secondary",
  },
];
