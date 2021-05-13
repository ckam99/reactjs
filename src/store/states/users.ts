import axios from 'axios'
import { atom, selector } from 'recoil'
import { IUser, User } from '../types/user'




export const userState = atom<IUser>({
    key: 'user-state',
    default: {
        users: [] as User[],
        currentUser: {} as User
    }
})

export const currentUserState = selector<User>({
    key: 'current-user-state',
    get: ({ get }) => {
        const { currentUser } = get(userState)
        return currentUser
    },
    set: ({ set, get }, newUser) => {
        return set(userState, { users: get(userState).users, currentUser: newUser } as IUser)
    }
})

export const listUserState = selector<User[]>({
    key: 'list-user-state',
    get: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data as User[]
    }
})


export default userState