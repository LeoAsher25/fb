import React, { useState } from "react";

import { _post } from "./_data";

export const PostsContext = React.createContext();

const PostsContextProvider = (props) => {
  const [posts, setPosts] = useState(_post);

  const postDatas = {
    posts,
    setPosts,
  };

  return (
    <PostsContext.Provider value={postDatas}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
