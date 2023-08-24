
import { create } from 'zustand'

interface toggleState {
    isOpen: boolean
    open: () => void
    close: () => void
}

interface connectPopup {
    isOpen: boolean
    registration: boolean,
    set: (state:boolean) => void
    changeOpen: (state:boolean) => void
    open: () => void
    close: () => void
}

export const useBurger = create<toggleState>((set) => ({
    isOpen: false,
    
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}))

export const useConnectPopup = create<connectPopup>((set) => ({
    isOpen: false,
    registration: false,
    set: (state:boolean) => set({registration:state}),
    changeOpen: (state:boolean) => set({isOpen:state}),
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}))