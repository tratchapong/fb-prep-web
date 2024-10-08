import React, { useRef, useState } from "react";
import {
  ChatIcon,
  CloseIcon,
  LikeIcon,
  LikeIcon2,
  ShareIcon,
  ThreeDotIcon,
} from "../icons";
import useUserStore from "../stores/userStore";
import Avatar from "./Avatar";
import CommentContainer from "./CommentContainer";
import usePostStore from "../stores/postStore";
import { toast } from "react-toastify";
// import PostFormEdit from "./PostFormEdit";

export default function PostItem(props) {
  const {
    post: { message, image, user, id, comments, likes, userId },
  } = props;
	const token = useUserStore( state => state.token)
  const currentUser = useUserStore((state) => state.user);
	const setCurrentPost = usePostStore(state => state.setCurrentPost)
	const deletePost = usePostStore(state => state.deletePost)
  const likePost = usePostStore(state => state.likePost)
  const unLikePost = usePostStore(state => state.unLikePost)
  const getAllPosts = usePostStore(state => state.getAllPosts)
	// const modalRef = useRef()
	// const [editMode, setEditMode] = useState(false)

	const showEditModal = e => {
		setCurrentPost(id)
		document.getElementById('editform-modal').showModal()
	}

	const hdlDelete = async e => {
		try{
			if(!confirm("Delete this post?")) {
				return console.log('cancel delete')
			}
			await deletePost(token, id)
			toast.success('Delete done')
		}catch(err) {
			const errMsg = err.response?.data?.error || err.message
			toast.error(errMsg)
			console.log(err)
		}
	}

  const checkLike = () => likes.findIndex(el => el.userId === currentUser.id) !== -1

  const hdlLikeClick = async e => {
    if(checkLike()) {
     await unLikePost(token, id, currentUser.id)
    //  getAllPosts(token)
    }else {
      await likePost(token, id)
    }
  }

  return (
    <>
      <div className="card bg-base-100  shadow-xl  ">
        <div className="card-body p-3  ">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <Avatar
                className="w-11 h-11 rounded-full"
                imgSrc={user.profileImage}
              />
              <div className="flex flex-col">
                <p className="font-bold">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs font-bold opacity-50">59 min.</p>
              </div>
            </div>
            <div className="flex gap-2">
              {userId === currentUser.id && (
                <div className="dropdown ">
                  <div tabIndex={0} role="button" className="">
                    <div className="avatar items-center cursor-pointer dropdown">
                      <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-200">
                        <ThreeDotIcon className="w-6" />
                      </div>
                    </div>
                  </div>
                  {
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                      <li onClick={showEditModal}>
                        <a>Edit</a>
                      </li>
                      <li onClick={hdlDelete}>
                        <a>Delete</a>
                      </li>
                    </ul>
                  }
                </div>
              )}
              <div className="avatar items-center cursor-pointer">
                <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-200">
                  <CloseIcon className="w-4" />
                </div>
              </div>
            </div>
          </div>
          <p>{message}</p>
          {image && (
            <img
              src={image}
              alt="post-pic"
              className="p-4 max-h-[500px] object-contain"
            />
          )}
          <div className="flex justify-between items-center pe-4">
            <div className="avatar items-end cursor-pointer gap-2">
              <div className="w-7 h-7 rounded-full !flex justify-center items-center bg-blue-500">
                <LikeIcon className="w-5" />
              </div>
              <p className="opacity-60">{likes.length}</p>
            </div>
            <div className="flex gap-2">
              <p className="opacity-60">{comments.length} comments</p>
              {/* <p className="opacity-60">0 shares</p> */}
            </div>
          </div>

          <div className="divider h-0 my-0"></div>
          <div className="flex justify-between gap-3">
            <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-1 "
              onClick={hdlLikeClick}
            >
              <LikeIcon2 isLike={checkLike()} height="24" width="24" />
              <span className={checkLike() ? 'text-blue-800 font-semibold' : ''}>Like</span>
            </div>
            <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-1 ">
              <ChatIcon height="24" width="24" className="opacity-40" />
              Comment
            </div>
            <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-1 ">
              <ShareIcon height="24" width="24" className="opacity-40" />
              Share
            </div>
          </div>
          <div className="divider h-0 my-0"></div>
          <CommentContainer postId={id} comments={comments} />
        </div>
      </div>

    </>
  );
}
