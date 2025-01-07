import React, { useState, useContext } from "react";
import "./Grid1.css";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import Sdata from "./Data";
import { VideoContext } from "./Context";
import Asidebar from "./Asidebar";
import Bsidebar from "./Bsidebar";
import SearchResult from "./SearchResult";

const Grid1 = ({ filter_name }) => {
  //const { setSelectedVideo } = useContext(VideoContext);

  const navigate = useNavigate();
  const handleMouseEnter = (e) => {
    // e.target.play();
  };

  const handleMouseLeave = (e) => {
    e.target.pause();
    e.target.currentTime = 0; // Reset the video to the start when hover ends
  };
  const handlePlayer = (videoId) => () => {
    navigate(`/${videoId}`);
    window.scrollTo(0, 0);
  };

  const [search] = useSearchParams();
  const side = search.get("side") || "min";

  return (
    <>
      <div className="super-container">
        {side == "max" ? <Asidebar /> : <Bsidebar />}

        <div className="content">
          {filter_name ? <SearchResult filter_name={filter_name} /> : "null"}
          <div
            className={`main-container ${
              side == "max" ? "main-container-small" : ""
            }`}
          >
            {Sdata.map((val) => (
              <div className="main-wrap">
                <div className="gallary">
                  <video
                    className="hover-video"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handlePlayer(val.id)}
                    src={val.video_src}
                  />

                  <div className="buttons">
                    <button>
                      <img
                        src="./youtube_icons/volumemute.png"
                        alt="Button Image"
                      />
                    </button>
                    <button>
                      <img src="./youtube_icons/cc.png" alt="Button Image" />
                    </button>
                  </div>
                  <div className="time">
                    <h5>2:24</h5>
                  </div>
                </div>

                <div className="below-wrap">
                  <div className="side">
                    <img src="./youtube_icons/pexels1.jpg" />
                  </div>
                  <div className="down-partition">
                    <div className="down1">{val.title}</div>
                    <div className="down2">
                      <span>
                        StudyIQ IAS
                        <br />
                        2.5K views.20minutes ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Grid1;
