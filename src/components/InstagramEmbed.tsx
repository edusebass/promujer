import React from "react";

const InstagramEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <>
      <div className="">
        <iframe
          src={`https://www.instagram.com/tv/${videoId}/embed`}
          width="350"
          height="500"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          title="Instagram Video"
        ></iframe>
      </div>
    </>
  );
};

export default InstagramEmbed;
