import React, { createContext, useState } from "react";
import Video from "./Video";
import Grid1 from "./Grid1";

// Create the context
export const VideoContext = createContext();

// Create a provider component
export const VideoProvider = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <VideoContext.Provider value={{ selectedVideo, setSelectedVideo }}>
      <Grid1 />
      <Video />
    </VideoContext.Provider>
  );
};
