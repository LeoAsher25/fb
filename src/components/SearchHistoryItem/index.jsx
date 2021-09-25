import React from "react";
import "./SearchHistoryItem.scss";

const SearchHistoryItem = (props) => {
  const { searchHistoryItem, style } = props;

  return (
    <div className="search-history-item">
      <div
        className="search-history-item-bg"
        style={{ backgroundColor: style.bgColorGray }}
      ></div>
      <a href={searchHistoryItem.link} className="search-history-item-link">
        <div className="search-history-ava">
          {searchHistoryItem.ava.trim() !== "" ? (
            <img src={searchHistoryItem.ava} alt="" />
          ) : (
            <div
              className="search-history__img"
              style={{
                backgroundColor: style.bodyBgColor,
                color: style.color,
              }}
            >
              <i style={{ color: style.color }} className="far fa-clock"></i>
            </div>
          )}
        </div>
        <div className="search-history-item-name">
          <span> {searchHistoryItem.name} </span>
        </div>
      </a>
      <div className="search-history-item-delete">
        <div className="bg"></div>
        <i style={{ color: style.color }} className="bi bi-x"></i>
      </div>
    </div>
  );
};

export default SearchHistoryItem;
