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

      // Si sube la pantalla (scroll hacia arriba), botones abajo (visibles)
      if (diff < 0) {
        setOffset(300);
        // Limpia el timeout para que no suban mientras subes
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          setOffset(0);
        }, 300);
      }

      // Si baja la pantalla (scroll hacia abajo), botones suben (ocultos)
      if (diff > 0) {
        setOffset(-800); // Ajusta este valor según el alto de tus botones
        // Cuando paras de scrollear, después de 300ms, bajan (rebote)
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
    <div
      className="fixed bottom-4 left-4 flex flex-col gap-1 z-50 transition-transform duration-300"
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
      <a
        href="https://wa.me/+5930969618902?text=¡Saludos!,%20Me%20interesa%20su%20servicio."
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
      >
        <div className="flex items-center gap-2 bg-white hover:bg-secondary rounded-full shadow-md px-4 py-2 transition-colors">
          <Image
            src="/whatsapp.png"
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
  );
};

export default FloatButtons;
