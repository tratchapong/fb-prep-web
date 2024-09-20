import {
  FacebookLogo,
  GroupIcon,
  HomeIcon,
  MenuIcon,
  MessengerIcon,
  PlayIcon,
  ShopIcon,
  NotificationIcon,
  FriendIcon,
  ClockIcon,
  BookmarkIcon,
  MoreIcon,
  SearchIcon,
  VideoIcon,
  PhotoIcon,
  SmileIcon,
  ThreeDotIcon,
  CloseIcon,
  LikeIcon,
  LikeIcon2,
  ChatIcon,
  ShareIcon,
} from "./icons";

function App() {
  return (
    <div className="min-h-screen bg-yellow-100">
      <header className=" h-14 w-full fixed top-0 z-10 px-3 flex justify-between shadow-lg bg-white">
        <div className="flex gap-2 items-center flex-1">
          <FacebookLogo className="w-12" />
          <label className="input input-bordered flex items-center gap-2 w-64 h-10 rounded-full">
            <SearchIcon className="h-4 w-4 opacity-70" />
            <input type="text" className="grow" placeholder="Search" />
          </label>
        </div>

        <div className="flex gap-2 flex-1 justify-center cursor-pointer">
          <div className="flex justify-center w-32 hover:border-b-2 hover:border-blue-900">
            <HomeIcon className="w-10" />
          </div>
          <div className="flex justify-center w-32 hover:border-b-2 hover:border-blue-900">
            <PlayIcon className="w-8" />
          </div>
          <div className="flex justify-center w-32 hover:border-b-2 hover:border-blue-900">
            <ShopIcon className="w-8" />
          </div>
          <div className="flex justify-center w-32 hover:border-b-2 hover:border-blue-900">
            <GroupIcon className="w-10" />
          </div>
        </div>
        <div className="flex gap-3 flex-1 justify-end">
          <div className="avatar items-center cursor-pointer">
            <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
              <MenuIcon className="w-5 " />
            </div>
          </div>
          <div className="avatar items-center cursor-pointer">
            <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
              <MessengerIcon className="w-6 " />
            </div>
          </div>
          <div className="avatar items-center cursor-pointer">
            <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400">
              <NotificationIcon className="w-8 " />
            </div>
          </div>

          <div className="dropdown dropdown-end mt-2">
            <div tabIndex={0} role="button" className="">
              <div className="avatar items-center cursor-pointer">
                <div className="w-10 h-10 rounded-full hover:scale-110">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>


        </div>
      </header>

      <main className="relative flex bg-gray-100 border pt-14">
        {/* Lefe Sidebar : Menu */}
        <div className="w-[350px] overflow-auto fixed top-14 h-full flex flex-col gap-2 pt-4 px-2 min-w-[220px] max-xl:w-[220px]">
          <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20">
            <div className="avatar items-center cursor-pointer">
              <div className="w-11 h-11 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            Andy Codecamp
          </button>
          <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20">
            <FriendIcon className="w-11" />
            Friends
          </button>
          <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20">
            <ClockIcon className="w-10" />
            Memories
          </button>
          <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20">
            <BookmarkIcon className="w-10" />
            Save
          </button>
          <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20">
            <GroupIcon className="w-10 border border-gray-500 rounded-full" />
            Group
          </button>
          <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20">
            <PlayIcon className="w-10 " />
            Video
          </button>
          <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20">
            <ShopIcon className="w-10 " />
            Marketplace
          </button>
          <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20">
            <MoreIcon className="w-10 border border-gray-500 rounded-full" />
            More..
          </button>
          <div className="divider mt-0"></div>
        </div>

        {/* Posts Area */}
        <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg">
          {/* Create new post */}
          <div className="card bg-base-100  shadow-xl ">
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

        {/* Right Sidebar : Contacts */}
        <div className="w-[350px] overflow-auto fixed top-14 right-0 h-full flex flex-col gap-2 pt-4 px-2 max-xl:hidden ">
          <div className="flex justify-between text-gray-500">
            <span>Contact</span>
            <div className="flex gap-2">
              <SearchIcon className="w-6" />
              ...
            </div>
          </div>
          <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 w-full">
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full">
                <img src="https://www.svgrepo.com/show/407389/scientist-medium-dark-skin-tone.svg" />
              </div>
            </div>
            Bobby Codecamp
          </button>
          <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 w-full">
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full">
                <img src="https://www.svgrepo.com/show/407829/woman-construction-worker-medium-skin-tone.svg" />
              </div>
            </div>
            Candy Codecamp
          </button>
          <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 w-full">
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full">
                <img src="https://www.svgrepo.com/show/404551/avatar-man-profile-user-5.svg" />
              </div>
            </div>
            Danny Codecamp
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
