import React, { useEffect, useState } from 'react'
import useUserStore from '../stores/userStore'
import Avatar from './Avatar'
import { AddFriendIcon, NotificationIcon, PhotoIcon } from '../icons'
import AddPicture from './AddPicture'

export default function PostForm() {
	const user = useUserStore(state => state.user)
	const [addPic, setAddPic] = useState(false)
	const [file, setFile] = useState(null)
	const [message, setMessage] = useState('')

	const hdlCreatePost = e => {
		console.log('message = ', message)
		console.log('file = ',file)
	}
	return (
		<div className='flex flex-col gap-2'>
			<h3 className="text-xl text-center">Create post</h3>
			<div className="divider mt-1 mb-0"></div>
			<div className="flex gap-2">
				<Avatar
					className="w-11 h-11 rounded-full"
					imgSrc={user.profileImage}
				/>
				<div className="flex flex-col">
					<div className="text-sm">{`${user.firstName} ${user.lastName}`}</div>
					<select className="select bg-slate-200 select-xs max-w-xs" defaultValue={'who can see?'}>
						<option disabled >who can see?</option>
						<option>public</option>
						<option>friends</option>
						{/* <option>only me</option> */}
					</select>
				</div>
			</div>
			<textarea 
				className="textarea textarea-ghost w-full p-0 min-h-32" placeholder={"What do you think? "+user.firstName}
				value={message}
				onChange={e=>setMessage(e.target.value)}
				></textarea>
			{ addPic && (<AddPicture closeMe={()=>setAddPic(false)} file={file} setFile={setFile} />) }
			<div className="flex border rounded-lg p-2 justify-between items-center">
				<p>add with your post</p>
				<div className="flex gap-2 ">
					<div onClick={()=>setAddPic(prv=>!prv)}
						className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex justify-center items-center
						active:scale-110">
						<PhotoIcon className="w-7 h-7" />
					</div>
					<div className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex justify-center items-center
						active:scale-110">
						<AddFriendIcon className="w-7 h-7" />
					</div>
				</div>
			</div>
			<div className={`btn btn-sm ${(!file && !message) && 'btn-disabled'}`}
				onClick={hdlCreatePost}
			>Create Post</div>
		</div>
	)
}
