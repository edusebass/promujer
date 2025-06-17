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
  const fromX = index % 2 === 0 ? 100 : -100;
  return (
    <motion.div
      key={index}
      ref={ref}
      initial={{ opacity: 0, x: fromX, filter: "blur(4px)" }}
      animate={inView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex-shrink-0 w-64 m-2"
    >
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
    <div className="flex flex-wrap justify-center items-center m-auto">
      {randomMedia.map((item, index) => (
        <MediaCard key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default RandomImage;