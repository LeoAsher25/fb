import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import HotkeyItem from "../../components/HotkeyItem";
import SearchHistoryList from "../../partials/SearchHistoryList";

// import scss
import "./TopNav.scss";

const TopNav = () => {
  // declear theme context
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  const searchHistoruOverlay = useRef(null);
  const topNavSearchRef = useRef(null);
  const logoBrandRef = useRef(null);

  const handleSearchInputOnClick = () => {
    searchHistoruOverlay.current.classList.add("active");
    topNavSearchRef.current.classList.add("active");
    logoBrandRef.current.classList.add("active");
  };

  const hanleSearchHistoruOverlay = () => {
    searchHistoruOverlay.current.classList.remove("active");
    topNavSearchRef.current.classList.remove("active");
    logoBrandRef.current.classList.remove("active");
  };

  const handleToggleTheme = () => {
    toggleTheme();
  };

  const hotkeyList = [
    {
      id: 1,
      iconR: (
        <svg
          fill={style.color}
          viewBox="0 0 28 28"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv"
          height="28"
          width="28"
        >
          <path d="M17.5 23.979 21.25 23.979C21.386 23.979 21.5 23.864 21.5 23.729L21.5 13.979C21.5 13.427 21.949 12.979 22.5 12.979L24.33 12.979 14.017 4.046 3.672 12.979 5.5 12.979C6.052 12.979 6.5 13.427 6.5 13.979L6.5 23.729C6.5 23.864 6.615 23.979 6.75 23.979L10.5 23.979 10.5 17.729C10.5 17.04 11.061 16.479 11.75 16.479L16.25 16.479C16.939 16.479 17.5 17.04 17.5 17.729L17.5 23.979ZM21.25 25.479 17 25.479C16.448 25.479 16 25.031 16 24.479L16 18.327C16 18.135 15.844 17.979 15.652 17.979L12.348 17.979C12.156 17.979 12 18.135 12 18.327L12 24.479C12 25.031 11.552 25.479 11 25.479L6.75 25.479C5.784 25.479 5 24.695 5 23.729L5 14.479 3.069 14.479C2.567 14.479 2.079 14.215 1.868 13.759 1.63 13.245 1.757 12.658 2.175 12.29L13.001 2.912C13.248 2.675 13.608 2.527 13.989 2.521 14.392 2.527 14.753 2.675 15.027 2.937L25.821 12.286C25.823 12.288 25.824 12.289 25.825 12.29 26.244 12.658 26.371 13.245 26.133 13.759 25.921 14.215 25.434 14.479 24.931 14.479L23 14.479 23 23.729C23 24.695 22.217 25.479 21.25 25.479Z"></path>
        </svg>
      ),
      iconS: (
        <svg
          fill="#2D88FF"
          viewBox="0 0 28 28"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 aaxa7vy3"
          height="28"
          width="28"
        >
          <path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path>
        </svg>
      ),
      title: `Home`,
      linkTo: "/",
    },
    {
      id: 2,
      iconR: (
        <svg
          fill={style.color}
          viewBox="0 0 28 28"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv"
          height="28"
          width="28"
        >
          <path d="M10.5 4.5c-2.272 0-2.75 1.768-2.75 3.25C7.75 9.542 8.983 11 10.5 11s2.75-1.458 2.75-3.25c0-1.482-.478-3.25-2.75-3.25zm0 8c-2.344 0-4.25-2.131-4.25-4.75C6.25 4.776 7.839 3 10.5 3s4.25 1.776 4.25 4.75c0 2.619-1.906 4.75-4.25 4.75zm9.5-6c-1.41 0-2.125.841-2.125 2.5 0 1.378.953 2.5 2.125 2.5 1.172 0 2.125-1.122 2.125-2.5 0-1.659-.715-2.5-2.125-2.5zm0 6.5c-1.999 0-3.625-1.794-3.625-4 0-2.467 1.389-4 3.625-4 2.236 0 3.625 1.533 3.625 4 0 2.206-1.626 4-3.625 4zm4.622 8a.887.887 0 00.878-.894c0-2.54-2.043-4.606-4.555-4.606h-1.86c-.643 0-1.265.148-1.844.413a6.226 6.226 0 011.76 4.336V21h5.621zm-7.122.562v-1.313a4.755 4.755 0 00-4.749-4.749H8.25A4.755 4.755 0 003.5 20.249v1.313c0 .518.421.938.937.938h12.125c.517 0 .938-.42.938-.938zM20.945 14C24.285 14 27 16.739 27 20.106a2.388 2.388 0 01-2.378 2.394h-5.81a2.44 2.44 0 01-2.25 1.5H4.437A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.25 14h4.501a6.2 6.2 0 013.218.902A5.932 5.932 0 0119.084 14h1.861z"></path>
        </svg>
      ),
      iconS: (
        <svg
          fill="#2D88FF"
          viewBox="0 0 28 28"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 aaxa7vy3"
          height="28"
          width="28"
        >
          <path d="M20.34 22.428c.077-.455.16-1.181.16-2.18 0-1.998-.84-3.981-2.12-5.41-.292-.326-.077-.838.36-.838h2.205C24.284 14 27 16.91 27 20.489c0 1.385-1.066 2.51-2.378 2.51h-3.786a.496.496 0 01-.495-.571zM20 13c-1.93 0-3.5-1.794-3.5-4 0-2.467 1.341-4 3.5-4s3.5 1.533 3.5 4c0 2.206-1.57 4-3.5 4zm-9.5-1c-2.206 0-4-2.019-4-4.5 0-2.818 1.495-4.5 4-4.5s4 1.682 4 4.5c0 2.481-1.794 4.5-4 4.5zm2.251 2A6.256 6.256 0 0119 20.249v1.313A2.44 2.44 0 0116.563 24H4.438A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.249 14h4.502z"></path>
        </svg>
      ),
      title: `Friends`,
      linkTo: "/friends",
    },
    {
      id: 3,
      iconR: (
        <svg
          fill={style.color}
          viewBox="0 0 28 28"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv"
          height="28"
          width="28"
        >
          <path d="M5.75 4A.75.75 0 015 3.25v-1a.75.75 0 011.5 0v1a.75.75 0 01-.75.75zm.75 11.251a.75.75 0 01-1.5 0V8.749a.75.75 0 011.5 0v6.502zM5.75 28a.75.75 0 01-.75-.75v-6.5a.75.75 0 011.5 0v6.5a.75.75 0 01-.75.75zm15.737-16.234L23.214 6.5H9.5v11h13.715l-1.728-5.266a.749.749 0 010-.468zM4.75 5h19.5a.75.75 0 01.713.986l-1.974 6.006 1.974 6.023a.75.75 0 01-.713.985H4.75a.75.75 0 010-1.502L8 17.5v-11H4.75a.749.749 0 110-1.5z"></path>
        </svg>
      ),
      iconS: (
        <svg
          fill="#2D88FF"
          viewBox="0 0 28 28"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 aaxa7vy3"
          height="28"
          width="28"
        >
          <path d="M5 3.25v-1a.75.75 0 011.5 0v1a.75.75 0 01-1.5 0zm1.5 12.001a.75.75 0 01-1.5 0V8.749a.75.75 0 011.5 0v6.502zM5.75 20a.75.75 0 01.75.75v6.5a.75.75 0 01-1.5 0v-6.5a.75.75 0 01.75-.75zM24.857 5.328a.745.745 0 01.105.674L22.99 12l1.973 6.015a.75.75 0 01-.712.984H4.75a.75.75 0 010-1.5H7.5A.5.5 0 008 17V7.018a.5.5 0 00-.5-.5H4.75a.75.75 0 01-.003-1.5l4-.018c.078.01.11.006.164.018h15.34a.75.75 0 01.606.31z"></path>
        </svg>
      ),
      title: `Pages`,
      linkTo: "/pages",
    },
    {
      id: 4,
      iconR: (
        <svg
          fill={style.color}
          viewBox="0 0 28 28"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv"
          height="28"
          width="28"
        >
          <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"></path>
        </svg>
      ),
      iconS: (
        <svg
          fill="#2D88FF"
          viewBox="0 0 28 28"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 aaxa7vy3"
          height="28"
          width="28"
        >
          <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.164 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.164 11.654C17.612 11.924 17.612 12.575 17.164 12.846M21.75 2.75 6.25 2.75C4.182 2.75 2.5 4.432 2.5 6.5L2.5 18C2.5 20.068 4.182 21.75 6.25 21.75L21.75 21.75C23.818 21.75 25.5 20.068 25.5 18L25.5 6.5C25.5 4.432 23.818 2.75 21.75 2.75"></path>
        </svg>
      ),
      title: `Watch`,
      linkTo: "/Watch",
    },
    {
      id: 5,
      iconR: (
        <svg
          fill={style.color}
          viewBox="0 0 28 28"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv"
          height="28"
          width="28"
        >
          <path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path>
        </svg>
      ),
      iconS: (
        <svg
          fill="#2D88FF"
          viewBox="0 0 28 28"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 aaxa7vy3"
          height="28"
          width="28"
        >
          <path d="M21.877 19 21.364 19C21.139 19 20.971 18.802 20.996 18.577 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.066 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.877 19ZM17.75 10.75C17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13 18.647 13 17.75 11.991 17.75 10.75ZM19.5 18.221C19.5 19.202 18.682 20 17.678 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.442 13.5 12.828 13.5L15.173 13.5C17.559 13.5 19.5 15.395 19.5 17.724L19.5 18.221ZM6.25 10.75C6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13 7.147 13 6.25 11.991 6.25 10.75ZM7.934 14.591C7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.991 18.461 7.004 18.577 7.03 18.802 6.861 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14L7.631 14C7.933 14 8.102 14.338 7.934 14.591ZM14 6C15.697 6 16.75 7.15 16.75 9 16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6ZM14 1C6.832 1 1 6.832 1 14 1 21.169 6.832 27 14 27 21.169 27 27 21.169 27 14 27 6.832 21.169 1 14 1Z"></path>
        </svg>
      ),
      title: `Groups`,
      linkTo: "/groups",
    },
    {
      id: 6,
      iconR: (
        <svg
          fill={style.color}
          viewBox="0 0 28 28"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv"
          height="28"
          width="28"
        >
          <path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path>
        </svg>
      ),
      iconS: (
        <svg
          fill="#2D88FF"
          viewBox="0 0 28 28"
          className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv"
          height="28"
          width="28"
        >
          <path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z"></path>
        </svg>
      ),
      title: `More`,
      linkTo: "/bookmarks",
    },
  ];

  return (
    <div
      className="top-nav"
      style={{ backgroundColor: style.topnavBgColor, color: style.color }}
    >
      <div className="top-nav__wrap" style={{ borderColor: style.bgColorGray }}>
        <div
          ref={searchHistoruOverlay}
          className="search-history-overlay"
          onClick={() => hanleSearchHistoruOverlay()}
        ></div>

        <div
          ref={logoBrandRef}
          className="branch__wrap"
          style={{ backgroundColor: style.topnavBgColor }}
        >
          <Link to="/" className="branch img__wrap">
            <img src="./img/fbLogo.png" alt="" />
          </Link>

          <div className="top-nav-search__header">
            <div
              // ref={outFocusInputRef}
              className="out-focus-input-btn"
              onClick={() => hanleSearchHistoruOverlay()}
            >
              <div
                className="bg"
                style={{ backgroundColor: style.upPostInputBox }}
              ></div>
              <i className="fas fa-arrow-left"></i>
            </div>

            <label
              htmlFor="top-nav-search-input"
              className="top-nav-search"
              style={{ backgroundColor: style.upPostInputBox }}
              onClick={() => handleSearchInputOnClick()}
            >
              <input
                type="text"
                id="top-nav-search-input"
                placeholder="Search Facebook"
              />
              <div className="search-icon">
                <i style={{ color: style.color }} className="bi bi-search"></i>
              </div>
            </label>
          </div>
        </div>

        <div
          ref={topNavSearchRef}
          className="top-nav-search__wrap"
          style={{ backgroundColor: style.topnavBgColor }}
        >
          <div className="search-history__wrap">
            <div className="search-history__header">
              <div className="search-history-title">
                <span>Recent Searches</span>
              </div>
              <div className="search-history-edit-btn">
                <div
                  className="bg"
                  style={{ backgroundColor: style.upPostInputBox }}
                ></div>
                <span>Edit</span>
              </div>
            </div>

            <SearchHistoryList style={style} isLightTheme={isLightTheme} />
          </div>
        </div>

        <div className="hotkeys-bar">
          <ul className="hotkeys-list">
            {hotkeyList.map((hotkey, index) => (
              <HotkeyItem
                key={hotkey.id}
                hotkey={hotkey}
                style={style}
                hotkeyIndex={index}
              />
            ))}
          </ul>
        </div>

        <div className="top-nav-btn__wrap">
          <div className="user-btn">
            <div
              className="bg-overlay"
              style={{ backgroundColor: style.upPostInputBox }}
            ></div>
            <Link to="/user" className="top-nav-user">
              {/* <a href="/" className="top-nav-user"> */}
              <div className="user-ava img__wrap">
                <img className="user-ava-img" src="./img/petsla.png" alt="" />
              </div>
              <div className="user-name">Leo</div>
              {/* </a> */}
            </Link>
          </div>

          <div className="btn-item toggle-theme-btn">
            <div
              style={{ backgroundColor: style.bgColorGray }}
              className="btn-item__wrap"
              onClick={() => handleToggleTheme()}
            >
              <i className="bi bi-moon-fill" style={{ color: style.color }}></i>
            </div>
            <div
              className="btn-item-title"
              style={{
                backgroundColor: style.color,
                color: style.bodyBgColor,
              }}
            >
              Toggle Theme
            </div>
          </div>

          <div className="btn-item mesenger-btn">
            <div
              style={{ backgroundColor: style.bgColorGray }}
              className="btn-item__wrap"
            >
              <i className="bi bi-messenger" style={{ color: style.color }}></i>
            </div>
            <div
              className="btn-item-title"
              style={{
                backgroundColor: style.color,
                color: style.bodyBgColor,
              }}
            >
              Messages
            </div>
          </div>

          <div className="btn-item notice-btn">
            <div
              style={{ backgroundColor: style.bgColorGray }}
              className="btn-item__wrap"
            >
              <i className="bi bi-bell-fill" style={{ color: style.color }}></i>
            </div>
            <div
              className="btn-item-title"
              style={{
                backgroundColor: style.color,
                color: style.bodyBgColor,
              }}
            >
              Notifications
            </div>
          </div>

          <div className="btn-item down-btn">
            <div
              style={{ backgroundColor: style.bgColorGray }}
              className="btn-item__wrap"
            >
              <i
                className="bi bi-caret-down-fill"
                style={{ color: style.color }}
              ></i>
            </div>
            <div
              className="btn-item-title"
              style={{
                backgroundColor: style.color,
                color: style.bodyBgColor,
              }}
            >
              Account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
