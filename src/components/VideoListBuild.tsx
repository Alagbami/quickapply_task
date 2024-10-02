import React from "react";
import { videoDataBuild } from "../data/generalData";
import VideoCard from "./VideoCard";

const VideoListBuild: React.FC = () => {
  return (
    <div>
      {videoDataBuild.map((video) => (
        <VideoCard key={video.id} title={video.title} videoUrl={video.videoUrl} />
      ))}
    </div>
  );
};

export default VideoListBuild;