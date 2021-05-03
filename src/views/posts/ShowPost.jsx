import React from 'react'
import Main from '../../components/layouts/Main'
import { useCurrentPost } from '../../hooks/posts'
import styled from 'styled-components'

const ShowPostView = ({ postId }) => {
    const [loaded, post, error] = useCurrentPost(postId)

    return <Main>
        <Wrapper>
            <center>
                <h1>User detail: {post.id}</h1>
                {loaded ? <div>fetch user ...</div> :
                    error ? <div>Some error occured</div> :
                        <div>
                            <div className="post-title"> {post.title}</div>
                            <div className="post-body"> {post.body}</div>
                        </div>
                }
            </center>
        </Wrapper>
    </Main>
}

const Wrapper = styled.div`

.post-title{
    font-weight: 700;
}
.post-body{
    margin-top: 20px;
 max-width: 600px;
 text-align: justify;
}
`
export default ShowPostView