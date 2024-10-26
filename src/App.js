import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Grid1 from "./Grid1"; //component1
import Bsidebar from "./Bsidebar";
import Asidebar from "./Asidebar";
import { Router, Routes, Route, useLocation } from "react-router-dom";
import Video from "./Video";
import { VideoProvider } from "./Context";
import Shorts from "./Shorts";
import Logic from "./Logic";

function App() {
  const location = useLocation();
  return (
    <>
      {/*  <Logic />*/}

      <Header />

      <Routes>
        <Route path="/" element={<Grid1 />} />
        <Route path="/:videoId" element={<Video />} />
        <Route path="/Shorts" element={<Shorts />} />
      </Routes>
    </>
  );
}

export default App;
