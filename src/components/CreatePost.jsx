import React from 'react'
import useUserStore from '../stores/userStore'
import Avatar from './Avatar'
import { PhotoIcon, SmileIcon, VideoIcon } from '../icons'
import PostForm from './PostForm'

export default function CreatePost() {
	const user = useUserStore(state => state.user)

	return (
		<>
		<div className="card bg-base-100  shadow-xl ">
			<div className="card-body p-3">
				{/* <div className="avatar items-center gap-3 cursor-pointer">
				<div className="w-10 h-10 rounded-full">
					<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
				</div>
				<button className="btn rounded-full flex-1 justify-start">
					What do you think?
				</button>
			</div> */}
				<div className="flex gap-2">
					<Avatar
						className="w-11 h-11 rounded-full"
						imgSrc={user.profileImage}
					/>
					<button className="btn rounded-full flex-1 justify-start"
						onClick={ ()=>document.getElementById('postform-modal').showModal()}
					>
						What do you think?
					</button>
				</div>
				<div className="divider mt-1 mb-0"></div>
				<div className="flex justify-between gap-3">
					<div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
						<VideoIcon height="24" width="24" />
						Live / Stream
					</div>
					<div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
						<PhotoIcon height="24" width="24" />
						Photo / Video
					</div>
					<div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
						<SmileIcon height="24" width="24" />
						Activity
					</div>
				</div>
			</div>
		</div>
		{/* Modal */}
		<dialog id="postform-modal" className="modal">
        <div className="modal-box">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={(e) => e.target.closest("dialog").close()}
          >
            ✕
          </button>
						<PostForm />
        </div>
      </dialog>

		</>
	)
}
