import { create } from 'zustand'

//store pequeña para almacenar la referencia de contacto
export const useMiscStore = create((set) => ({
	contactRef: null,
	setContactRef: (ref) => set({ contactRef: ref }),
}))
