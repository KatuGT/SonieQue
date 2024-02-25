import { create } from 'zustand'

interface userProps {
  bears: number
  increase: (by: number) => void
}

const useUserStore = create<userProps>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))