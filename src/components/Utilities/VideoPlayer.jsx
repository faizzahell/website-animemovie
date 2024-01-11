"use client"

import { XCircle } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleButtonPlayer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const option = {
    width: "350px",
    height: "250px"
  }

  const Player = () => {
    return (
      <div className="fixed bottom-4 right-4">
        <button onClick={handleButtonPlayer} className="text-color-primary transition-all">{<XCircle size={32} />}</button>
        <YouTube 
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video is broken, please try another")}
        />
      </div>
    )
  }

  const ButtonOpenPlayer = () => {
    return (
      <button onClick={handleButtonPlayer} className="fixed bottom-4 right-4 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl rounded">Tonton trailer</button>
    )
  }

  return isOpen ? <Player /> : <ButtonOpenPlayer />
}

export default VideoPlayer;