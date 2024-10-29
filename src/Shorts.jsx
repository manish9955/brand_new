import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Shorts.css";
import Asidebar from "./Asidebar";
import Bsidebar from "./Bsidebar";
import ShortsData from "./ShortsData";

const Shorts = () => {
  const [search] = useSearchParams();
  const side = search.get("side") || "max";
  const [position, setPosition] = useState(0); // Starting position
  const divRef = useRef(null);

  // Define moveUp and moveDown functions within the component scope
  const moveUp = () => {
    setPosition((prev) => prev - (divRef.current?.offsetHeight || 0)); // Move up by the div's height
  };

  const moveDown = () => {
    setPosition((prev) => prev + (divRef.current?.offsetHeight || 0)); // Move down by the div's height
  };

  return (
    <div className="main-shorts">
      {side == "min" ? <Bsidebar /> : <Asidebar />}
      <div className="shorts">
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

        <div className="up-down">
          <div className="up">
            <button onClick={moveUp}>
              <img src="./youtube_icons/top.png"></img>
            </button>
          </div>
          <div className="up">
            <button onClick={moveDown}>
              <img src="./youtube_icons/arrowdown12.png"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shorts;
