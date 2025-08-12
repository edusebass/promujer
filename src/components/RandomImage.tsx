"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface MediaService {
  src: string;
  title: string;
  type: "image" | "video";
}

interface CloudinaryResource {
  secure_url: string;
  public_id: string;
  resource_type: string;
}

interface RandomImageProps {
  count?: number;
}

// Componente hijo para cada media
const MediaCard = ({ item, index }: { item: MediaService; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      key={index}
      ref={ref}
      initial={
        isLeft
          ? { opacity: 0, x: -100, filter: "blur(4px)" }
          : { opacity: 0, y: -100, filter: "blur(4px)" }
      }
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
          : {}
      }
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex-shrink-0 m-2"
    >
      <div className="w-[260px] h-[260px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] rounded-xl overflow-hidden shadow-lg">
        {item.type === "image" ? (
          <Image
            src={item.src}
            alt={item.title || "Imagen"}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={item.src}
            controls
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </motion.div>
  );
};

const RandomImage: React.FC<RandomImageProps> = ({ count = 1 }) => {
  const [randomMedia, setRandomMedia] = useState<MediaService[]>([]);

  useEffect(() => {
    const fetchCloudinaryMedia = async () => {
      try {
        const res = await fetch("/api/cloudinary-dr");
        if (!res.ok) return;
        const data: CloudinaryResource[] = await res.json();
        // Mezcla los recursos y toma los primeros 'count'
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, count).map((item) => ({
          src: item.secure_url,
          title: item.public_id,
          type: item.resource_type === "video" ? "video" : "image" as "image" | "video",
        }));
        setRandomMedia(selected);
      } catch {
        setRandomMedia([]);
      }
    };
    fetchCloudinaryMedia();
  }, [count]);

  if (randomMedia.length === 0) return null;

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6 md:gap-8 py-4 min-h-[320px]">
        {randomMedia.map((item, index) => (
          <MediaCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default RandomImage;