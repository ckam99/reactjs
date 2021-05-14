import { atom, selector, selectorFamily } from 'recoil'
import { User } from '../types/user'


export const currentAuthState = atom<User>({
    key: 'current-auth-state',
    default: JSON.parse(localStorage.getItem('user') || '{}') as User
})

export const isAuthState = selector<boolean>({
    key: 'is-auth-state',
    get: ({ get }) => {
        const user = get(currentAuthState)
        return user.id !== null && user.id !== undefined
    }
})

export const authState = selector({
    key: 'auth-state',
    get: ({ get }) => {
        return {
            authenticated: get(isAuthState),
            guard: get(currentAuthState)
        }
    }
})