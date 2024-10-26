import React, { useState, useRef, useEffect } from "react";
import ShortsData from "./ShortsData";
import "./Logic.css";

function MoveDiv() {
  const [position, setPosition] = useState(0); // Starting position
  const divRef = useRef(null);

  const moveUp = () => {
    setPosition((prev) => prev - (divRef.current?.offsetHeight || 0)); // Move up by the div's height
  };

  const moveDown = () => {
    setPosition((prev) => prev + (divRef.current?.offsetHeight || 0)); // Move down by the div's height
  };

  return (
    <div className="main-container">
      <div className="switch">
        <button className="button" onClick={moveUp}>
          Move Up
        </button>
        <button className="button" onClick={moveDown}>
          Move Down
        </button>
      </div>
      {ShortsData.map((val) => (
        <div
          className="actual-shorts"
          ref={divRef}
          style={{
            transform: `translateY(${position}px)`,
            transition: "transform 0.6s ease", // Smooth transition
            width: "400px",
            height: "85vh",
          }}
        >
          <div className="video-div">
            <video className="hover-video" src={val.video_src} controls />
          </div>
          <div className="iconn-div">
            <div className="like"></div>
            <div className="dislike"></div>
            <div className="comment"></div>
            <div className="comment"></div>
            <div className="comment"></div>
            <div className="comment"></div>
            <div className="ABC">
              <button className="mybutton">
                <img src="./youtube_icons/likeblack.png"></img>
              </button>
              <p>12K</p>
            </div>
            <div className="ABC">
              <button className="mybutton">
                <img src="./youtube_icons/dislikeblack1.png"></img>
              </button>
              <p>Dislike</p>
            </div>
            <div className="ABC">
              <button className="mybutton">
                <img src="./youtube_icons/commentblack.png"></img>
              </button>
              <p>112</p>
            </div>
            <div className="ABC">
              <button className="mybutton">
                <img src="./youtube_icons/shareblack3.png"></img>
              </button>
              <p>Share</p>
            </div>

            <div className="ABC">
              <button className="mybutton">
                <img src="./youtube_icons/dots.png"></img>
              </button>
            </div>
            <div className="">
              <button className="absk-button">
                <img className="absk" src="./youtube_icons/absk.jpg"></img>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MoveDiv;
