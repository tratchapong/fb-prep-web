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
  }
}))


export default usePostStore