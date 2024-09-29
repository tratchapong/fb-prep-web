import React, { useEffect, useState } from "react";
import useUserStore from "../stores/userStore";
import Avatar from "./Avatar";
import { SendMessageIcon } from "../icons";
import { toast } from "react-toastify";
import usePostStore from "../stores/postStore";
import axios from "axios";

export default function CommentForm(props) {
  const {postId} = props
  const user = useUserStore((state) => state.user);
  const token = useUserStore( state => state.token)
  const getAllPosts = usePostStore(state=> state.getAllPosts)
  const [rows,setRows] = useState(1)
  const [message, setMessage] = useState('')

  useEffect( ()=>{
    setRows(message.split('\n').length)
  },[message])

  const hdlChange = e => {
    setMessage(e.target.value)
  }

  const hdlSendComment =async e => {
    try {
      const body = {
        message,
        postId
      }
      const rs = await axios.post('http://localhost:8899/comment',body,{
        headers: {
          Authorization : `Bearer ${token}`
        }
      })
      setMessage('')
      getAllPosts(token)
    }catch(err) {
      const errMsg = err.response?.data?.error || err.message
			toast.error(errMsg)
    }


  }
  return (
    <div className="relative">
    <div className="flex gap-3 items-start">
      <Avatar className="w-11 h-11 rounded-full" imgSrc={user.profileImage} />
      <textarea
        className="textarea  w-full p-1 leading-5"
        rows={rows}
        placeholder={`comment by ${user.firstName} ${user.lastName}`}
        value={message}
        onChange={hdlChange}
      ></textarea>
    </div>
      <button className="btn btn-circle btn-sm absolute bottom-1 right-2 "
        onClick={hdlSendComment}
      >
        <SendMessageIcon className='w-6 ms-1'/>
      </button>
    </div>
  );
}
