import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import userState, { currentUserState } from "../states/users";
import { HttpResponseState } from "../types";
import { User } from "../types/user";


export function useListUser() {

    const [users, setUsers] = useRecoilState(userState)

    const [state, setState] = useState<HttpResponseState>({ loading: false, error: false })
    useEffect(() => {
        (async function () {
            setState({ ...state, loading: true })
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
                setUsers(response.data as User[])
            } catch (e) {
                setState({ ...state, error: 'Could not fetch data' })
            }
            finally {
                setState({ ...state, loading: false })
            }
        })()
    }, [])

    return {
        state,
        users
    }
}

export function useCurrentUser(userId: number) {

    const [user, setCurrentUser] = useRecoilState(currentUserState)

    const [state, setState] = useState<HttpResponseState>({ loading: false, error: false })
    useEffect(() => {
        (async function () {
            setState({ ...state, loading: true })
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
                setCurrentUser(response.data as User)
            } catch (e) {
                setState({ ...state, error: 'Could not fetch data' })
            }
            finally {
                setState({ ...state, loading: false })
            }
        })()
    }, [userId])

    return {
        state,
        user
    }
}

export default {
    useCurrentUser,
    useListUser
}