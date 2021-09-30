import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./CmtInputBox.scss";

const CmtInputWrap = (props) => {
  const { post, handleUpdatePost, style } = props;

  const postCmtBox = useRef(null);
  const otherCmtWayRef = useRef(null);
  const postCmtInputRef = useRef(null);

  const handlePostCmtInputOnInput = () => {
    if (postCmtInputRef.current.offsetHeight <= 20) {
      postCmtBox.current.classList.remove("active");
    }
    if (postCmtInputRef.current.offsetHeight > 20) {
      postCmtBox.current.classList.add("active");
    }
  };

  const handlePostCmtInputOnKeyDown = (e) => {
    if (!e.shiftKey && e.keyCode === 13) {
      e.preventDefault();
      if (
        postCmtInputRef.current.textContent.trim() === "" &&
        profileImg.trim() === ""
      )
        return;
      const textCmt = postCmtInputRef.current.innerHTML.trim();
      postCmtInputRef.current.innerHTML = "";
      const mediaCmt = profileImg.trim();
      setProfileImg("");
      handlePostCmtInputOnInput();

      const updatedPost = { ...post };
      const newCmt = {
        cmtID: uuidv4(),
        viewer: {
          ava: "./img/petsla.png",
          username: "Leo Asher",
        },
        commentContent: {
          text: textCmt,
          media: mediaCmt,
        },
        publishedTime: Date.now(),
      };

      updatedPost.comments = [...updatedPost.comments, newCmt];

      handleUpdatePost(updatedPost);
    }
  };

  const [profileImg, setProfileImg] = useState("");

  const handleUploadImg = (e) => {
    setProfileImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="cmt-input-wrap">
      <div className="post-cmt-wrap">
        <label htmlFor="post-cmt-input" className="user-cmt">
          <img src={post.user.ava} alt="" />
        </label>

        <div
          className="post-cmt-box"
          ref={postCmtBox}
          style={{ backgroundColor: style.upPostInputBox }}
          onClick={() => postCmtInputRef.current.focus()}
        >
          <label
            onClick={() => postCmtInputRef.current.focus()}
            className="post-cmt-input"
            id="post-cmt-input"
          >
            <p
              ref={postCmtInputRef}
              className="cmt-text"
              contentEditable="true"
              data-text="Write a public comment..."
              onInput={(e) => handlePostCmtInputOnInput(e)}
              onKeyDown={(e) => handlePostCmtInputOnKeyDown(e)}
            ></p>
          </label>

          <ul ref={otherCmtWayRef} className="other-cmt-way">
            <li className="other-cmt-way-item">
              <input
                type="file"
                multiple
                // accept="image/*"
                name="image-upload"
                id="cmt-by-img"
                onChange={(e) => handleUploadImg(e)}
                hidden
              />
              <label htmlFor="cmt-by-img">
                <div
                  className="bg"
                  style={{ backgroundColor: style.borderColor }}
                ></div>
                <i
                  style={{
                    backgroundImage:
                      "url('https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/Y_WzR6jNFzU.png')",
                    backgroundPosition: "0 -387px",
                  }}
                ></i>
                <div
                  className="title"
                  style={{
                    backgroundColor: style.color,
                    color: style.bodyBgColor,
                  }}
                >
                  Attach a photo or video
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>

      {profileImg.trim() !== "" ? (
        <div className="preview-img-wrap">
          <div className="preview-img">
            <img src={profileImg} alt="" />
          </div>

          <div className="preview-close" onClick={() => setProfileImg("")}>
            <div
              className="bg"
              style={{ backgroundColor: style.upPostInputBox }}
            ></div>
            <i className="bi bi-x-lg"></i>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CmtInputWrap;
