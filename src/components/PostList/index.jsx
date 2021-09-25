import React, { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContextProvider";
import PostItem from "../PostItem";

const PostList = () => {
  // get posts context
  const { posts, setPosts } = useContext(PostsContext);

  const handleUpdatePost = (post) => {
    // setPosts([...posts, post]);
    const tempPosts = [...posts];
    const postIndex = tempPosts.findIndex((item) => item.id === post.id);

    const editedPost = { ...post };

    if (editedPost.isReacted) {
      editedPost.isReacted = !editedPost.isReacted;
      post.reactions.like -= 1;
    } else {
      editedPost.isReacted = !editedPost.isReacted;
      post.reactions.like += 1;
    }

    tempPosts.splice(postIndex, 1, editedPost);
    setPosts(tempPosts);
  };

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <PostItem
          key={post.id}
          post={post}
          handleUpdatePost={handleUpdatePost}
        />
      ))}
    </div>
  );
};

export default PostList;
