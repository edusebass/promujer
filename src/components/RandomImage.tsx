"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IMG_SERVICIES } from "@/constants/imgServicios";

interface MediaService {
  src: string;
  title: string;
  type: "image" | "video"; // Add a type to distinguish between images and videos
}

interface RandomImageProps {
  media?: MediaService[]; // Optional array of media to override the default
  count?: number; // Optional count to specify how many media items to display
}

const RandomImage: React.FC<RandomImageProps> = ({
  media = IMG_SERVICIES,
  count = 1,
}) => {
  const [randomMedia, setRandomMedia] = useState<MediaService[]>([]);

  useEffect(() => {
    const getRandomMedia = (): MediaService[] => {
      const shuffledMedia = [...media].sort(() => 0.5 - Math.random());
      return shuffledMedia.slice(0, count); // Return the specified number of random media items
    };

    setRandomMedia(getRandomMedia());
  }, [media, count]);

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