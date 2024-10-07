import { create } from 'zustand'

export const useMiscStore = create((set) => ({
	contactRef: null,
	setContactRef: (ref) => set({ contactRef: ref }),
}))
