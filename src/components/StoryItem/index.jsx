import React from "react";

import "./StoryItem.scss";

const StoryItem = (props) => {
  const { storyItemData } = props;
  const { ava, media, name, isSeen } = storyItemData;

  return (
    <div className="story-item">
      <div
        className="story-item-media"
        style={{ backgroundImage: `url('${media}')` }}
      ></div>
      <div
        className="story-item-ava"
        style={{ borderColor: isSeen ? "#2E3134" : "#297BE5" }}
      >
        <img src={ava} alt="" />
      </div>
      <div className="story-item-name">
        <span>{name}</span>
      </div>
    </div>
  );
};

export default StoryItem;
