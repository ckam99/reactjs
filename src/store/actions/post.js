import { useState } from 'react';
import { useRecoilState } from 'recoil'
import { postState, currentPostState } from '../states/posts'
import api from '../../helpers/api'

export function usePostAction() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useRecoilState(postState);
    const [post, setPost] = useRecoilState(currentPostState);

    const fetchPosts = async () => {
        setLoading(true)
        try {
            const response = await api.get('/posts');
            setPosts(response.data)
        } catch (e) {
            setError(e.response.data)
        } finally {
            setLoading(false)
        }
    }

    const fetchPost = async (postId) => {
        setLoading(true)
        try {
            const response = await api.get(`/posts/${postId}`);
            setPost(response.data)
        } catch (e) {
            setError(e.response.data)
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        error,
        post,
        posts,
        fetchPosts,
        fetchPost
    }
}


export default usePostAction