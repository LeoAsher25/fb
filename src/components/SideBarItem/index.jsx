import React from "react";
import { Link } from "react-router-dom";
import "./SideBarItem.scss";

const SideBarItem = (props) => {
  const { style, item } = props;

  const handlePathName = () => {
    const pathName = item.name.toLowerCase().split(" ").join("-");
    return pathName;
  };

  return (
    <div className="sidebar-item">
      <Link to={handlePathName()} className="item-link">
        {/* <a href="/" className="item-link"> */}
        <div
          className="bg"
          style={{ backgroundColor: style.bgColorGray }}
        ></div>
        <div className="item-content" style={{ color: style.color }}>
          <div className="item-img">
            <img src={item.img} alt="" />
          </div>

          <div className="item-desc">
            <div className="item-name">
              <span>{item.name}</span>
            </div>

            {item.newNotices > 0 ? (
              <div className="new-notices">
                <i className="fas fa-circle"></i>
                <span>{item.newNotices <= 9 ? item.newNotices : "9+"} new</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* </a> */}
      </Link>
    </div>
  );
};

export default SideBarItem;
