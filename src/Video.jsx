import React, { useContext } from "react";
import "./Video.css";
import { VideoContext } from "./Context";
import { useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Sdata from "./Data";
import Asidebar from "./Asidebar";
import SearchResult from "./SearchResult";

const Video = ({ filter_name }) => {
  const { videoId } = useParams();
  const videoIdNum = videoId ? Number(videoId) : null;
  const video = Sdata.find((record) => record.id === videoIdNum);

  const navigate = useNavigate();

  const handlePlayer1 = (videoId) => () => {
    navigate(`/${videoId}`);
    window.location.reload();
    window.scrollTo(0, 0);
  };

  const handleMouseEnter = (e) => {
    e.target.play();
  };

  const handleMouseLeave = (e) => {
    e.target.pause();
    e.target.currentTime = 0; // Reset the video to the start when hover ends
  };

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState("0:00");

  const [comment, setComment] = useState("");
  const [submittedComment, setSubmittedComment] = useState("");

  /* const handleTimeUpdate = () => {
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    setProgress((current / total) * 100);
    setDuration(formatTime(current) + " / " + formatTime(total));
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen(); // Safari
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen(); // IE11
    }
  };*/
  const handleInputChange = (e) => {
    setComment(e.target.value); // Update the state with user input
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedComment(comment); // Set the submitted comment to render
    setComment(""); // Clear the input field
  };
  const [search] = useSearchParams();
  const side = search.get("side") || "min";

  return (
    <>
      <div className="main-wrapper">
        {side == "min" ? null : <Asidebar />}
        <div className="main-video">
          <div className="video-block">
            {video && (
              <video
                //onTimeUpdate={handleTimeUpdate}
                //onLoadedMetadata={handleTimeUpdate}
                width="100%"
                height="100%"
                autoPlay
                controls
              >
                <source src={video.video_src} type="video/mp4" />
              </video>
            )}
            {/* <button className="video-button" onClick={handlePlayPause}>
              {isPlaying ? (
                // Pause Icon (SVG or custom icon)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                // Play Icon (SVG or custom icon)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>*/}
          </div>
          <div className="video-title">
            <h4>
              Rhaenyra 3 dragons confront Aemond Vhagar Scene House of the
              Dragon S02E07 | House of the Dragon 4K
            </h4>
          </div>
          {/*channel-block bar*/}
          <div className="channel-bock">
            <div className="left-block">
              <div className="channel-icon">
                <img src="./youtube_icons/pexels1.jpg"></img>
              </div>
              <div className="channeldetails">
                <div className="channelname">Vesmoper</div>
                <div className="subscribers">69.6M subscribers</div>
              </div>
              <div className="subscribe">
                <h4>Subscribe</h4>
              </div>
            </div>
            <div className="right-block">
              <div className="likendislike">
                <div className="like">
                  <img src="./youtube_icons/like.png" />
                  <span>1.1K</span>
                </div>
                <div className="dislike">
                  <img src="./youtube_icons/dislike.png" />
                </div>
              </div>

              <div className="share">
                <img src="./youtube_icons/share.png" />
                <span>Share</span>
              </div>
              <div className="download">
                <img src="./youtube_icons/download.png" />
                <span>Download</span>
              </div>
            </div>
          </div>
          <div className="video-details">
            <div className="first">
              122K views 2 months ago #houseofthedragon #scene #television.
            </div>

            <div className="second">#television #houseofthedragon #scene …</div>
          </div>
          {/* comment box starts form here */}
          <div className="comment-section">
            <div className="comment-title">
              <div className="comment-note">453 Comments</div>
              <div className="comment-title">
                <img src="./youtube_icons/leftsignal.png" />
              </div>
              <h5>Short by</h5>
            </div>
            <div className="comment-write">
              <div className="icon-comment">
                <img src="./youtube_icons/pexels1.jpg" />
              </div>
              <div className="icon-comment">
                <div className="comment-up">
                  <form className="comment-form" onSubmit={handleSubmit}>
                    <textarea
                      value={comment}
                      onChange={handleInputChange}
                      placeholder="Add a comment..."
                    ></textarea>
                    <hr></hr>
                    {comment && (
                      <div className="buttons-comment">
                        <button type="cancel">Cancel</button>
                        <button type="submit" className="submit1">
                          Comment
                        </button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
            {submittedComment && (
              <div className="personal-comment">
                <div className="img-section">
                  <img src="./youtube_icons/absk.jpg" />
                </div>

                <div className="text-section">
                  <div className="channel-name">
                    <h5>@abskkmr12334</h5>
                    <h6>5 months ago</h6>
                  </div>

                  <div className="text-up">
                    <p>{submittedComment}</p>
                  </div>
                  <div className="like-logs">
                    <div className="like1">
                      <img src="./youtube_icons/like.png"></img>
                      <p>24</p>
                    </div>
                    <div className="dislike1">
                      <img src="./youtube_icons/dislike.png"></img>
                    </div>
                    <div className="reply">
                      <h5>Reply</h5>
                    </div>
                  </div>
                </div>

                <div class="vertical-dots ">
                  <div class="dot"></div>
                  <div class="dot"></div>
                  <div class="dot"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* right side bar starts form here */}
        <div className="right-side-list">
          {Sdata.map((val) => (
            <div className="side-main">
              <div className="side-video">
                <video
                  key={val.id}
                  className="sidelist"
                  src={val.video_src}
                  onClick={handlePlayer1(val.id)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  muted
                />
              </div>

              <div className="side-context">
                <div className="dot-wrap">
                  <div className="side-below text1">
                    Trump Vows to End Russia-Ukraine War...
                  </div>
                  <div class="vertical-dots">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                </div>
                <div className="side-text">
                  <div className="side-below text">
                    World Affairs by Unacademy
                  </div>
                  <div className="side-below text">79K views. 6 days ago</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Video;
