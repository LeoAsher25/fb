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

  const handlePostCmtInputOnKeyUp = () => {
    if (
      postCmtInputRef.current.offsetWidth >
      postCmtBox.current.offsetWidth - otherCmtWayRef.current.offsetWidth
    ) {
      postCmtInputRef.current.style.wordBreak = "break-all";
    } else {
      postCmtBox.current.style.display = "flex";
    }
  };

  const handleLikeBtnClick = () => {
    // const tmpPost = { ...post };
    // tmpPost.isReacted = !tmpPost.isReacted;
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

          <div className="post-cmt-box" ref={postCmtBox} action="">
            <div
              className="post-cmt-input"
              type="text"
              id="post-cmt-input"
              style={{ backgroundColor: style.bgColorGray }}
              onKeyUp={(e) => handlePostCmtInputOnKeyUp(e)}
            >
              <p
                ref={postCmtInputRef}
                contentEditable="true"
                data-text="Write a public comment..."
                className="cmt-text"
              ></p>
            </div>

            <ul
              ref={otherCmtWayRef}
              className="other-cmt-way"
              style={{ backgroundColor: style.bgColorGray }}
            >
              <li className="other-cmt-way-item">
                <i className="bi bi-camera"></i>
              </li>
              <li className="other-cmt-way-item">
                <i className="bi bi-camera"></i>
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
