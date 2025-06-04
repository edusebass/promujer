import React from "react";
import Image from "next/image";
import CustomLink from "./CustomLink";
import SocialIcon from "./SocialIcon";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const logo =
  "https://res.cloudinary.com/ds41xxspf/image/upload/v1721959811/horizontal_n3nhyy.png";

const Footer = () => {
  return (
    <footer className="bg-primary w-full">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-secondary uppercase ">
                CENTRO
              </h2>
              <ul className="text-colorDropdown font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline text-sm">
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline text-sm"
                  >
                    Productos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-secondary uppercase">
                Contactanos
              </h2>
              <ul className="text-colorDropdown font-medium">
                <li className="mb-4 text-xs">
                  <a href="/" className="hover:underline text-sm ">
                    0995129878  |  0987140893  |  0995026093  |  (02)2622545
                  </a>
                </li>
                {/* <li>
                  <a href="/" className="hover:underline">
                    Discord
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
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
  );
};

export default Footer;
