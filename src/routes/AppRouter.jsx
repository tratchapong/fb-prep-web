import React, { useEffect } from 'react'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Login from '../Login'
import useUserStore from '../stores/userStore'
import App from '../App'
import { useShallow } from 'zustand/shallow'

const guestRouter = createBrowserRouter([
  {
    path : '/', element : <Login />
  }
])

const userRouter = createBrowserRouter([
  {
    path : '/', element : <App />
  }
])

export default function AppRouter() {

  // const { nuts, honey } = useBearStore(
  //   useShallow((state) => ({ nuts: state.nuts, honey: state.honey })),
  // )

  const {user,token, getMe} = useUserStore(
    useShallow(state => ({user : state.user, token : state.token, getMe: state.getMe}) )
  )
  const finalRouter = user ? userRouter : guestRouter

  useEffect( ()=>{
    if(!token) { return }
    getMe().then(console.log)
  },[])

  return (
    <RouterProvider router={finalRouter} />
  )
}
