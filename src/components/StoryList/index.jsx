import React from "react";
import { Container, Row } from "react-bootstrap";

import StoryItem from "../StoryItem";
import "./StoryList.scss";

const StoryList = () => {
  const storyListData = [
    {
      ava: "./img/petsla.png",
      media: "./img/1.jpg",
      name: "Người yêu 1",
      isSeen: false,
    },
    {
      ava: "./img/D21.jpg",
      media: "./img/2.jpg",
      name: "Người yêu 2 Ahihi ",
      isSeen: false,
    },
    {
      ava: "./img/fbLogo.png",
      media: "./img/3.jpg",
      name: "Người yêu 3 Ahaha",
      isSeen: true,
    },
    // {
    //   ava: "./img/leoasher.png",
    //   media: "./img/5.jpg",
    //   name: "Người yêu 4",
    //   isSeen: true,
    // },
    {
      ava: "./img/5.png",
      media: "./img/11.jpg",
      name: "Trùm",
      isSeen: false,
    },
  ];

  return (
    <div className="story-list">
      <Container>
        <div className="row">
          <div className="col add-story">
            <div
              className="add-img"
              style={{ backgroundImage: `url('./img/10.jpg')` }}
            ></div>
          </div>
          {storyListData.map((storyItemData, index) => (
            <div key={index} className="col">
              <StoryItem storyItemData={storyItemData} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StoryList;
