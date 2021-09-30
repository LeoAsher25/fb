import React, { useContext, useEffect, useRef } from "react";

import { ThemeContext } from "../../contexts/ThemeContextProvider";
import CmtInputWrap from "../CmtInputBox";
import CommentList from "../CommentList";
import "./PostItem.scss";

const PostItem = (props) => {
  const { post, handleUpdatePost, handleDeletePost, calcTimeFormat } = props;

  // get theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

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
    seeMoreRef.current.classList.remove("active");
  };

  const handleUpdateCmt = (cmtList) => {
    const updatedPost = { ...post };
    updatedPost.comments = cmtList;
    handleUpdatePost(updatedPost);
    console.log("add");
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
              {/* {post.publishedTime} */}
              {calcTimeFormat(post.publishedTime, Date.now())}
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
                // postCmtInputRef.current.focus();
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
          <CommentList
            comments={post.comments}
            style={style}
            handleUpdateCmt={handleUpdateCmt}
            calcTimeFormat={calcTimeFormat}
          />
        </div>

        <div className="post-footer-cmt__wrap">
          <CmtInputWrap
            post={post}
            style={style}
            handleUpdatePost={handleUpdatePost}
          />
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {};

export default PostItem;
