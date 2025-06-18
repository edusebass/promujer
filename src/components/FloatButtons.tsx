"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FloatButtons = () => {
  const [offset, setOffset] = useState(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(0);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => setOffset(0), 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Botón WhatsApp a la izquierda */}
      <div
        className="fixed bottom-4 left-1 z-50 transition-transform duration-300"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <a
          href="https://wa.me/+5930969618902?text=¡Saludos!,%20Me%20interesa%20su%20servicio."
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <div className="flex items-center gap-2 bg-black text-white hover:bg-white rounded-full shadow-md px-2 py-1 transition-colors">
            <Image
              src="/whatsaap.jpg"
              alt="WhatsApp"
              width={24}
              height={24}
              draggable={false}
            />
            <span className="font-semibold text-white text-xs whitespace-nowrap">
              PROGRAME SU CITA
            </span>
          </div>
        </a>
      </div>

      {/* Botones sociales, Maps y Phone a la derecha, más arriba */}
      <div
        className="fixed top-[450px] right-1 flex flex-col gap-1 z-50 transition-transform duration-300"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {/* Instagram */}
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white hover:bg-white rounded-full shadow-md p-2 transition-colors">
            <Image
              src="/instagram.webp"
              alt="Instagram"
              width={24}
              height={24}
              draggable={false}
            />
          </div>
        </a>
        {/* Facebook */}
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white hover:bg-white rounded-full shadow-md p-2 transition-colors">
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={24}
              height={24}
              draggable={false}
            />
          </div>
        </a>
        {/* Google Maps */}
        <a
          href="https://maps.app.goo.gl/DFFTRT7eG9E7xFNL7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white hover:bg-white rounded-full shadow-md p-2 transition-colors">
            <Image
              src="/maps.png"
              alt="Google Maps"
              width={24}
              height={24}
              draggable={false}
            />
          </div>
        </a>
        {/* Teléfono */}
        <a href="tel:+5930969618902">
          <div className="bg-white hover:bg-white rounded-full shadow-md p-2 transition-colors">
            <Image
              src="/phone.png"
              alt="Llamar"
              width={24}
              height={24}
              draggable={false}
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default FloatButtons;