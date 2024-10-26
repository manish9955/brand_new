import React from "react";
import "./Bsidebar.css";
import { useNavigate } from "react-router-dom";

const Bsidebar = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  const handleshort = () => {
    navigate("/Shorts");
  };
  return (
    <div className="main">
      <div className="main-content">
        <button onClick={backToHome}>
          <img src="./youtube_icons/homewhite.png" />
          <span>Home</span>
        </button>
      </div>
      <div className="main-content">
        <button onClick={handleshort}>
          <img src="./youtube_icons/shorts.png" />
          <span className="icon-txt">Shorts</span>
        </button>
      </div>
      <div className="main-content">
        <img src="./youtube_icons/subscriptions.png" />
        <span className="icon-txt">Subscriptions</span>
      </div>
      <div className="main-content">
        <img src="./youtube_icons/youtubemusic.png" />
        <span className="icon-txt">YouTube Mu...</span>
      </div>
      <div className="main-content">
        <img src="./youtube_icons/you.png" />
        <span className="icon-txt">You</span>
      </div>
      <div className="main-content">
        <img src="./youtube_icons/download.png" />
        <span className="icon-txt">Downloads</span>
      </div>
      <div className="null"></div>
      <div className="null"></div>
    </div>
  );
};

export default Bsidebar;
