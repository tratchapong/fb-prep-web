import {
	FacebookLogo,
	GroupIcon,
	HomeIcon,
	MenuIcon,
	MessengerIcon,
	PlayIcon,
	ShopIcon,
	NotificationIcon,
	SearchIcon,
} from "../icons";
import useUserStore from '../stores/userStore'
import Avatar from "./Avatar";

export default function Header() {
	const user = useUserStore(state => state.user)
	const logout = useUserStore(state => state.logout)
	return (
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
						{/* <div className="avatar items-center cursor-pointer">
						<div className="w-10 h-10 rounded-full hover:scale-110">
							<img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
						</div>
					</div> */}
						<Avatar
							className="w-11 h-11 rounded-full"
							imgSrc={user.profileImage}
							menu={true}
						/>
					</div>
					<ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
						<li onClick={logout} ><a>Logout</a></li>
					</ul>
				</div>
			</div>
		</header>
	)
}
