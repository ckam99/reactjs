
import { useRecoilState } from 'recoil'
import { isAuthState, authUserState } from '../store/states/base'

export const useAuthentication = () => {
    const [isAuthenticated, setIsAuth] = useRecoilState(isAuthState)

    return {
        isAuthenticated,
        setIsAuth
    }
}

export const useAuthUser = () => {
    const [user, setAuthUser] = useRecoilState(authUserState)
    return {
        user,
        setAuthUser
    }
}



export default {
    useAuthentication,
    useAuthUser
}