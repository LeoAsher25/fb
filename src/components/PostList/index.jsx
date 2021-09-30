import React, { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContextProvider";
import PostItem from "../PostItem";

const PostList = () => {
  // get posts context
  const { posts, setPosts, calcTimeFormat } = useContext(PostsContext);

  const handleUpdatePost = (post) => {
    const tempPosts = [...posts];
    const postIndex = tempPosts.findIndex(
      (item) => item.postID === post.postID
    );
    tempPosts.splice(postIndex, 1, post);
    setPosts(tempPosts);
  };

  // const handleAddCmt = (post) => {
  //   setPosts([...posts, post]);
  // };

  const handleDeletePost = (post) => {
    const tmpPosts = posts.filter((item) => item.postID !== post.postID);
    setPosts([...tmpPosts]);
  };

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem
          key={post.postID}
          post={post}
          handleUpdatePost={handleUpdatePost}
          handleDeletePost={handleDeletePost}
          calcTimeFormat={calcTimeFormat}
        />
      ))}
    </div>
  );
};

export default PostList;
