import React, { useEffect } from 'react'
import CreatePost from './CreatePost'
import PostItem from './PostItem'
import usePostStore from '../stores/postStore'
import useUserStore from '../stores/userStore'

export default function PostContainer() {
  const token = useUserStore(state => state.token)
  const posts = usePostStore(state => state.posts)
  const loading = usePostStore(state => state.loading)
  const getAllPosts = usePostStore(state => state.getAllPosts)

  useEffect(()=>{
    getAllPosts(token)
  },[])

  if(loading) {
    return <p>Loading...</p>
  }
  
  return (
    <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg">
    {/* Create new post */}
    <CreatePost />
    {/* Post */}
    { posts.map(el=> (
      <PostItem key={el.id} post={el}/>
    ))}
  </div>
  )
}
