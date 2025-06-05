import React from "react";

interface VideoSectionProps {
  title: string;
  videoSrc: string;
}

const VideoSection = ({ title, videoSrc }: VideoSectionProps) => {
  return (
    <div className="flex flex-col">
      <p className="bg-colorButton text-SECONDARY p-4">{title}</p>
      <video
        className="h-[550px] border-r-8"
        src={videoSrc}
        controls
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
