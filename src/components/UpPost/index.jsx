import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import UpPostModal from "../UpPostModal";
import "./UpPost.scss";

const UpPost = () => {
  // declear theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  const UpPostHeader = useRef(null);

  const [upPostModalIsOpen, setUpPostModalIsOpen] = useState(false);

  return (
    <div
      className="up-post"
      style={{ backgroundColor: style.topnavBgColor, color: style.colorGray }}
    >
      {upPostModalIsOpen ? (
        <>
          <div
            className="overlay"
            onClick={() => {
              setUpPostModalIsOpen(false);
            }}
          ></div>
          <UpPostModal setUpPostModalIsOpen={setUpPostModalIsOpen} />
        </>
      ) : (
        ""
      )}
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
            onClick={() => setUpPostModalIsOpen(true)}
          >
            <span>What's on your mind, bro?</span>
          </div>
        </div>
        <div
          className="up-post-seperate"
          style={{ backgroundColor: style.borderColor }}
        ></div>
        <div className="up-post__footer">
          <div className="up-post__footer-item">
            <div
              className="bg"
              style={{ backgroundColor: style.upPostInputBox }}
            ></div>
            <div className="up-post__footer-item__img"></div>
            <span className="up-post__footer-item__text">Live Video</span>
          </div>

          <div className="up-post__footer-item">
            <div
              className="bg"
              style={{ backgroundColor: style.upPostInputBox }}
            ></div>
            <div className="up-post__footer-item__img"></div>
            <span className="up-post__footer-item__text">Photo/Video</span>
          </div>

          <div className="up-post__footer-item">
            <div
              className="bg"
              style={{ backgroundColor: style.upPostInputBox }}
            ></div>
            <div className="up-post__footer-item__img"></div>
            <span className="up-post__footer-item__text">Feeling/Activity</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpPost;
