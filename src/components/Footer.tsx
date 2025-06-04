import React from "react";
import Image from "next/image";
import CustomLink from "./CustomLink";
import SocialIcon from "./SocialIcon";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const logo =
  "https://res.cloudinary.com/ds41xxspf/image/upload/v1721959811/horizontal_n3nhyy.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary w-full relative overflow-hidden rounded-b-2xl">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">




            <div className="flex flex-col items-center p-3 justify-center mt-3 md:h-16 bg-background hover:bg-colorButton/95 rounded-lg md:px-5 md:py-2 cursor-pointer">
              <a
                className="flex flex-col items-center text-black no-underline"
                target="_blank"
                href="https://wa.me/+5930995129878?text=¡Saludos!,%20Me%20interesa%20su%20servicio."
              >
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-green-600 text-lg" />
                  <span className="font-semibold">PROGRAME UNA CITA</span>
                </div>
                <span className="text-xs text-gray-700 mt-1">0995129878</span>
              </a>
            </div>
            <div className="flex flex-col items-center p-3 justify-center mt-3 md:h-16 bg-background hover:bg-colorButton/95 rounded-lg md:px-5 md:py-2 cursor-pointer">
              <a
                className="flex flex-col items-center text-black no-underline"
                target="_blank"
                href="https://maps.app.goo.gl/DFFTRT7eG9E7xFNL7"
              >
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-600 text-lg" />
                  <span className="font-semibold">UBICACIÓN</span>
                </div>
                <span className="text-xs text-gray-700 mt-1 text-center">
                  Consultorio Parque Promujer
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center p-3 justify-center mt-3 bg-background rounded-lg md:px-5 md:py-2">
            <span className="font-semibold mb-2 text-black">REDES SOCIALES</span>
            <div className="flex flex-row gap-4">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-black text-2xl hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-xs text-white sm:text-center dark:text-gray-400">
              © {new Date().getFullYear()}{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                DR. JUAN YANCHA
              </a>
              . Todos los derechos reservados
            </span>
          </div>
        </div>

      </footer>
      <div>
        <br />
        <br />
      </div>
    </>

  );
};

export default Footer;
