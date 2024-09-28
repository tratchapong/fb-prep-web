import React, { useEffect, useState } from "react";
import useUserStore from "../stores/userStore";
import Avatar from "./Avatar";
import { SendMessageIcon } from "../icons";

export default function CommentForm(props) {
  const {postId} = props
  const user = useUserStore((state) => state.user);
  const [rows,setRows] = useState(1)
  const [message, setMessage] = useState('')

  useEffect( ()=>{
    setRows(message.split('\n').length)
  },[message])

  const hdlChange = e => {
    setMessage(e.target.value)
  }

  const hdlSendComment = e => {
    const body = {
      message,
      postId
    }
    console.log(body)
    setMessage('')
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
