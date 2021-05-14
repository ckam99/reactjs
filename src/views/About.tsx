import React from 'react'
import logo from '../assets/logo.svg'
import MainLayout from '../components/layouts/Main'

const About: React.FC = () => {

    return <MainLayout>
        <MainLayout.Head>
            <title>About us</title>
        </MainLayout.Head>
        <MainLayout.Container>
            <h1>About us</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam sit velit quos! Dicta earum corporis doloremque,
                enim veniam excepturi consequuntur ducimus? Ab,
                dolorem blanditiis nesciunt velit recusandae perferendis illo placeat!
            </p>
        </MainLayout.Container>
    </MainLayout>
}

export default About;