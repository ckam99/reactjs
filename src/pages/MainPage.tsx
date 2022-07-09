import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/store'
import { fetchAllPosts } from '../store/actions/postAction'

const MainPage = () => {
  const dispatch = useAppDispatch()
  const { loading, error, posts } = useAppSelector((state) => state.post)

  React.useEffect(() => {
    dispatch(fetchAllPosts())
  }, [dispatch])
  return (
    <div className="flex flex-col bg-slate-200">
      <h1 className="text-red-500">Main page</h1>
      <div className="w-[600px] bg-white">
        {loading && <div>Loading...</div>}
        {error && <h1 className="text-red-600 font-bold">{error}</h1>}
        <h1>Posts</h1>
        {posts.map((post) => (
          <div key={post.id} className="p-3">
            {post.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainPage
