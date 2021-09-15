import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import PostList from "../PostList";
import UpPost from "../UpPost";

import "./HomePage.scss";

const HomePage = () => {
  // declear theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  return (
    <div
      className="home-page body"
      style={{ backgroundColor: style.bodyBgColor }}
    >
      <UpPost />
      <PostList />
    </div>
  );
};

export default HomePage;
