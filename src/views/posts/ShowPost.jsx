import React from 'react'
import MainLayout from '../../components/layouts/Main'
import styled from 'styled-components'
import usePostAction from '../../store/actions/post'

const ShowPostView = ({ postId }) => {
    const { loading, post, fetchPost, error } = usePostAction()

    React.useEffect(() => {
        fetchPost(postId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postId])


    return <Wrapper>
        <MainLayout>
            <MainLayout.Head>
                <title>Post: {postId}</title>
            </MainLayout.Head>
            <MainLayout.Container>
                <center>
                    <h1>User detail: {post.id}</h1>
                    {loading ? <div>fetch user ...</div> :
                        error ? <div>Some error occured</div> :
                            <div>
                                <div className="post-title"> {post.title}</div>
                                <div className="post-body"> {post.body}</div>
                            </div>
                    }
                </center>
            </MainLayout.Container>
        </MainLayout>
    </Wrapper>
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