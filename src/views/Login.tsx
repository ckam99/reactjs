import React, { ChangeEvent, FormEvent } from "react";
import BlankLayout from "../components/layouts/Blank";
import { useSetRecoilState } from 'recoil'
import { currentAuthState } from "../store/states";
import { useHistory } from "react-router";


type FormProps = {
    email: string
    password: string
}
const Login: React.FC = () => {

    const setAuth = useSetRecoilState(currentAuthState)
    const [state, setState] = React.useState<FormProps>({
        email: '',
        password: ''
    })

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (state.email === 'test@t.me' && state.password === 'test') {
            const user = { email: state.email, name: 'OK us', id: Date.now() }
            localStorage.setItem('user', JSON.stringify(user))
            setAuth({ ...user })
            useHistory().push('/')
        }
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        if (name === 'email')
            setState({ ...state, email: value })
        if (name === 'password')
            setState({ ...state, password: value })
    }


    return <BlankLayout>
        <BlankLayout.Head>
            <title>login</title>
        </BlankLayout.Head>
        <BlankLayout.Container>
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <div>
                    <input type="email" placeholder="Email"
                        name="email" value={state.email} onChange={handleInputChange} />
                </div>
                <div>
                    <input type="password" placeholder="Password"
                        name="password" value={state.password} onChange={handleInputChange} />
                </div>
                <button type="submit">sign in</button>
            </form>
        </BlankLayout.Container>
    </BlankLayout>
}

export default Login;