import React, { useRef, useState } from "react";
import "./AudioPlayerButton.style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faX } from "@fortawesome/free-solid-svg-icons";

const AudioPlayerButton = ({preview}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // 오디오 일시 정지
      } else {
        audioRef.current.play(); // 오디오 재생
      }
      setIsPlaying(!isPlaying); // 상태 반전
    }
  };

  return (
    <>
      {preview
      ?
      <>
        <button className="play-button me-3" onClick={handlePlay}>
          <span className="play-icon">{isPlaying ? <FontAwesomeIcon className='pause-icon' icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}</span>
        </button>

        <audio ref={audioRef} src={preview} />
        
      </>
      :
      <>
        <button className="play-button me-3">
          <span className="play-icon"><FontAwesomeIcon icon={faX} className='trackaudiobutton_x'/></span>
        </button>
      </>
      }
    </>
  );
};

export default AudioPlayerButton;