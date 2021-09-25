// import library
import React, { useContext } from "react";

// import conetxt
import SideBarContextProvider from "../../contexts/SideBarContextProvider";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

// import componet
import PostList from "../PostList";
import SideBarLeft from "../SideBarLeft";
import UpPost from "../UpPost";

import "./HomePage.scss";

const HomePage = () => {
  // declear theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  return (
    <div className="home-page" style={{ backgroundColor: style.bodyBgColor }}>
      {isLightTheme ? (
        <input
          type="checkbox"
          name="lightThemeCheckbox"
          id=""
          defaultChecked
          hidden
        />
      ) : (
        <input
          type="checkbox"
          name="darkThemeCheckbox"
          id=""
          defaultChecked
          hidden
        />
      )}

      <div className="sidebar sidebar-left__wrap">
        <SideBarContextProvider>
          <SideBarLeft />
        </SideBarContextProvider>
      </div>

      <div className="body">
        <div className="body-content">
          <UpPost />
          <PostList />
        </div>
      </div>

      <div className="sidebar sidebar-right__wrap">fsfjasfafkjaslj</div>
    </div>
  );
};

export default HomePage;
