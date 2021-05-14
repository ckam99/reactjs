

export interface User {
    id: number
    name: string
    email: string
    username?: string
}

export interface IUser {
    data: User[] | User
    loading: boolean
    error: boolean | object | string
}