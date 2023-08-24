import { create } from 'zustand'


export enum StatusAuthentication {
    LOADING = "loading",
    NOT_AUTHENTICATION = "not-authentication",
    AUTHENTICATION = "authentication"
}
interface AuthorizationType {
    status: StatusAuthentication
    token: string,
    set: (token: string, status: StatusAuthentication) => void
}

export const useAuthorizationStore = create<AuthorizationType>((set) => ({
    status: StatusAuthentication.LOADING,
    token: "",
    set: (account:string, status: StatusAuthentication) => set({ token: account, status: status }),
}))