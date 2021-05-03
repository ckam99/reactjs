import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { postState, currentPostState } from '../store/states/posts'
import postService from '../api/post'

export function usePost() {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [posts, setPosts] = useRecoilState(postState);

    useEffect(() => {
        fetchPosts()
    }, []);

    async function fetchPosts() {
        setLoaded(true)
        const response = await postService.getAll()
        setPosts(response.data)
        setError(response.error)
        setLoaded(false)
    }

    return [
        loaded,
        posts,
        error
    ];
}

export function useCurrentPost(id) {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);
    const [post, setPost] = useRecoilState(currentPostState);

    useEffect(() => {
        const fetchPost = async () => {
            setLoaded(true)
            const response = await postService.find(id)
            setError(response.error)
            setPost(response.data)
            setLoaded(false)
        }
        fetchPost()
    }, []);

    return [
        loaded,
        post,
        error
    ];
}

export default usePost