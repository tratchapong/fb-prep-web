import React from 'react'
import { ChatIcon, CloseIcon, LikeIcon, LikeIcon2, PhotoIcon, ShareIcon, SmileIcon, ThreeDotIcon, VideoIcon } from '../icons'
import CreatePost from './CreatePost'

export default function PostContainer() {
  return (
    <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg">
    {/* Create new post */}
    {/* <div className="card bg-base-100  shadow-xl ">
      <div className="card-body p-3">
        <div className="avatar items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <button className="btn rounded-full flex-1 justify-start">
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
    </div> */}
    <CreatePost />
    {/* Post */}
    <div className="card bg-base-100  shadow-xl  ">
      <div className="card-body p-3  ">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="avatar items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Bobby Codecamp</p>
              <p className="text-xs font-bold opacity-50">59 min.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-200">
                <ThreeDotIcon className="w-6" />
              </div>
            </div>
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-200">
                <CloseIcon className="w-5" />
              </div>
            </div>
          </div>
        </div>
        <p>
          Facebook captions are the text that accompany a Facebook photo,
          video, carousel, or Reel post. They typically show up above the
          post’s photo, video, or other media. Facebook captions often
          include hashtags for added reach and visibility.
        </p>
        <div className="flex justify-between items-center pe-4">
          <div className="avatar items-end cursor-pointer gap-2">
            <div className="w-7 h-7 rounded-full !flex justify-center items-center bg-blue-500">
              <LikeIcon className="w-5" />
            </div>
            <p className="opacity-60">99</p>
          </div>
          <div className="flex gap-2">
            <p className="opacity-60">2 comments</p>
            <p className="opacity-60">4 shares</p>
          </div>
        </div>

        <div className="divider h-0 my-1"></div>
        <div className="flex justify-between gap-3">
          <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-1 ">
            <LikeIcon2 height="24" width="24" />
            Like
          </div>
          <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-1 ">
            <ChatIcon height="24" width="24" className='opacity-40' />
            Comment
          </div>
          <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-1 ">
            <ShareIcon height="24" width="24" className='opacity-40' />
            Share
          </div>
        </div>
      </div>
    </div>
    {/* Post */}
    <div className="card bg-base-100  shadow-xl  ">
      <div className="card-body p-3  ">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div className="avatar items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Bobby Codecamp</p>
              <p className="text-xs font-bold opacity-50">59 min.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-200">
                <ThreeDotIcon className="w-6" />
              </div>
            </div>
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full !flex justify-center items-center  hover:bg-gray-200">
                <CloseIcon className="w-5" />
              </div>
            </div>
          </div>
        </div>
        <p>
          Facebook captions are the text that accompany a Facebook photo,
          video, carousel, or Reel post. They typically show up above the
          post’s photo, video, or other media. Facebook captions often
          include hashtags for added reach and visibility.
        </p>
        <img src="https://picsum.photos/700" alt="post-pic" />
        <div className="flex justify-between items-center pe-4">
          <div className="avatar items-end cursor-pointer gap-2">
            <div className="w-7 h-7 rounded-full !flex justify-center items-center bg-blue-500">
              <LikeIcon className="w-5" />
            </div>
            <p className="opacity-60">99</p>
          </div>
          <div className="flex gap-2">
            <p className="opacity-60">2 comments</p>
            <p className="opacity-60">4 shares</p>
          </div>
        </div>

        <div className="divider h-0 my-1"></div>
        <div className="flex justify-between gap-3">
          <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-1 ">
            <LikeIcon2 height="24" width="24" />
            Like
          </div>
          <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-1 ">
            <ChatIcon height="24" width="24" className='opacity-40' />
            Comment
          </div>
          <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-1 ">
            <ShareIcon height="24" width="24" className='opacity-40' />
            Share
          </div>
        </div>
      </div>
    </div>


  </div>
  )
}
