import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

import "./SideBarRight.scss";

import SideBarItem from "../../components/SideBarItem";
import { SideBarContext } from "../../contexts/SideBarContextProvider";
const SideBarRight = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  const { sidebarHotKeyList, sidebarContactList } = useContext(SideBarContext);
  return (
    <div className="side-bar-right" style={{ color: style.color }}>
      {/* <div className="your-pages__wrap">
        <div className="your-pages__header">
          <div className="title">Your Pages</div>

          <div className="see-more">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>

        <div className="your-pages__body">
          <ul className="btn-list">
            <li className="btn-item">
              <div
                className="bg"
                style={{ backgroundColor: style.upPostInputBox }}
              ></div>

              <div className="content">
                
              </div>
            </li>
          </ul>
        </div>
      </div>
    */}
      <div className="contact__wrap">
        <div className="contact__header">
          <div className="header-title">
            <span>Contacts</span>
          </div>
          <div className="header-btn">
            <div className="btn-list">
              <div className="btn-item">
                <div className="bg"></div>
              </div>
            </div>
          </div>
        </div>
        {sidebarContactList.map((item) => (
          <SideBarItem key={item.id} style={style} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SideBarRight;
