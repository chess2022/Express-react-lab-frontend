import bgVideo from "../images/background_vid.mp4"
import React from "react";

export default function Home(props) {
  return (
    <div className="home-page">
      <video
        id="background-video"
        autoPlay
        loop
        muted
        // height="500"
        width="100%"
        poster="../public/images/video_still.png"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="home-text">
        <h1>Hi, I'm Cheryl.</h1>
        <h2>I am a developer with a passion for design.</h2>
      </div>
    </div>
  );
}
