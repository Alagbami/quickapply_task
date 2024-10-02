import React from "react";

interface VideoCardProps {
  title: string;
  videoUrl: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, videoUrl }) => {
  return (
    <div className="flex flex-col items-center py-10">
      {/* Label (Video) */}
      <div className="mb-4 bg-[#131D26] text-[#F6D155] px-4 py-2 rounded-full text-sm font-semibold">
        Video
      </div>

      {/* Video Title */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>

      {/* Video Container */}
      <div className="w-full md:w-3/4 lg:w-1/2 aspect-video bg-gray-200 rounded-md overflow-hidden">
        <iframe
          className="w-full h-full"
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCard;
