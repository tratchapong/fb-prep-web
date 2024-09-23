import {create} from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import axios from 'axios'

const useUserStore = create( persist((set, get) => ({
  user : null,
  token : '',
  login : async (body)=> {
    const rs = await axios.post('http://localhost:8899/auth/login', body)
    set({token : rs.data.token})
    // console.log(get().token)
  },
  register : async (body)=>{
    const rs = await axios.post('http://localhost:8899/auth/register', body)
  },
  logout : ()=>{
    set({user : null, token:''})
  },
}),
  {
    name: 'accessToken',
    storage : createJSONStorage(() => localStorage),
    partialize : (state) => {
      console.log(state.token)
      return ({token : state.token})
    }
  },
))

export default useUserStore