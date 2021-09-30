import React, { useState } from "react";

import { _post } from "./_data";

export const PostsContext = React.createContext();

const PostsContextProvider = (props) => {
  const [posts, setPosts] = useState(_post);

  const handleAddPost = (post) => {
    console.log("added a post");
    setPosts([post, ...posts]);
  };

  const postDatas = {
    posts,
    setPosts,
    handleAddPost,
  };

  return (
    <PostsContext.Provider value={postDatas}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
