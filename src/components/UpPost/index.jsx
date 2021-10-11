import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import UpPostModal from "../UpPostModal";
import "./UpPost.scss";

const UpPost = () => {
  // declear theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  const UpPostHeader = useRef(null);
  const upPostInputRef = useRef(null);

  const [upPostModalIsOpen, setUpPostModalIsOpen] = useState(false);
  const [upMediaIsTrue, setUpMediaIsTrue] = useState(false);
  const [tempPost, setTempPost] = useState({
    author: {
      ava: "./img/petsla.png",
      name: "Leo Asher",
    },
    publishedTime: Date.now(),
    content: {
      text: "",
      media: "",
    },
    user: {
      ava: "./img/petsla.png",
      username: "Leo Asher",
    },
    isReacted: false,
    reactions: {
      like: 0,
    },
    comments: [],
  });

  const handleUpImgOnClick = () => {
    setUpPostModalIsOpen(true);
    setUpMediaIsTrue(true);
  };

  useEffect(() => {
    if (tempPost.content.text !== "") {
      // let tmpText = tempPost.content.text.replace(/<br>/g, "&nbsp;");
      // console.log("text ", tmpText);
      // upPostInputRef.current.innerHTML = tmpText;
    }
  }, [tempPost]);

  return (
    <div
      className="up-post"
      style={{ backgroundColor: style.topnavBgColor, color: style.colorGray }}
    >
      {upPostModalIsOpen ? (
        <>
          <UpPostModal
            setUpPostModalIsOpen={setUpPostModalIsOpen}
            tempPost={tempPost}
            upMediaIsTrue={upMediaIsTrue}
            setUpMediaIsTrue={setUpMediaIsTrue}
            setTempPost={setTempPost}
          />
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
            <span ref={upPostInputRef}>What's on your mind, bro?</span>
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

          <div
            className="up-post__footer-item"
            onClick={() => handleUpImgOnClick()}
          >
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
