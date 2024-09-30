import React, { useEffect, useState } from 'react'
import useUserStore from '../stores/userStore'
import Avatar from './Avatar'
import { AddFriendIcon, PhotoIcon } from '../icons'
import AddPicture from './AddPicture'
import { toast } from 'react-toastify'
import axios from 'axios'
import usePostStore from '../stores/postStore'

export default function PostFormEdit(props) {
	const {post} = props
	// console.log(post)
	const user = useUserStore(state => state.user)
	const token = useUserStore(state => state.token)
	const getAllPosts = usePostStore(state => state.getAllPosts)
	const updatePost = usePostStore(state => state.updatePost)
	const [addPic, setAddPic] = useState(false)
	const [file, setFile] = useState(null)
	const [message, setMessage] = useState(post.message)
	const [loading, setLoading] = useState(false)

	const hdlEditPost = async e => {
		try {
			setLoading(true)
			const formData = new FormData()
			if(file) {
				formData.append('image', file)
			}
			formData.append('message', message)
			await updatePost(token, post.id, formData)
			toast.success('Update post : done')
		}catch(err){
			const errMsg = err.response?.data?.error || err.message
			toast.error(errMsg)
			console.log(err)
		}finally{
			setFile(null)
			setMessage('')
			setLoading(false)
			document.getElementById('editform-modal').close()
		}
	}

	return (
		<div className='flex flex-col gap-2'>
			{ loading && <span className="loading loading-dots loading-xs"></span> }

			<h3 className="text-xl text-center">Update post</h3>
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
			<div className={`btn btn-sm ${(!file && !message) ? 'btn-disabled' : 'btn-primary'}`}
				onClick={hdlEditPost}
			>Update Post</div>
		</div>
	)
}
