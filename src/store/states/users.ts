import axios from 'axios'
import { atom, selector } from 'recoil'
import { IUser, User } from '../types/user'




export const userState = atom<User[]>({
    key: 'list-users-state',
    default: [] as User[]
})

export const currentUserState = atom<User>({
    key: 'current-user-state',
    default: {} as User
})

export const listUserState = selector<User[]>({
    key: 'list-user-state',
    get: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data as User[]
    }
})


export default userState