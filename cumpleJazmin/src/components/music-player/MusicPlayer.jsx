import React from 'react'
import { useRef, useState } from 'react';
import Song from '../../assets/music/Keane-Somewhere_Only_We_Know.mp3';
import PlayIcon from '../../assets/icons/play-button.png';
import PauseIcon from '../../assets/icons/pause-button.png';


const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <React.Fragment>
      <button className="music-button" onClick={toggleMusic}>
        <img className='music-icon'
          src={isPlaying ? PauseIcon : PlayIcon}
          alt={isPlaying ? "Pause" : "Play"}
        />
      </button>

      <audio ref={audioRef} loop>
        <source src={Song} type="audio/mpeg" />
      </audio>
    </React.Fragment>
  );
}

export default MusicPlayer
