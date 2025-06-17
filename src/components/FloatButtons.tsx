"use client";
import Image from "next/image";
import { Fab } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

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
        setOffset(900); // Solo los sube un poco, no fuera de pantalla
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          setOffset(0);
        }, 300);
      }

      // Si baja la pantalla (scroll hacia abajo), botones bajan (ocultos)
      if (diff > 0) {
        setOffset(120); // Solo los baja un poco, no fuera de pantalla
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
        className="fixed bottom-1 transition-transform duration-300"
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

      {/* Sociales, Maps y Phone a la derecha */}
      <div
        className="fixed top-16 right-2 flex flex-col gap-1 z-50 transition-transform duration-300"
        style={{
          transform: `translateY(${-offset}px)`,
        }}
      >
        {/* Instagram */}
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white hover:bg-secondary rounded-full shadow-md p-2 transition-colors">
            <Image
              src="/instagram.webp"
              alt="Instagram"
              width={24}
              height={24}
              draggable={false}
            />
          </div>
        </a>
        {/* Facebook (más grande) */}
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-white hover:bg-secondary rounded-full shadow-md p-2 transition-colors">
            <Image
              src="/facebook.png"
              alt="Facebook"
              width={32}
              height={32}
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
          <Fab color="primary" className="bg-white hover:bg-secondary" size="small">
            <Image
              src="/maps.png"
              alt="Google Maps"
              width={24}
              height={24}
              draggable={false}
            />
          </Fab>
        </a>
        {/* Teléfono */}
        <a href="tel:+5930969618902">
          <Fab color="primary" className="bg-white hover:bg-secondary" size="small">
            <Image
              src="/phone.png"
              alt="Llamar"
              width={24}
              height={24}
              draggable={false}
            />
          </Fab>
        </a>
      </div>
    </>
  );
};

export default FloatButtons;