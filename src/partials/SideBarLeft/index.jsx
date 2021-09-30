import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

import "./SideBarLeft.scss";

import SideBarItem from "../../components/SideBarItem";
import { SideBarContext } from "../../contexts/SideBarContextProvider";

const SideBarLeft = () => {
  // declear theme context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, lightTheme, darkTheme } = theme;
  const style = isLightTheme ? lightTheme : darkTheme;

  const { sidebarHotKeyList, sidebarContactList } = useContext(SideBarContext);

  return (
    <div
      className="sidebar-left"
      style={{ backgroundColor: style.bodyBgColor }}
    >
      <SideBarItem style={style} item={sidebarContactList.at(0)} />
      {sidebarHotKeyList.map((item) => (
        <SideBarItem key={item.id} style={style} item={item} />
      ))}
    </div>
  );
};

export default SideBarLeft;
