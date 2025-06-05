/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
type Image = {
  image: string;
  title1: string;
  title2: string;
};

type ImageSliderProps = {
  images: Image[];
};
const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-enter");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-exit");
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeClass("fade-enter");
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentIndex];

  return (
    <div
      className={`relative flex items-start justify-center w-96 h-96 bg-cover bg-center fade-enter fade-enter-active`}
      style={{ backgroundImage: currentImage.image }}
    >
      <div className="absolute inset-0 "></div>
      <div className="flex items-center justify-center flex-col pt-10">
        {/* <h2 className="relative text-center text-3xl font-semibold text-colorText.Primary p-4">
          {currentImage.title1}
        </h2>
        <h2 className="relative text-center text-4xl font-bold text-colorText.Primary p-4">
          {currentImage.title2}
        </h2> */}
      </div>
    </div>
  );
};

export default ImageSlider;
