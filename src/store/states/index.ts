import { atom, selector } from 'recoil'
import { User } from '../types/user'


export const currentAuthState = atom<User>({
    key: 'auth-state',
    default: JSON.parse(localStorage.getItem('user') || '{}') as User
})

export const authState = selector<boolean>({
    key: 'is-auth-state',
    get: ({ get }) => {
        const user = get(currentAuthState)
        return user.id !== null && user.id !== undefined
    }
})