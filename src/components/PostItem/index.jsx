import React, { useContext, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import { ThemeContext } from "../../contexts/ThemeContextProvider";
import CommentList from "../CommentList";
import "./PostItem.scss";

const PostItem = (props) => {
  const { post, handleUpdatePost, handleDeletePost } = props;

  // get theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  const postCmtBox = useRef(null);
  const postCmtInputRef = useRef(null);
  const otherCmtWayRef = useRef(null);

  const seeMoreRef = useRef(null);
  const checkboxReactRef = useRef(null);
  const themeCheckboxRef = useRef(null);

  const getQuantityOfReactions = () => {
    let total = 0;
    for (let key in post.reactions) {
      total += post.reactions[key];
    }
    return total;
  };

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
      if (postCmtInputRef.current.textContent.trim() === "") return;
      const textCmt = postCmtInputRef.current.innerHTML.trim();
      postCmtInputRef.current.innerHTML = "";
      handlePostCmtInputOnInput();

      const updatedPost = { ...post };
      const newCmt = {
        cmtID: uuidv4(),
        viewer: {
          ava: "./img/petsla.png",
          username: "Leo Asher",
        },
        commentContent: textCmt,
        publishedTime: Date.now(),
      };

      updatedPost.comments = [...updatedPost.comments, newCmt];

      handleUpdatePost(updatedPost);
    }
  };

  const handleLikeBtnClick = () => {
    const updatedPost = { ...post };

    if (updatedPost.isReacted) {
      updatedPost.isReacted = false;
      updatedPost.reactions.like -= 1;
      console.log("to false");
    } else {
      updatedPost.isReacted = true;
      updatedPost.reactions.like += 1;
    }

    handleUpdatePost(updatedPost);
  };

  const handleDeletePostOnClick = () => {
    handleDeletePost(post);
  };

  const handleSeeMoreBtnOnClick = () => {
    seeMoreRef.current.classList.toggle("active");
    seeMoreRef.current.focus();
  };

  const handleSeeMoreOnBlur = () => {
    console.log("blur");
    seeMoreRef.current.classList.remove("active");
  };

  useEffect(() => {
    themeCheckboxRef.current.checked = !isLightTheme;
  }, [isLightTheme]);

  useEffect(() => {
    checkboxReactRef.current.checked = post.isReacted;
  }, [post.isReacted]);

  return (
    <div
      className="post-item"
      style={{
        backgroundColor: style.topnavBgColor,
        color: style.color,
      }}
    >
      <input
        ref={themeCheckboxRef}
        type="checkbox"
        name="themeCheckbox"
        id="theme-checkbox"
        hidden
      />
      <div className="post-header">
        <div className="post-author">
          <a href="/" className="author-ava">
            <img src={post.author.ava} alt="" />
          </a>

          <div className="author-desc">
            <a href="/" className="author-name">
              {post.author.name}
            </a>
            <a href="/" className="post-published-time">
              {post.publishedTime}
            </a>
          </div>
        </div>

        <label
          className="post-see-more-btn"
          onClick={() => handleSeeMoreBtnOnClick()}
        >
          <div
            className="bg"
            style={{ backgroundColor: style.upPostInputBox }}
          ></div>
          <i className="fas fa-ellipsis-h"></i>
        </label>

        <div
          ref={seeMoreRef}
          className="post-see-more"
          style={{
            backgroundColor: style.topnavBgColor,
            borderColor: style.borderColor,
          }}
          tabIndex="-1"
          onBlur={() => handleSeeMoreOnBlur()}
        >
          <ul className="see-more__list">
            <li
              className="see-more-item"
              onClick={() => handleDeletePostOnClick()}
            >
              <div
                className="bg"
                style={{ backgroundColor: style.upPostInputBox }}
              ></div>
              <div className="see-more-item__wrap">
                <div className="icon">
                  <i
                    style={{
                      backgroundImage:
                        "url('https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/iA32q0CEate.png')",
                    }}
                  ></i>
                </div>
                <div className="content">
                  <div className="title">
                    <span>Move to trash</span>
                  </div>
                  <div className="desc">
                    <span>Item in your trash are deleted after 30 days.</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="post-body">
        {post.content.text !== "" ? (
          <div
            className="post-content-text"
            dangerouslySetInnerHTML={{ __html: post.content.text }}
          ></div>
        ) : (
          ""
        )}
        <div className="post-content-media">
          <img className="media" src={post.content.media} alt="" />
        </div>
      </div>

      <div className="post-footer">
        <div className="post-footer-heading">
          {getQuantityOfReactions() !== 0 ? (
            <div className="quantity-react quantity-of-reactions">
              <span>{getQuantityOfReactions()}</span>
              <span>Like</span>
            </div>
          ) : (
            ""
          )}
          {post.comments.length !== 0 ? (
            <div className="quantity-react quantity-of-comments">
              <span>{post.comments.length}</span>
              <span>Comments</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className="post-footer-btn__wrap"
          style={{ color: style.colorGray, borderColor: style.borderColor }}
        >
          <div className="like-btn__wrap btn__wrap-item">
            <div
              className="bg"
              style={{ backgroundColor: style.upPostInputBox }}
            ></div>
            <input
              hidden
              ref={checkboxReactRef}
              type="checkbox"
              name="isReacted"
              id="is-reacted-btn"
            />

            <label
              // htmlFor="is-reacted-btn"
              className="btn__sub-wrap-item"
              onClick={() => handleLikeBtnClick()}
            >
              <i></i>
              <span>Like</span>
            </label>
          </div>

          <div className="comment-btn__wrap btn__wrap-item">
            <div
              className="bg"
              style={{ backgroundColor: style.upPostInputBox }}
            ></div>
            <div
              className="btn__sub-wrap-item"
              onClick={() => {
                postCmtInputRef.current.focus();
              }}
            >
              <i></i>
              <span>Comment</span>
            </div>
          </div>

          <div className="share-btn__wrap btn__wrap-item">
            <div
              className="bg"
              style={{ backgroundColor: style.upPostInputBox }}
            ></div>
            <div className="btn__sub-wrap-item">
              <i></i>
              <span>Share</span>
            </div>
          </div>
        </div>

        <div className="comment-list__wrap">
          <CommentList comments={post.comments} style={style} />
        </div>

        <div className="post-footer-cmt__wrap">
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {};

export default PostItem;
