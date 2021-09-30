import React, { useEffect, useState } from "react";

import { _post } from "./_data";

export const PostsContext = React.createContext();

const PostsContextProvider = (props) => {
  const [posts, setPosts] = useState(_post);

  const handleAddPost = (post) => {
    console.log("added a post");
    setPosts([post, ...posts]);
  };

  useEffect(() => {
    const localPosts = localStorage.getItem("posts");
    if (localPosts) {
      setPosts([...JSON.parse(localPosts)]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const calcTimeFormat = (time1, time2) => {
    let time = time2 - time1;
    time /= 1000;
    let res;
    if (time < 60) {
      res = "1m";
    } else if (time < 3600) {
      let tmp = time / 60 + 1;
      res = Math.floor(tmp) + "m";
    } else if (time < 3600 * 24) {
      let tmp = time / 3600 + 1;
      res = Math.floor(tmp) + "h";
    } else {
      let tmp = time / (3600 * 24) + 1;
      res = Math.floor(tmp) + "d";
    }

    return res;
  };

  const postDatas = {
    posts,
    setPosts,
    handleAddPost,
    calcTimeFormat,
  };

  return (
    <PostsContext.Provider value={postDatas}>
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
