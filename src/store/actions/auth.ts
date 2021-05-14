import { useSetRecoilState } from "recoil"
import { currentAuthState } from "../states"
import { User } from "../types/user"



const useAuthAction = () => {
    const setAuthUser = useSetRecoilState(currentAuthState)

    const logout = () => {
        localStorage.removeItem('user')
        setAuthUser({} as User)
        return true
    }

    return {
        logout
    }
}

export default useAuthAction