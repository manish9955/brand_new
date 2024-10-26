import React from "react";
import "./Asidebar.css";
import { useNavigate } from "react-router-dom";

const Asidebar = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  const playshorts = () => {
    navigate("/Shorts");
  };

  return (
    <>
      <div className="main-container1">
        <div className="home-container">
          <div className="home">
            <button onClick={backToHome}>
              <img src="./youtube_icons/homewhite.png" /> Home
            </button>
          </div>
          <div className="home">
            <button onClick={playshorts}>
              <img src="./youtube_icons/shorts.png" />
              Shorts
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/subscriptions.png" />
              Subscriptions
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/youtube-music.png" />
              YouTube Music
            </button>
          </div>

          <hr></hr>

          <div className="home-title">You</div>
          <div className="home">
            <button>
              <img src="./youtube_icons/yourchannel.png" />
              Your channel
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/history.png" />
              History
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/playlist.png" />
              Playlists
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/yourvideos.png" />
              Your videos
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/watchlater.png" />
              Watch later
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/like.png" />
              Liked videos
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/download.png" />
              Downloads
            </button>
          </div>

          <hr></hr>

          <div className="Subscription-title">Subscriptions</div>
          <div className="home xhome">
            <button>
              <img src="./youtube_icons/arrow.png" />
              Show more
            </button>
          </div>
          <hr></hr>
          <div className="explore-title">Explore</div>
          <div className="home">
            <button>
              <img src="./youtube_icons/trending.png" />
              Trending
            </button>
          </div>

          <div className="home">
            <button>
              <img src="./youtube_icons/shopping.png" />
              Shopping
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/music.png" />
              Music
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/movie.png" />
              Movies
            </button>
          </div>
          <div className="home">
            <button>
              <img className="live" src="./youtube_icons/live.png" />
              Live
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/games.png" />
              Gaming
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/news.png" />
              News
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/trophy.png" />
              Sports
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/cources.png" />
              Courses
            </button>
          </div>
          <div className="home">
            <button>
              <img src="/youtube_icons/fashion.png" />
              Fashion & Beauty
            </button>
          </div>
          <div className="home">
            <button>
              <img src="./youtube_icons/podcast.png" />
              Podcasts
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Asidebar;
