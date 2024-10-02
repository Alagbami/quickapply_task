import React from "react";
import { videoDataScore } from "../data/generalData";
import VideoCard from "./VideoCard";

const VideoListScore: React.FC = () => {
  return (
    <div>
      {videoDataScore.map((video) => (
        <VideoCard key={video.id} title={video.title} videoUrl={video.videoUrl} />
      ))}
    </div>
  );
};

export default VideoListScore;