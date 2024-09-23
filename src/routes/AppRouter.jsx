import React, { useEffect } from 'react'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Login from '../Login'
import useUserStore from '../stores/userStore'
import App from '../App'

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
  const {user, getMe} = useUserStore()
  const finalRouter = user ? userRouter : guestRouter

  useEffect( ()=>{
    getMe().then(console.log)
  },[])

  return (
    <RouterProvider router={finalRouter} />
  )
}
