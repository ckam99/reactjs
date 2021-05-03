import React from 'react'
import Main from '../../components/layouts/Main'
import { BaseLink } from '../../components/shared/NavItem'
import { usePost } from '../../hooks/posts'
import styled from 'styled-components'



const ListPostView = () => {
    const [loaded, posts, error] = usePost()

    return (<Main>
        <Wrapper>
            <h1>Http request example</h1>
            {loaded ? <div>Loading ... </div> : <div className="posts">
                {posts.map(p => <div className="post" key={p.id}>
                    <BaseLink to={`/posts/${p.id}`} className="post-title">
                        {p.title} - {p.id}
                    </BaseLink>
                    <div className="post-body">{p.body}</div>
                </div>)}
            </div>}
        </Wrapper>
    </Main>)
}

const Wrapper = styled.div`
.posts{
    display:grid;
    grid-template-columns: repeat(5, 1fr)
}

.post{
 width: 300px;
 margin:10px;
}
.post-title{
    font-weight: 700;
}
.post-body{
 max-height: 200px;
 overflow: hidden;
 text-align: justify;
}
`
export default ListPostView