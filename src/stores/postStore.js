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
  }
}))


export default usePostStore