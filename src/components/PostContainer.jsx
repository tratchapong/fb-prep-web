import React, { useEffect } from "react";
import CreatePost from "./CreatePost";
import PostItem from "./PostItem";
import usePostStore from "../stores/postStore";
import useUserStore from "../stores/userStore";
import PostFormEdit from "./PostFormEdit";

export default function PostContainer() {
  const token = useUserStore((state) => state.token);
  const posts = usePostStore((state) => state.posts);
  const activePost = usePostStore(state => state.activePost)
  const setCurrentPost = usePostStore(state => state.setCurrentPost)
  const loading = usePostStore((state) => state.loading);
  const getAllPosts = usePostStore((state) => state.getAllPosts);

  useEffect(() => {
    getAllPosts(token);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg">
        {/* Create new post */}
        <CreatePost />
        {/* Post */}
        {posts.map((el) => (
          <PostItem key={el.id} post={el} />
        ))}
      </div>
      {/* EditFormModal */}
      <dialog
        id="editform-modal"
        className="modal"
        // ref={modalRef}
        onClose={() => setCurrentPost(-1)}
      >
        <div className="modal-box">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={(e) => e.target.closest("dialog").close()}
          >
            ✕
          </button>
          {activePost && <PostFormEdit post={activePost} />}
        </div>
      </dialog>
    </>
  );
}
