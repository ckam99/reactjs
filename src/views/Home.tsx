import React from 'react'
import logo from '../assets/logo.svg'
import MainLayout from '../components/layouts/Main'

const Home: React.FC = () => {

    return <MainLayout>
        <MainLayout.Head>
            <title>My React app</title>
        </MainLayout.Head>
        <MainLayout.Container>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello Vite + React + Typescript</p>
            <p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React
               </a>
                {' | '}
                <a
                    className="App-link"
                    href="https://vitejs.dev/guide/features.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vite
                </a>
                {' | '}
                <a
                    className="App-link"
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Typescript
                </a>
                {' | '}
                <a
                    className="App-link"
                    href="https://recoiljs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Recoil
                </a>
                {' | '}
                <a
                    className="App-link"
                    href="https://reactrouter.com/web/guides/quick-start"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    React router
                </a>
            </p>
        </MainLayout.Container>
    </MainLayout>
}

export default Home;