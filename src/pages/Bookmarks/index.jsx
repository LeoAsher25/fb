import React from "react";
import SideBarContextProvider from "../../contexts/SideBarContextProvider";
import SideBarLeft from "../../partials/SideBarLeft";

const BookmarksPage = () => {
  return (
    <SideBarContextProvider>
      <SideBarLeft style={{ display: "block" }} />
    </SideBarContextProvider>
  );
};

export default BookmarksPage;
