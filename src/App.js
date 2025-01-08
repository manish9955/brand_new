import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Grid1 from "./Grid1"; //component1
import Bsidebar from "./Bsidebar";
import Asidebar from "./Asidebar";
import { Router, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Video from "./Video";
import { VideoProvider } from "./Context";
import Shorts from "./Shorts";
import Logic from "./Logic";

function App() {
  const location = useLocation();
  const [filter, setFilter] = useState("");
  const [filter_name, setFilter_name] = useState("");

  const handleFilter = (e) => {
    setFilter(e.target.value);
    //console.log(filter);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("enter key pressed");
      filterClick(); // Trigger button click
    }
  };

  const filterClick = (e) => {
    setFilter_name(filter);
    setTimeout(() => {
      setFilter_name(false);
    }, 3000);
  };

  return (
    <>
      {/*  <Logic />*/}

      <Header
        filter={filter}
        filterClick={filterClick}
        handleFilter={handleFilter}
        handleKeyDown={handleKeyDown}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Grid1
              filter={filter}
              filterClick={filterClick}
              filter_name={filter_name}
            />
          }
        />
        <Route path="/:videoId" element={<Video filter_name={filter_name} />} />
        <Route path="/Shorts" element={<Shorts />} />
      </Routes>
    </>
  );
}

export default App;
