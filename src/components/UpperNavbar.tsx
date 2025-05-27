import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialIcon from "./SocialIcon";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaCircleInfo, FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

const logo =
  "https://res.cloudinary.com/ds41xxspf/image/upload/v1721864671/termoasis/WhatsApp_Image_2024-07-23_at_13.47.22-removebg-preview_2_2_vng5mp.png";

const UpperNavbar = () => {
  return (
    <div className="w-full flex-col md:flex-row h-32 flex justify-center items-center px-12 gap-4">
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <div className="hidden md:flex gap-7 justify-around items-center border-colorText.Primary ">
            <FaPhoneVolume className="text-xl" />
            <div className="text-sm text-center">
              <p className="font-bold">Agenda tu cita ahora</p>
              <p>099 512 9878</p>
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
        <h3 className="text-center text-sm italic">
          Quito, Estadio del Aucas, estación del metro Morán Valverde, calle
          Apuela S28-180, 170606
        </h3>

      </div>

      <Link
        href="/"
        className="hidden md:flex items-center justify-center w-full max-w-[200px] h-full object-cover relative"
      >
        <Image
          src={logo}
          alt="Logo Termo Oasis"
          fill
          className="py-2 object-contain"
          priority
          draggable={false}
        />
      </Link>
      <div className="w-full flex flex-col-reverse justify-center items-center gap-5">
        <a
          href={`https://wa.me/+5930995129878?text=¡Saludos!,%20Me%20interesa%20su%20servicio.`}
          target="_BLANK"
          className="hidden md:block bg-colorButton py-3 px-7 rounded-xl font-bold text-colorText.Primary cursor-pointer transition duration-500 ease-in-out hover:bg-colorButton/90 hover:text-colorText.Primary/90 uppercase italic animate-pulse"
        >
          Contáctanos
        </a>
        <div className="w-full flex justify-center items-end gap-11 md:gap-4">
          <SocialIcon
            href="https://www.instagram.com/termo_oasis/"
            title="Instagram"
          >
            <FaInstagram className="text-colorDropdown" />
          </SocialIcon>
          <SocialIcon href="https://www.tiktok.com/@termooasis" title="TikTok">
            <FaTiktok className="text-black" />
          </SocialIcon>
          <SocialIcon
            href="https://wa.me/+5930995129878?text=¡Saludos!,%20Me%20interesa%20su%20servicio."
            title="Whatsapp"
          >
            <FaWhatsapp className="text-green-500" />
          </SocialIcon>
        </div>
      </div>
    </div>
  );
};

export default UpperNavbar;
