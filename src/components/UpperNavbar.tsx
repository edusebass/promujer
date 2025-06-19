import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

const logo =
  "https://res.cloudinary.com/dwowtb0ya/image/upload/v1750287409/lopgo%20dr/logoMujer_nvo70c.jpg"; // Replace with your actual logo path
const UpperNavbar = () => {
  return (
    <div className="w-full flex-col md:flex-row h-32 flex justify-center items-center px-4 md:px-12 gap-4">
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <div className="hidden md:flex gap-7 justify-around items-center border-colorText.Primary ">
            <FaPhoneVolume className="text-xl" />
            <div className="text-sm text-center">
              <p className="font-bold">Agenda tu cita ahora</p>
              <p>096 961 8902</p>
            </div>
          </div>
          <div className="hidden md:flex gap-7 justify-center items-center pl-7">
            <MdMarkEmailUnread className="text-xl" />
            <div className="text-sm text-center">
              <p className="font-bold">Envíanos tus preguntas</p>
              <p>termoasis@gmail.com</p>
            </div>
          </div>
        </div>
        {/* Logo y título alineados */}
        <div className="w-full flex flex-row items-center justify-start gap-3 md:gap-4">
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
          {/* Línea negra vertical */}
          <div className="h-16 w-[2px] bg-black mx-2" />
          <h3 className="text-base md:text-lg font-semibold text-colorText-Primary whitespace-nowrap">
            <span className="text-black">DR. JUAN YANCHA </span> <br /> Ginecólogo Obstetra
            <br />Medicina Materna
          </h3>
        </div>
      </div>
      {/* Botón solo en desktop */}
      <div className="w-full flex flex-col-reverse justify-center items-center gap-5">
        <a
          href={`https://wa.me/+5930969618902?text=¡Saludos!,%20Me%20interesa%20su%20servicio.`}
          target="_BLANK"
          className="hidden md:block bg-colorButton py-3 px-7 rounded-xl font-bold text-colorText.Primary cursor-pointer transition duration-500 ease-in-out hover:bg-colorButton/90 hover:text-colorText.Primary/90 uppercase italic animate-pulse"
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
};

export default UpperNavbar;