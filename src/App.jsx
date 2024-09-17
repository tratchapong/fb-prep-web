import { FacebookLogo, GroupIcon, HomeIcon, PlayIcon, ShopIcon } from "./icons";

function App() {
  return (
    <div className="min-h-screen bg-yellow-100">
      <header className="bg-lime-200 h-14 w-full fixed top-0 z-10 px-1 flex justify-between">
        <div className="flex gap-2 items-center flex-1">
          <FacebookLogo className="w-12" />
          <label className="input input-bordered flex items-center gap-2 w-64 h-10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>
        </div>

        <div className="flex gap-2 flex-1 justify-center">
          <div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
            <HomeIcon className="" />
          </div>
          <div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
            <PlayIcon className="w-3/5" />
          </div>
          <div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
            <ShopIcon className="w-3/5" />
          </div>
          <div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
            <GroupIcon className="" />
          </div>
        </div>
        <div className="flex gap-2 flex-1 justify-end">Avatar</div>
      </header>
      <main className="relative flex bg-blue-200 border pt-14">
        <div className="w-[280px] bg-red-200 overflow-auto fixed top-14 h-full flex flex-col gap-4">
          <div className="btn btn-info w-4/5">Menu1</div>
          <div className="btn btn-primary w-4/5">Menu1</div>
          <div className="btn btn-primary w-4/5">Menu1</div>
        </div>
        {/* <div className="px-[280px] w-full"> */}
        <div className="w-[680px] mx-auto border ">
          <div className="artboard phone-1 my-4 border mx-auto">320×568</div>
          <div className="artboard phone-1 my-4 border mx-auto">320×568</div>
          <div className="artboard phone-1 my-4 border mx-auto">320×568</div>
          <div className="artboard phone-1 my-4 border mx-auto">320×568</div>
          <div className="artboard phone-1 my-4 border mx-auto">320×568</div>
          <div className="artboard phone-1 my-4 border mx-auto">320×568</div>
        </div>
        <div className="w-[280px] bg-red-200 overflow-auto fixed top-14 right-0 h-full">
          <div className="btn btn-info w-4/5">Menu1</div>
          <div className="btn btn-primary w-4/5">Menu1</div>
          <div className="btn btn-primary w-4/5">Menu1</div>
          <div className="btn btn-primary w-4/5">Menu1</div>
        </div>
      </main>
    </div>
  );
}

export default App;
