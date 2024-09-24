import useUserStore from "../stores/userStore";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import {
  GroupIcon,
  PlayIcon,
  ShopIcon,
  FriendIcon,
  ClockIcon,
  BookmarkIcon,
  MoreIcon,
} from "../icons";

export default function SidebarMenu() {
  const user = useUserStore((state) => state.user);
  return (
    <div className="w-[350px] overflow-auto fixed top-14 h-full flex flex-col gap-2 pt-4 px-2 min-w-[220px] max-xl:w-[220px]">
      <MenuItem
        icon={() => (
          <Avatar
            className="w-11 h-11 rounded-full"
            imgSrc={user.profileImage}
          />
        )}
        text={`${user.firstName} ${user.lastName}`}
      />
      <MenuItem icon={FriendIcon} text="Friends" className="w-11" />
      <MenuItem icon={ClockIcon} text="Memories" className="w-10" />
      <MenuItem icon={BookmarkIcon} text="Save" className="w-10" />
      <MenuItem
        icon={GroupIcon}
        text="Group"
        className="w-10 border border-gray-500 rounded-ful"
      />
      <MenuItem icon={PlayIcon} text="Video" className="w-10" />
      <MenuItem icon={ShopIcon} text="Marketplace" className="w-10" />
      <MenuItem
        icon={MoreIcon}
        text="More.."
        className="w-10 p-2 border border-gray-500 rounded-full"
      />
      <div className="divider mt-0"></div>
    </div>
  );
}
