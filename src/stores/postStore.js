import {create} from 'zustand'
import axios from 'axios'

const usePostStore = create( (set, get)=>({
  posts : [],
  activePost : null,
  loading: false,
  getAllPosts : async (token) => {
    set({loading : true})
    const rs = await axios.get('http://localhost:8899/post', {
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    console.log(rs.data.posts)
    // console.log(get().posts)
    set({posts : rs.data.posts, loading: false})
  },
  postComment : async (token, body, user) => {
    // set({loading: true})
    const rs = await axios.post('http://localhost:8899/comment',body,{
      headers: {
        Authorization : `Bearer ${token}`
      }
    })
    // console.log(rs.data)

    set(state => {
      const newPosts =  structuredClone(state.posts)
      let idx = newPosts.findIndex(el => el.id === body.postId)
      console.log(newPosts[idx])
      // const newComment = { ...rs.data, user }
      const newComment = {...rs.data, user : {
        firstName: user.firstName,
        lastName: user.lastName,
        profileImage : user.profileImage
      }}
      console.log(newComment)
      newPosts[idx].comments.push(newComment)
      return ({posts : newPosts})
    })
  },
  setCurrentPost : (id) => {
    if(id === -1) {
      return set({activePost: null})
    }
    let idx = get().posts.findIndex(el => el.id === id)
    set(state => ({activePost : state.posts[idx]}))
    // console.log(get().activePost)
  },
  updatePost : async (token, id, body) => {
    const rs = await axios.put(`http://localhost:8899/post/${id}`,body, {
      headers : { Authorization : `Bearer ${token}`}
    })
    console.log(rs.data)
    set(state => ({
      posts : state.posts.map(el => {
       return (el.id===id ? {...el, ...rs.data} :  el)
      })
    }))
  },
  deletePost : async (token, id) => {
    const rs = await axios.delete(`http://localhost:8899/post/${id}`, {
      headers : { Authorization : `Bearer ${token}`}
    })
    set( state => ({
      posts : state.posts.filter(el => el.id !== id)
    }))
  }
}))


export default usePostStore