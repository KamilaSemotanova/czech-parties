import React, { useState } from "react";
import "./style.css";
import YouTube from "react-youtube";

export const AfterMovieCarousel = () => {
  const [videoToDisplay, setVideoToDisplay] = useState(null);

  const videos = ["rrcLss3FhJk"];

  const onVideoClick = (videoId) => {
    setVideoToDisplay(videoId);
  };

  return (
    <div className="video-carousel__box">
      <h2 className="video-carousel__title">Aftermovies</h2>
      <div className="video-carousel">
        {videos.map((videoId) => (
          <div
            key={videoId}
            className="video-thumbnail"
            onClick={() => onVideoClick(videoId)}
          >
            <img
              className="video-thumbnail__image"
              src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
              alt="Video Thumbnail"
              style={{ width: "40vw" }}
            />
          </div>
        ))}
      </div>
      {videoToDisplay && (
        <div className="video-player">
          <YouTube videoId={videoToDisplay} opts={{ width: "100%" }} />
        </div>
      )}
    </div>
  );
};
