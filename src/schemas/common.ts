export interface IState {
  loading: boolean
  error: string
}

export interface ServerCollectionResponse<T> {
  count: number
  next: number
  result: T[]
}
