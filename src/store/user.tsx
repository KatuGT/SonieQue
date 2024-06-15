import { userProps } from "@/tipos/userTipos";
import { create } from "zustand";

interface UserState {
  user: userProps | null;
  setUser: (user: userProps | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
