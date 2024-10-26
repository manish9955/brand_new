import React, { useState } from "react";
import "./Header.css";
import "./Grid1.css";
import Grid1 from "./Grid1";
import { useNavigate, useSearchParams } from "react-router-dom";
import Bsidebar from "./Bsidebar";
import Asidebar from "./Asidebar";

const Header = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();
  const backtohome1 = () => {
    navigate("/");
  };

  const handleToggle = () => {
    const newSearch = new URLSearchParams();
    if (search.get("side") == "min") {
      newSearch.set("side", "max");
    } else {
      newSearch.set("side", "min");
    }

    // Replace current history entry instead of adding a new one
    setSearch(newSearch, { replace: true });
  };

  return (
    <>
      <div className="header">
        <div className="left-side-bar">
          <div className="hamburger-menu">
            <button className="ham-button" onClick={handleToggle}>
              <img src="./youtube_icons/hamburger-menu.png"></img>
            </button>
          </div>
          <div className="item-icon">
            <button className="youtube" onClick={backtohome1}>
              <img
                className="youtube-logo"
                src="./youtube_icons/youtube-logo.png"
              />
            </button>
          </div>
        </div>

        <div className="middle-bar">
          <input className="search-bar" type="text" placeholder="Search" />
          <button className="search-button">
            <img className="search-icon" src="./youtube_icons/search.png" />
          </button>
          <button className="voice-search-button">
            <img src="./youtube_icons/voice-search-icon.png" />
          </button>
        </div>

        <div className="rigth-side-bar">
          <div className="items">
            <img src="./youtube_icons/upload.png" />
          </div>

          <div className="items">
            <img src="./youtube_icons/notifications.png" />
          </div>

          <div className="profile">
            <img class="current-user-picture" src="./youtube_icons/absk.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
