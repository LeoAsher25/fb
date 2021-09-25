import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";
import SideBarItem from "../SideBarItem";
import { Link } from "react-router-dom";

import "./UpPostModal.scss";

const UpPostModal = (props) => {
  const { setUpPostModalIsOpen } = props;

  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  const user = {
    id: 1,
    img: "./img/petsla.png",
    name: "Leo Asher",
    link: "/LeoAsher25",
  };

  const typeList = [
    {
      id: 1,
      imgLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/cFhDhqxQYGs.png",
      imgBgPosition: "0px -225px",
      title: "Photo/Video",
    },
    {
      id: 2,
      imgLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/cFhDhqxQYGs.png",
      imgBgPosition: "0px -100px",
      title: "Photo/Video",
    },
    {
      id: 3,
      imgLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/cFhDhqxQYGs.png",
      imgBgPosition: "0px -25px",
      title: "Photo/Video",
    },
    {
      id: 4,
      imgLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/HyeXO0sd7uk.png",
      imgBgPosition: "0px -225px",
      title: "Photo/Video",
    },
    {
      id: 5,
      imgLink: "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/cFhDhqxQYGs.png",
      imgBgPosition: "0px -175px",
      title: "Photo/Video",
    },
  ];

  return (
    <div
      className="up-post-modal"
      style={{
        backgroundColor: style.topnavBgColor,
        borderColor: style.borderColor,
        color: style.color,
      }}
    >
      <div className="up-post-modal__wrap">
        <div
          className="modal__header"
          style={{ borderColor: style.borderColor }}
        >
          <div className="modal-title">
            <span>Create Post</span>
          </div>

          <div
            className="modal-close"
            onClick={() => setUpPostModalIsOpen(false)}
            style={{ backgroundColor: style.bgColorGray }}
          >
            <i class="bi bi-x-lg"></i>
          </div>
        </div>

        <div className="modal__body">
          <div className="modal-user">
            <Link to={user.link} className="user-link">
              <div
                className="bg"
                style={{ backgroundColor: style.bgColorGray }}
              ></div>
              <div className="user-content" style={{ color: style.color }}>
                <div className="user-img">
                  <img src={user.img} alt="" />
                </div>
              </div>
            </Link>

            <div className="user-desc">
              <div className="user-name">
                <span>{user.name}</span>
              </div>
            </div>
          </div>
          {/* end of modal-user */}

          <div className="modal-content"></div>
          {/* end of modal-content  */}

          <div
            className="type-of-upping"
            style={{ borderColor: style.borderColor }}
          >
            <div className="title">
              <span>Add to Your Post</span>
            </div>
            <div className="type-list">
              {typeList.map((item) => (
                <div key={item.id} className="type-item">
                  <div
                    className="bg"
                    style={{ backgroundColor: style.upPostInputBox }}
                  ></div>

                  <div className="type-item__wrap">
                    <div
                      className="type-item-img"
                      style={{
                        backgroundImage: `url('${item.imgLink}')`,
                        backgroundPosition: item.imgBgPosition,
                      }}
                    ></div>
                  </div>
                  <div className="type-item-title">{item.title}</div>
                </div>
              ))}

              <div className="type-item">
                <div
                  className="bg"
                  style={{ backgroundColor: style.upPostInputBox }}
                ></div>
                <div className="type-item__wrap">
                  <div className="type-item-img">
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn post-btn">Post</div>
        </div>
      </div>
    </div>
  );
};

export default UpPostModal;
