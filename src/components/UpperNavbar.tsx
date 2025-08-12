import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Great_Vibes } from "next/font/google";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

const logo =
  "https://res.cloudinary.com/dwowtb0ya/image/upload/v1750287409/lopgo%20dr/logoMujer_nvo70c.jpg"; // Replace with your actual logo path

const scriptFont = Great_Vibes({ subsets: ["latin"], weight: "400" });
const UpperNavbar = () => {
  return (
    <div className="w-full bg-background border-b border-black/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 h-auto md:h-24 items-center px-4 md:px-12 gap-4 text-black">
        {/* Columna izquierda: teléfono */}
        <div className="hidden md:flex items-center justify-start">
          <div className="flex gap-3 items-center text-black/80">
            <FaPhoneVolume className="text-xl" />
            <div className="text-sm text-left leading-tight">
              <p className="font-bold">Agenda tu cita ahora</p>
              <p>096 961 8902</p>
            </div>
          </div>
        </div>
        {/* Columna centro: logo + nombre */}
        <div className="w-full flex flex-row items-center justify-center gap-3 md:gap-4">
          <Link
            href="/"
            className="flex items-center justify-start"
            style={{ minWidth: 0 }}
          >
            <Image
              src={logo}
              alt="Logo Dr. Juan Yancha, Ginecólogo Obstreta Quito "
              width={60}
              height={32}
              className="object-contain"
              priority
              draggable={false}
            />
          </Link>
          <div className="h-16 w-[2px] bg-black mx-3" />
          <div className="whitespace-nowrap text-center">
            <h3 className={`${scriptFont.className} text-2xl md:text-3xl text-black leading-tight`}>Dr. Juan Yancha</h3>
            <p className="text-sm md:text-base font-medium text-black/90">Ginecólogo Obstetra</p>
            <p className="text-sm md:text-base font-medium text-black/90">Medicina Materna</p>
          </div>
        </div>
        {/* Columna derecha: email + botón */}
        <div className="hidden md:flex flex-col items-end justify-center gap-2">
          <div className="flex items-center gap-2 text-black/80 leading-tight">
            <MdMarkEmailUnread className="text-xl" />
            <div className="text-right">
              <p className="text-sm font-bold">Envíanos tus preguntas</p>
              <p className="text-sm">juanyancha@gmail.com</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UpperNavbar;