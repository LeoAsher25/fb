import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import "./PostItem.scss";

const PostItem = (props) => {
  const { post } = props;

  // get theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  const getQuantityOfReactions = () => {
    let total = 0;
    for (let key in post.reactions) {
      total += post.reactions[key];
    }
    return total;
  };

  return (
    <div
      className="post-item"
      style={{
        backgroundColor: style.topnavBgColor,
        color: style.color,
        borderColor: style.bgColorGray,
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
            <a href className="post-published-time">
              {post.publishedTime}
            </a>
          </div>
        </div>

        <div className="post-header-3dots">
          <i class="fas fa-ellipsis-h"></i>
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
      </div>
    </div>
  );
};

PostItem.propTypes = {};

export default PostItem;
/*
  {
    author: {
      ava: "./img/petsla.png",
      name: "Leo Asher",
    },
    publishedTime: "21h",
    content: {
      text: "Bấm vào link https://www.facebook.com/petsla.vn để nhận quà nè <3",
      media: "./img/D21.jpg",
    },
    user: {
      ava: "./img/petsla.png",
      username: "Leo Asher",
    },
    reactions: {
      like: 1,
      heart: 4,
      care: 1,
      laugh: 1,
      wow: 1,
      sad: 1,
      angry: 1,
    },
    comments: [
      {
        viewer: {
          ava: "./img/petsla.png",
          username: "Leo Asher",
        },
        commentContent:
          "Bấm vào link https://www.facebook.com/petsla.vn để nhận quà nè <3",
      },
    ],
  },
];


*/
