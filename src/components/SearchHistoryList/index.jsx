import React, { useState } from "react";

import SearchHistoryItem from "../SearchHistoryItem";
import "./SearchHistoryList.scss";

const SearchHistoryList = (props) => {
  const { isLightTheme, style } = props;

  const _searchHistoryList = [
    {
      id: 1,
      ava: "./img/petsla.png",
      name: "PetsLa",
      link: "/",
    },
    {
      id: 2,
      ava: "./img/leoasher.png",
      name: "Leo Asher",
      link: "/",
    },
    {
      id: 3,
      ava: "",
      name: "Lập trình hướng đối tượng Java cô Vân anh bla ble blo Lập trình hướng đối tượng Java cô Vân anh bla ble blo",
      link: "/",
    },
    {
      id: 4,
      ava: "./img/leoasher.png",
      name: "Leo Asher",
      link: "/",
    },
    {
      id: 5,
      ava: "",
      name: "lập trình python nhóm 3 kíp 10 thứ 10 & thứ 11 tháng 13 kíp 10 thứ 10 & thứ 11 tháng 13",
      link: "/",
    },
    {
      id: 6,
      ava: "./img/petsla.png",
      name: "Nguyễn Văn Hậu",
      link: "/",
    },
    {
      id: 7,
      ava: "./img/fbLogo.png",
      name: "Facebook",
      link: "/",
    },
    {
      id: 8,
      ava: "./img/D21.jpg",
      name: "D21 học viện công nghệ bưu chính viễn thông cơ sở Hà Nội, Việt Nam, Earth",
      link: "/",
    },
    {
      id: 9,
      ava: "./img/petsla.png",
      name: "PetsLa",
      link: "/",
    },
    {
      id: 10,
      ava: "./img/petsla.png",
      name: "PetsLa",
      link: "/",
    },
    {
      id: 11,
      ava: "./img/petsla.png",
      name: "PetsLa",
      link: "/",
    },
    {
      id: 12,
      ava: "./img/leoasher.png",
      name: "Leo Asher",
      link: "/",
    },
    {
      id: 13,
      ava: "",
      name: "Lập trình hướng đối tượng Java cô Vân anh bla ble blo Lập trình hướng đối tượng Java cô Vân anh bla ble blo",
      link: "/",
    },
    {
      id: 14,
      ava: "./img/leoasher.png",
      name: "Leo Asher",
      link: "/",
    },
    {
      id: 15,
      ava: "",
      name: "lập trình python nhóm 3 kíp 10 thứ 10 & thứ 11 tháng 13 kíp 10 thứ 10 & thứ 11 tháng 13",
      link: "/",
    },
    {
      id: 16,
      ava: "./img/petsla.png",
      name: "Nguyễn Văn Hậu",
      link: "/",
    },
    {
      id: 17,
      ava: "./img/fbLogo.png",
      name: "Facebook",
      link: "/",
    },
    {
      id: 18,
      ava: "./img/D21.jpg",
      name: "D21 học viện công nghệ bưu chính viễn thông cơ sở Hà Nội, Việt Nam, Earth",
      link: "/",
    },
    {
      id: 19,
      ava: "./img/petsla.png",
      name: "PetsLa",
      link: "/",
    },
    {
      id: 20,
      ava: "./img/petsla.png",
      name: "PetsLa",
      link: "/",
    },
  ];

  const [searchHistoryList, setSearchHistoryList] =
    useState(_searchHistoryList);

  const handleDeleteSearchHistoryItem = (item) => {
    const newList = searchHistoryList.filter((ele) => ele.id !== item.id);

    setSearchHistoryList([...newList]);
  };

  return (
    <div className="search-history__list">
      {searchHistoryList.length === 0 ? (
        <h1 className="no-search-currently">No search currently!</h1>
      ) : (
        searchHistoryList.map((searchHistoryItem) => (
          <SearchHistoryItem
            key={searchHistoryItem.id}
            searchHistoryItem={searchHistoryItem}
            handleDeleteSearchHistoryItem={handleDeleteSearchHistoryItem}
            isLightTheme={isLightTheme}
            style={style}
          />
        ))
      )}
    </div>
  );
};

export default SearchHistoryList;
