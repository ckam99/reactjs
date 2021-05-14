import React from "react";
import { match, RouteComponentProps } from "react-router";
import MainLayout from "../../components/layouts/Main";
import { useCurrentUser } from "../../store/actions/users";




const UserDetail = ({ match }: RouteComponentProps<{ id: string }>) => {

    const { state, user } = useCurrentUser(parseInt(match.params.id))


    return <MainLayout>
        <MainLayout.Head>
            <title>User: </title>
        </MainLayout.Head>
        <MainLayout.Container>
            {state.loading ? <div>Loading...</div> : state.error ? <div>{state.error} </div> : <div className="user-list-item">
                <div>Name: <b>{user.name}</b></div>
                <div>Email: <b>{user.email}</b></div>
            </div>}
        </MainLayout.Container>
    </MainLayout>
}

export default UserDetail;