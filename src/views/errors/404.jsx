import React from 'react'
import Layout from '../../components/layouts/Base'
import styled from 'styled-components'

const NotFoundView = () => {
    return <Wrapper>
        <Layout>
            <Layout.Head>
                <title>Login</title>
            </Layout.Head>
            <Layout.Container>
                <div className="error-page">
                    <h1>404</h1>
                    <div className="divider"></div>
                    <h6>Page not found</h6>
                </div>
            </Layout.Container>
        </Layout>
    </Wrapper>
}

const Wrapper = styled.div`
.error-page{
    height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
}
.divider{
    height: 50px;
    border: 1px solid #000;
    margin: 0 15px;
}
`

export default NotFoundView