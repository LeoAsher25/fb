import React, { useRef } from "react";
import moment from "moment";

import "./CommentList.scss";

const CommentList = (props) => {
  const { comments, style, handleUpdateCmt, calcTimeFormat } = props;

  const cmtSeeMoreIconRef = useRef(null);
  const seeMoreListRef = useRef([]);

  const handleCmtSeeMoreIconOnClick = (index) => {
    seeMoreListRef.current[index].classList.add("active");
    seeMoreListRef.current[index].focus();
  };

  const handleCmtSeeMoreListOnFocus = (index) => {
    seeMoreListRef.current[index].classList.remove("active");
  };

  const handleDeleteCmtOnClick = (index) => {
    const updatedCmts = [...comments];
    updatedCmts.splice(index, 1);
    handleUpdateCmt(updatedCmts);
    console.log("update");
  };
  console.log("test", comments);

  return (
    <div className="cmt-list">
      {comments.length > 0
        ? comments.map((comment, index) => (
            <div key={comment.cmtID} className="cmt-item">
              <div className="cmt__wrap">
                <div className="viewer-ava">
                  <img src={comment.viewer.ava} alt="" />
                </div>

                <div className="cmt-content">
                  <div className="cmt-content__wrap">
                    <div
                      className="cmt-content-text"
                      style={{
                        backgroundColor:
                          comment.commentContent.text === ""
                            ? "transparent"
                            : style.upPostInputBox,
                      }}
                    >
                      <div className="viewer-name">
                        <span>{comment.viewer.username}</span>
                      </div>
                      <div className="cmt-desc">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: comment.commentContent.text,
                          }}
                        ></span>
                      </div>
                    </div>

                    <div className="cmt-see-more">
                      <div
                        className="bg"
                        style={{ backgroundColor: style.upPostInputBox }}
                      ></div>
                      <div className="cmt-see-more__wrap">
                        <div
                          ref={cmtSeeMoreIconRef}
                          className="cmt-see-more-icon"
                          onClick={() => handleCmtSeeMoreIconOnClick(index)}
                        >
                          <i className="fas fa-ellipsis-h"></i>
                        </div>
                      </div>
                      <ul
                        ref={(eleRef) =>
                          (seeMoreListRef.current[index] = eleRef)
                        }
                        tabIndex="-1"
                        className="see-more-list"
                        style={{
                          backgroundColor: style.topnavBgColor,
                          borderColor: style.borderColor,
                        }}
                        onBlur={() => handleCmtSeeMoreListOnFocus(index)}
                      >
                        <li
                          className="see-more-item"
                          onClick={() => handleDeleteCmtOnClick(index)}
                        >
                          <div
                            className="bg"
                            style={{ backgroundColor: style.upPostInputBox }}
                          ></div>
                          <span>Delete</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {comment.commentContent.media.link !== "" ? (
                    <div
                      className="cmt-media"
                      style={{ backgroundColor: style.topnavBgColor }}
                    >
                      {comment.commentContent.media.type.startsWith(
                        "image/"
                      ) ? (
                        <img src={comment.commentContent.media.link} alt="" />
                      ) : (
                        <video width="100%" controls>
                          <source
                            src={comment.commentContent.media.link}
                            type="video/mp4"
                          />
                        </video>
                      )}
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="cmt-react">
                    <div className="cmt-react-item cmt-reaction">
                      <span>Like</span>
                    </div>
                    <div className="cmt-react-separate">
                      <i className="bi bi-dot"></i>
                    </div>
                    <div className="cmt-react-item cmt-reply">
                      <span>Reply</span>
                    </div>
                    <div className="cmt-react-separate">
                      <i className="bi bi-dot"></i>
                    </div>
                    <div className="cmt-react-item cmt-published-time">
                      <span>
                        {/* {calcTimeFormat(comment.publishedTime, Date.now())} */}
                        {moment.unix(comment.publishedTime / 1000).fromNow()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default CommentList;
