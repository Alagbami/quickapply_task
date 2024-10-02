import React from "react";
import { videoDataTailor } from "../data/generalData";
import VideoCard from "./VideoCard";

const VideoListTailor: React.FC = () => {
  return (
    <div>
      {videoDataTailor.map((video) => (
        <VideoCard key={video.id} title={video.title} videoUrl={video.videoUrl} />
      ))}
    </div>
  );
};

export default VideoListTailor;
