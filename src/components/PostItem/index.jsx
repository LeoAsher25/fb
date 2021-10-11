import React, { useContext, useEffect, useRef, useState } from "react";

import moment from "moment";

import { ThemeContext } from "../../contexts/ThemeContextProvider";
import CmtInputWrap from "../CmtInputWrap";
import CommentList from "../CommentList";
import "./PostItem.scss";

const PostItem = (props) => {
  const { post, handleUpdatePost, handleDeletePost, calcTimeFormat } = props;

  // console.log("utc", moment().utc(), moment([2021, 10, 11]).toNow());
  // console.log("publish", moment.unix(post.publishedTime / 1000).toNow());

  // get theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  const seeMoreRef = useRef(null);
  const checkboxReactRef = useRef(null);
  const themeCheckboxRef = useRef(null);

  const [postCmtInputIsFocus, setPostCmtInputIsFocus] = useState(false);

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
            <a
              href="/"
              className="post-published-time"
              style={{ color: style.colorGray }}
            >
              {/* {post.publishedTime} */}
              {/* {calcTimeFormat(post.publishedTime, Date.now())} */}
              {moment.unix(post.publishedTime / 1000).fromNow()}
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
        {post.content.media.link !== "" ? (
          <div className="post-content-media">
            {post.content.media.type.startsWith("image/") ? (
              <img className="media" src={post.content.media.link} alt="" />
            ) : (
              <video width="100%" controls>
                <source src={post.content.media.link} type="video/mp4" />
              </video>
            )}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="post-footer">
        <div className="post-footer-heading">
          {getQuantityOfReactions() !== 0 ? (
            <div className="quantity-react quantity-of-reactions">
              <span>{getQuantityOfReactions()}</span>
              {/* <img src="./img/like.png" alt="Like" /> */}

              <svg
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-9.31019674359186 -9.31019674359186 200.60019674359185 200.59919674359185"
              >
                <linearGradient
                  id="a"
                  x1="47.061%"
                  x2="47.061%"
                  y1="-3.394%"
                  y2="96.606%"
                >
                  <stop offset="0" stopColor="#37aeff" />
                  <stop offset=".05" stopColor="#37aeff" />
                  <stop offset="1" stopColor="#1861f7" />
                </linearGradient>
                <g fill="none">
                  <path
                    d="M0 95.645c0 52.823 42.822 95.644 95.645 95.644 52.823 0 95.644-42.821 95.644-95.644C191.29 42.822 148.468 0 95.645 0A95.617 95.617 0 0 0 0 95.645"
                    fill="url(#a)"
                  />
                  <path
                    d="M151.421 99.986a9.095 9.095 0 0 0-3.901-8.737 18.08 18.08 0 0 0 3.6-8.628c0-8.463-7.941-10.99-20.168-10.99-7.27.08-14.51.936-21.597 2.555.66-3.627 5.496-14.15 5.496-17.667 0-7.31-1.731-16.486-8.436-19.976a11.925 11.925 0 0 0-6.154-1.593c-2.68-.126-5.303.8-7.309 2.583a6.32 6.32 0 0 0-.742 3.681l1.21 13.738c0 10.99-16.899 24.729-16.899 40.528v33.136c0 5.88 7.886 10.056 19.234 10.056h31.46c8.243 0 10.084-1.428 12.2-5.275a7.583 7.583 0 0 0-.166-8.023 12.364 12.364 0 0 0 7.749-8.93c.487-2.412.118-4.92-1.044-7.089a9.48 9.48 0 0 0 5.495-9.369M48.743 80.945h9.836a8.243 8.243 0 0 1 8.243 8.243V135.1a8.243 8.243 0 0 1-8.243 8.242h-9.836a8.243 8.243 0 0 1-8.243-8.242V89.298a8.243 8.243 0 0 1 8.243-8.243"
                    fill="#fff"
                  />
                </g>
              </svg>
              {/* <span>Like</span> */}
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
                setPostCmtInputIsFocus(true);
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
            postCmtInputIsFocus={postCmtInputIsFocus}
            setPostCmtInputIsFocus={setPostCmtInputIsFocus}
            handleUpdatePost={handleUpdatePost}
          />
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {};

export default PostItem;
