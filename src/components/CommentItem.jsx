import React from "react";
import useUserStore from "../stores/userStore";
import Avatar from "./Avatar";

export default function CommentItem() {
  const user = useUserStore(state => state.user)
  return (
    <div className="flex gap-2">
      <Avatar className="w-11 h-11 rounded-full" imgSrc={user.profileImage} />
      <div className="flex flex-col border bg-slate-100 flex-1 rounded-lg p-1 px-2 text-xs leading-5">
        <div className="font-bold">{`${user.firstName} ${user.lastName}`}</div>
        <p>
          A Facebook comment lets you respond to a post or picture on Facebook.
          To comment on a Facebook post, click Comment underneath the post
        </p>
      </div>
    </div>
  );
}
