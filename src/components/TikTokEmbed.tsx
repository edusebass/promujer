"use client";
import React, { useEffect } from "react";

const TikTokEmbed = ({
  videoId,
  author,
}: {
  videoId: string;
  author: string;
}) => {
  // component code...
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite={`https://www.tiktok.com/@${author}/video/${videoId}`}
      data-video-id={videoId}
      style={{ maxWidth: "605px", minWidth: "325px" }}
    >
      <section>
        <a
          target="_blank"
          rel="noopener noreferrer"
          title={`@${author}`}
          href={`https://www.tiktok.com/@${author}`}
        >
          @{author}
        </a>
      </section>
    </blockquote>
  );
};

export default TikTokEmbed;
