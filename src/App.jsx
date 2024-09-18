import { FacebookLogo, GroupIcon, HomeIcon, MenuIcon, MessengerIcon, PlayIcon, ShopIcon, NotificationIcon, FriendIcon, ClockIcon, BookmarkIcon, MoreIcon, SearchIcon, VideoIcon, PhotoIcon, SmileIcon } from "./icons";

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
            <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400" >
              <MenuIcon className="w-5 " />
            </div>
          </div>
          <div className="avatar items-center cursor-pointer">
            <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400" >
              <MessengerIcon className="w-6 " />
            </div>
          </div>
          <div className="avatar items-center cursor-pointer">
            <div className="w-10 h-10 rounded-full !flex justify-center items-center bg-gray-300 hover:bg-gray-400" >
              <NotificationIcon className="w-8 " />
            </div>
          </div>

          <div className="avatar items-center cursor-pointer">
            <div className="w-10 h-10 rounded-full hover:scale-110">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </header>

      <main className="relative flex bg-gray-100 border pt-14">
        <div className="w-[350px] overflow-auto fixed top-14 h-full flex flex-col gap-2 pt-4 px-2 ">
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

        <div className="w-[680px] mx-auto bg-white mt-3">
          <div className="card bg-base-100  shadow-xl ">
            <div className="card-body p-4">
              <div className="avatar items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
                <button className="btn rounded-full flex-1 justify-start">What do you think?</button>
              </div>
              <div className="divider divider-start my-1"></div>
              <div className="flex justify-between gap-3">
                <div className="flex gap-3 justify-center cursor-pointer hover:bg-gray-300 rounded-lg flex-1 py-2 ">
                  <VideoIcon height="24" width="24"/>
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
          <div className="artboard phone-1 my-4 border mx-auto">320×568</div>
          <div className="artboard phone-1 my-4 border mx-auto">320×568</div>
          <div className="artboard phone-1 my-4 border mx-auto">320×568</div>
          <div className="artboard phone-1 my-4 border mx-auto">320×568</div>
          <div className="artboard phone-1 my-4 border mx-auto">320×568</div>
        </div>
        <div className="w-[350px] overflow-auto fixed top-14 right-0 h-full flex flex-col gap-2 pt-4 px-2">
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
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            Bobby Codecamp
          </button>
          <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 w-full">
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            Candy Codecamp
          </button>
          <button className="btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 w-full">
            <div className="avatar items-center cursor-pointer">
              <div className="w-10 h-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
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
