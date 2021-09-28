import React, { useContext, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import "./PostItem.scss";

const PostItem = (props) => {
  const { post, handleUpdatePost } = props;

  // get theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  const postCmtBox = useRef(null);
  const postCmtInputRef = useRef(null);
  const otherCmtWayRef = useRef(null);

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

  const handleLikeBtnClick = () => {
    handleUpdatePost(post);
  };

  const checkboxReactRef = useRef(null);
  const themeCheckboxRef = useRef(null);

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

        <div className="post-header-3dots">
          <div
            className="bg"
            style={{ backgroundColor: style.upPostInputBox }}
          ></div>
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>

      <div className="post-body">
        <div className="post-content-text">{post.content.text}</div>
        <div className="post-content-media">
          <img className="media" src={post.content.media} alt="" />
        </div>
      </div>

      <div className="post-footer">
        <div className="post-footer-heading">
          {getQuantityOfReactions() != 0 ? (
            <div className="quantity-react quantity-of-reactions">
              <span>{getQuantityOfReactions()}</span>
              <span>Like</span>
            </div>
          ) : (
            ""
          )}
          <div className="quantity-react quantity-of-comments">
            <span>{post.comments.length}</span>
            <span>Comments</span>
          </div>
        </div>
        <div
          className="post-footer-btn__wrap"
          style={{ color: style.colorGray, borderColor: style.borderColor }}
        >
          <input
            ref={themeCheckboxRef}
            type="checkbox"
            name="themeCheckbox"
            id="theme-checkbox"
            hidden
          />
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
            <div className="btn__sub-wrap-item">
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
                onInput={() => handlePostCmtInputOnInput()}
              ></p>
            </label>

            <ul ref={otherCmtWayRef} className="other-cmt-way">
              <li className="other-cmt-way-item">
                <div
                  className="bg"
                  style={{ backgroundColor: style.borderColor }}
                ></div>
                <i className="bi bi-camera"></i>
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
