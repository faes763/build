
import { create } from 'zustand'

interface pathState {
    path: string
    set: (lastPath: string) => void
}


export const usePath = create<pathState>((set) => ({
    path: "/",
    set: (lastPath: string) => set({path:lastPath})
}))