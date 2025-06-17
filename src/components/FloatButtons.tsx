"use client";
import Fab from "@mui/material/Fab";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const FloatButtons = () => {
  const [offset, setOffset] = useState(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const diff = currentScroll - lastScroll.current;

      if (diff < 0) {
        setOffset(300);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          setOffset(0);
        }, 300);
      }
      if (diff > 0) {
        setOffset(-800);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          setOffset(0);
        }, 500);
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp a la izquierda */}
      <div
        className="fixed bottom-40 left-2 z-50 transition-transform duration-300"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        <a
          href="https://wa.me/+5930969618902?text=¡Saludos!,%20Me%20interesa%20su%20servicio."
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          <div className="flex items-center gap-2 bg-white hover:bg-secondary rounded-full shadow-md px-4 py-2 transition-colors">
            <Image
              src="/whatsaap.jpg"
              alt="WhatsApp"
              width={32}
              height={32}
              draggable={false}
            />
            <span className="font-semibold text-green-700 text-base whitespace-nowrap">
              Programa una cita
            </span>
          </div>
        </a>
      </div>

      {/* Google Maps y Teléfono a la derecha */}
      <div
        className="fixed bottom-1/4 right-20 flex flex-col gap-1 z-50 transition-transform duration-300"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        <a
          href="https://maps.app.goo.gl/DFFTRT7eG9E7xFNL7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Fab color="primary" className="bg-white hover:bg-secondary">
            <Image
              src="/maps.png"
              alt="Google Maps"
              width={32}
              height={32}
              draggable={false}
            />
          </Fab>
        </a>
        <a href="tel:+5930969618902">
          <Fab color="primary" className="bg-white hover:bg-secondary">
            <Image
              src="/phone.png"
              alt="Llamar"
              width={32}
              height={32}
              draggable={false}
            />
          </Fab>
        </a>
      </div>
    </>
  );
};

export default FloatButtons;