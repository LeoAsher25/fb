import React, { useContext, useRef } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import "./UpPost.scss";

const UpPost = () => {
  // declear theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  const UpPostHeader = useRef(null);

  const handleOnMouseEnter = (e) => {
    const UpPostFooterItemEle = e.target;
    UpPostFooterItemEle.style.backgroundColor = style.bgColorGray;
  };

  const handleOnMouseLeave = (e) => {
    const UpPostFooterItemEle = e.target;
    UpPostFooterItemEle.style.backgroundColor = "unset";
  };

  return (
    <div
      className="up-post"
      style={{ backgroundColor: style.topnavBgColor, color: style.colorGray }}
    >
      <div className="up-post__wrap">
        <div className="up-post__header" ref={UpPostHeader}>
          <a href="/" className="ava">
            <img src="./img/petsla.png" alt="" />
          </a>

          <div
            className="input-box"
            style={{
              backgroundColor: style.upPostInputBox,
            }}
          >
            <span>What's on your mind, bro?</span>
          </div>
        </div>
        <div
          className="up-post-seperate"
          style={{ backgroundColor: style.borderColor }}
        ></div>
        <div className="up-post__footer">
          <div
            className="up-post__footer-item"
            onMouseEnter={(e) => handleOnMouseEnter(e)}
            onMouseLeave={(e) => handleOnMouseLeave(e)}
          >
            <div className="up-post__footer-item__img"></div>
            <span className="up-post__footer-item__text">Photo/Video</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpPost;
