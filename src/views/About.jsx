import React from 'react'
import MainLayout from '../components/layouts/Main'

const AboutView = () => {
    return <MainLayout>
        <MainLayout.Head>
            <title>About us</title>
        </MainLayout.Head>
        <MainLayout.Container>
            <div style={{ height: '100vh', width: '50%', margin: '20px auto' }}>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veniam placeat blanditiis expedita ex perferendis, aliquam rerum et alias similique temporibus,
            debitis facere? Ipsum ex, fuga laudantium minima facilis molestias maxime!</p>
            </div>
        </MainLayout.Container>
    </MainLayout>
}

export default AboutView