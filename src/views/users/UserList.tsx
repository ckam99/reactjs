import React from 'react'
import { useRecoilValue } from 'recoil'
import MainLayout from '../../components/layouts/Main'
import { listUserState } from '../../store/states/users'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Wrapper = styled.div`
.user-list-item {
  list-style: none;
  padding: 5px 15px;
  margin: 2px;
  background-color: rgba(0,0,0, 0.2);
}
.user-list-item:hover a{
    background-color: rgba(0,0,0, 0.05);
    cursor: pointer;
    color:aqua;
}
a{
    text-decoration: none;
    color: rgba(255,225,225, 0.2)
}
`

const ListUsers: React.FC = () => {
    const users = useRecoilValue(listUserState)
    return <Wrapper><div>
        <h1>Asynchronous data</h1>
        <ul >
            {users.map(user => <li className="user-list-item" key={user.id}>
                <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
            </li>)}
        </ul>
    </div>
    </Wrapper>
}

const UserList = () => {
    return <MainLayout>
        <MainLayout.Head>
            <title>List users</title>
        </MainLayout.Head>
        <MainLayout.Container>
            <React.Suspense fallback={<div>Loading...</div>}>
                <ListUsers />
            </React.Suspense>
        </MainLayout.Container>
    </MainLayout>
}

export default UserList