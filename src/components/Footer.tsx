import React from "react";
import Image from "next/image";
import CustomLink from "./CustomLink";
import SocialIcon from "./SocialIcon";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const logo =
  "https://res.cloudinary.com/ds41xxspf/image/upload/v1721959811/horizontal_n3nhyy.png";

const Footer = () => {
  return (
    <footer className="bg-primary w-full">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 flex flex-col justify-center">
            <a
              href="https://flowbite.com/"
              className="flex justify-center items-center"
            >
              <img src={logo} className="h-16 me-3" alt="FlowBite Logo" />
            </a>
            <span className="self-center text-center text-xl font-sans font-medium whitespace-nowrap text-secondary ">
              Manos que curan con amor
            </span>
          </div>
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
          <div className="flex  items-center p-3 justify-center mt-3 md:h-11 bg-colorButton hover:bg-colorButton/95 rounded-lg md:px-5 md:py-2 cursor-pointer">
            <a
              className="text-secondary"
              target="_blank"
              href="https://wa.me/+5930995129878?text=¡Saludos!,%20Me%20interesa%20su%20servicio."
            >
              PEDIR CITA
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-secondary sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              TERMO OASIS™
            </a>
            . Todos los derechos reservados
          </span>
          {/* redes sociales */}
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <div className="w-full flex justify-center items-end gap-11 md:gap-4">
              <SocialIcon
                href="https://termoasis.vercel.app/"
                title="Facebook"
                className="text-secondary"
              >
                <FaFacebook className="text-sky-500 text-3xl" />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/termo_oasis/"
                title="Instagram"
                className="text-secondary"
              >
                <FaInstagram className="text-colorDropdown text-3xl" />
              </SocialIcon>
              <SocialIcon
                href="https://www.tiktok.com/@termooasis"
                title="TikTok"
                className="text-secondary"
              >
                <FaTiktok className="text-black text-3xl" />
              </SocialIcon>
              <SocialIcon
                href="https://termoasis.vercel.app/"
                title="Whatsapp"
                className="text-secondary"
              >
                <FaWhatsapp className="text-green-500 text-3xl" />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
