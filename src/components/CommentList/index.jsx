import React from "react";
import "./CommentList.scss";

const CommentList = (props) => {
  const { comments, style } = props;

  return (
    <div className="cmt-list">
      {comments.length > 0
        ? comments.map((comment) => (
            <div key={comment.cmtID} className="cmt-item">
              <div className="cmt__wrap">
                <div className="viewer-ava">
                  <img src={comment.viewer.ava} alt="" />
                </div>

                <div className="cmt-text">
                  <div className="cmt-content__wrap">
                    <div
                      className="cmt-content"
                      style={{ backgroundColor: style.upPostInputBox }}
                    >
                      <div className="viewer-name">
                        <span>{comment.viewer.username}</span>
                      </div>
                      <div className="cmt-desc">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: comment.commentContent,
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
                        <div className="cmt-see-more-icon">
                          <i className="fas fa-ellipsis-h"></i>
                        </div>
                      </div>
                      <ul
                        className="see-more-list"
                        style={{
                          backgroundColor: style.topnavBgColor,
                          borderColor: style.borderColor,
                        }}
                      >
                        <li className="see-more-item">
                          <div
                            className="bg"
                            style={{ backgroundColor: style.upPostInputBox }}
                          ></div>
                          <span>Delete</span>
                        </li>
                      </ul>
                    </div>
                  </div>

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
                      <span>{comment.publishedTime}</span>
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
