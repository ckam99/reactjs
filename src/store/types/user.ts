

export interface User {
    id: number
    name: string
    email: string
    username?: string
}

export interface IUser {
    users: User[]
    currentUser: User
}