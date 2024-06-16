import { create } from "zustand";

interface FiltrosState {
  filtros: string[] | [""];
  setFiltros: (filtros: string[]) => void;
}

export const useFiltrosStore = create<FiltrosState>((set) => ({
  filtros: [""],
  setFiltros: (filtros) => set({ filtros }),
}));
