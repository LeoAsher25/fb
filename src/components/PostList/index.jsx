import React, { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContextProvider";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import PostItem from "../PostItem";

const PostList = () => {
  // get theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  // get posts context
  const { posts, setPosts } = useContext(PostsContext);

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
