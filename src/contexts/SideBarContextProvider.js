import React, { useState } from "react";
import { _sidebarHotKeyList, _sideBarContactList } from "./_data";

export const SideBarContext = React.createContext();

const SideBarContextProvider = (props) => {
  const [sidebarHotKeyList, setSidebarHotKeyList] =
    useState(_sidebarHotKeyList);

  const [sidebarContactList, setSidebarContactList] =
    useState(_sideBarContactList);

  const sideBarDatas = {
    sidebarHotKeyList,
    sidebarContactList,
  };

  return (
    <SideBarContext.Provider value={sideBarDatas}>
      {props.children}
    </SideBarContext.Provider>
  );
};

export default SideBarContextProvider;
