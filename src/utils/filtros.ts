import { colorCategoriaMap } from "./mapColoresCategorias";

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
    color: colorCategoriaMap[1],
  },
  {
    value: "2",
    key: "hacia pís",
    color: colorCategoriaMap[2],
  },
  {
    value: "3",
    key: "volaba",
    color: colorCategoriaMap[3],
  },
  {
    value: "4",
    key: "alguien me perseguía",
    color: colorCategoriaMap[4],
  },
  {
    value: "5",
    key: "no podía correr",
    color: colorCategoriaMap[5],
  },
  {
    value: "6",
    key: "yo moría",
    color: colorCategoriaMap[6],
  },
  {
    value: "7",
    key: "alguien moría",
    color: colorCategoriaMap[7],
  },
  {
    value: "8",
    key: "veía un muerto",
    color: colorCategoriaMap[8],
  },
];
