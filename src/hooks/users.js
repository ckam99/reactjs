import React from 'react';
import { useRecoilState } from 'recoil'
import { listUserState, currentUserState } from '../store/states/users'
import userService from '../api/users'
import { toast } from '../helpers'


export function useUsers() {
    const [loaded, setLoaded] = React.useState(false);
    const [users, setUsers] = useRecoilState(listUserState);

    React.useEffect(() => {
        (async () => {
            setLoaded(true)
            const response = await userService.getAll()
            if (response.error)
                toast.error(response.data.error || 'Some errors occured')
            else
                setUsers(response.data)

            setLoaded(false)
        })()
    }, []);

    return [
        loaded,
        users
    ];
}

export function useCurrentUser(id) {
    const [loaded, setLoaded] = React.useState(false);
    const [user, setUser] = useRecoilState(currentUserState);

    React.useEffect(() => {
        (async () => {
            setLoaded(true)
            const response = await userService.find(id)
            if (response.error)
                toast.error(response.data.error || 'Some errors occured')
            else
                setUser(response.data)
            setLoaded(false)
        })()
    }, []);

    return [
        loaded,
        user
    ];
}

export default useUsers
