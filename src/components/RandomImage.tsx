/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface MediaService {
  src: string;
  title: string;
  type: "image" | "video";
}

interface RandomImageProps {
  count?: number;
}

const RandomImage: React.FC<RandomImageProps> = ({ count = 1 }) => {
  const [randomMedia, setRandomMedia] = useState<MediaService[]>([]);

  useEffect(() => {
    const fetchCloudinaryMedia = async () => {
      try {
        const res = await fetch("/api/cloudinary-dr");
        if (!res.ok) return;
        const data = await res.json();
        // Mezcla los recursos y toma los primeros 'count'
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, count).map((item: any) => ({
          src: item.secure_url,
          title: item.public_id,
          type: item.resource_type === "video" ? "video" : "image",
        }));
        setRandomMedia(selected);
      } catch (error) {
        setRandomMedia([]);
      }
    };
    fetchCloudinaryMedia();
  }, [count]);

  if (randomMedia.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center items-center m-auto">
      {randomMedia.map((item, index) => (
        <div key={index} className="flex-shrink-0 w-64 m-2">
          {item.type === "image" ? (
            <Image
              src={item.src}
              alt={item.title || "Imagen"}
              width={256}
              height={384}
              className="object-cover h-full"
            />
          ) : (
            <video
              src={item.src}
              controls
              width={256}
              height={384}
              className="object-cover h-full"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
    </div>
  );
};

export default RandomImage;