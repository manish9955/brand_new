import React, { useState, useEffect } from "react";

const GlobalArrowKeyHandler = () => {
  const [message, setMessage] = useState("Use arrow keys!");

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          setMessage("You pressed Up!");
          break;
        case "ArrowDown":
          setMessage("You pressed Down!");
          break;
        case "ArrowLeft":
          setMessage("You pressed Left!");
          break;
        case "ArrowRight":
          setMessage("You pressed Right!");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <div>{message}</div>;
};

export default GlobalArrowKeyHandler;
