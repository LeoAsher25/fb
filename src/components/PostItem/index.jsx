import React, { useContext, useRef } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import "./PostItem.scss";

const PostItem = (props) => {
  const { post } = props;

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

  const handleReactBtnOnMouseEnter = (e) => {
    const ReactBtnEle = e.target;
    ReactBtnEle.style.backgroundColor = style.bgColorGray;
  };

  const handleReactBtnOnMouseLeave = (e) => {
    const ReactBtnEle = e.target;
    ReactBtnEle.style.backgroundColor = "transparent";
  };

  const handleReactionBtnOnMouseDown = (e) => {};

  const handleReactionBtnOnMouseUp = (e) => {};

  const handlePostCmtInputOnKeyUp = (e) => {
    // console.log(e.target);
    if (
      postCmtInputRef.current.offsetWidth >
      postCmtBox.current.offsetWidth - otherCmtWayRef.current.offsetWidth
    ) { 
      postCmtInputRef.current.style.wordBreak = "break-all";
      console.log("wrap");
    } else {
      postCmtBox.current.style.display = "flex"; 
      console.log("no wrap");
    } 
  };

  return (
    <div
      className="post-item"
      style={{
        backgroundColor: style.topnavBgColor,
        color: style.color,
        // borderColor: style.bgColorGray,
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
          <div className="quantity-react quantity-of-reactions">
            <span>{getQuantityOfReactions()}</span>
            <span>Like</span>
          </div>
          <div className="quantity-react quantity-of-comments">
            <span>{post.comments.length}</span>
            <span>Comments</span>
          </div>
        </div>
        <div
          className="post-footer-btn__wrap"
          style={{ color: style.colorGray, borderColor: style.borderColor }}
        >
          <div
            className="like-btn__wrap btn__wrap-item"
            onMouseEnter={(e) => handleReactBtnOnMouseEnter(e)}
            onMouseLeave={(e) => handleReactBtnOnMouseLeave(e)}
            onMouseDown={(e) => handleReactionBtnOnMouseDown(e)}
            onMouseUp={(e) => handleReactionBtnOnMouseUp(e)}
          >
            {post.isReacted ? (
              <>
                <i
                  style={{ color: "#2078F4" }}
                  className="fas fa-thumbs-up"
                ></i>
                <span style={{ color: "#2078F4" }}>Like</span>
              </>
            ) : (
              <>
                <i className="far fa-thumbs-up"></i>
                <span>Like</span>
              </>
            )}
          </div>

          <div
            className="comment-btn__wrap btn__wrap-item"
            onMouseEnter={(e) => handleReactBtnOnMouseEnter(e)}
            onMouseLeave={(e) => handleReactBtnOnMouseLeave(e)}
          >
            <i className="far fa-comment-alt"></i>
            <span>Comment</span>
          </div>

          <div
            className="comment-btn__wrap btn__wrap-item"
            onMouseEnter={(e) => handleReactBtnOnMouseEnter(e)}
            onMouseLeave={(e) => handleReactBtnOnMouseLeave(e)}
          >
            <i className="fas fa-share"></i>
            <span>Share</span>
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
