import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

// import scss
import "./TopNav.scss";

const TopNav = () => {
  // declear theme context
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  const handleToggleTheme = () => {
    toggleTheme();
    console.log("toggle");
  };

  return (
    <div
      className="top-nav"
      style={{ backgroundColor: style.topnavBgColor, color: style.color }}
    >
      <div className="top-nav__wrap">
        <a href="/" className="branch img__wrap">
          <img src="./img/fbLogo.png" alt="" />
        </a>

        <a href="/" className="top-nav-user">
          <div className="user-ava img__wrap">
            <img className="user-ava-img" src="./img/petsla.png" alt="" />
          </div>
          <div className="user-name">Leo Asher</div>
        </a>

        <div className="top-nav-btn__wrap">
          <div
            style={{ backgroundColor: style.bgColorGray }}
            className="btn-item toggle-theme-btn"
            onClick={() => handleToggleTheme()}
          >
            <i className="bi bi-moon-fill" style={{ color: style.color }}></i>
          </div>
          <div
            style={{ backgroundColor: style.bgColorGray }}
            className="btn-item mesenger-btn"
          >
            <i className="bi bi-messenger" style={{ color: style.color }}></i>
          </div>
          <div
            style={{ backgroundColor: style.bgColorGray }}
            className="btn-item notice-btn"
          >
            <i className="bi bi-bell-fill" style={{ color: style.color }}></i>
          </div>
          <div
            style={{ backgroundColor: style.bgColorGray }}
            className="btn-item down-btn"
          >
            <i
              className="bi bi-caret-down-fill"
              style={{ color: style.color }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
