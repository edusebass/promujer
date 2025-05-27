"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import {
  quiropraxia,
  praxisvertebral,
  tkemocional,
  fisioterapia,
} from "@/constants/servicios_lista";

const NavbarMoviles = ({
  toggleMobileMenu,
}: {
  toggleMobileMenu: () => void;
}) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubMenu = (menu: string) => {
    setOpenSubMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const handleLinkClick = () => {
    toggleMobileMenu();
  };

  return (
    <div className="md:hidden absolute top-[55px] left-0 w-full bg-secondary shadow-md z-50">
      <div className="flex flex-col items-start p-4">
        <div className="pb-2 border-b border-white w-full">
          <Link href="/" className="py-2" onClick={handleLinkClick}>
            INICIO
          </Link>
        </div>

        <div className="py-2 w-full">
          <div
            className={`flex flex-row justify-start pb-2 border-b border-white items-center ${openSubMenu === "fisioterapia"
              ? "bg-primary text-SECONDARY p-2"
              : ""
              }`}
          >
            <button
              className="w-full text-left"
              onClick={() => handleSubMenu("fisioterapia")}
            >
              FISIOTERAPIA
            </button>
            <FaAngleDown
              className={`transform transition-transform duration-300 ${openSubMenu === "fisioterapia" ? "rotate-180" : ""
                }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-1000 ${openSubMenu === "fisioterapia" ? "max-h-screen" : "max-h-0"
              }`}
          >
            {openSubMenu === "fisioterapia" && (
              <div className="pl-4">
                {fisioterapia.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-1 pb-2 border-b border-white"
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="py-2 w-full">
          <div
            className={`flex flex-row justify-start pb-2 border-b border-white items-center ${openSubMenu === "quiropraxia" ? "bg-primary text-SECONDARY p-2" : ""
              }`}
          >
            <button
              className="w-full text-left"
              onClick={() => handleSubMenu("quiropraxia")}
            >
              QUIROPRAXIA
            </button>
            <FaAngleDown
              className={`transform transition-transform duration-300 ${openSubMenu === "quiropraxia" ? "rotate-180" : ""
                }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-1000 ${openSubMenu === "quiropraxia" ? "max-h-screen" : "max-h-0"
              }`}
          >
            {openSubMenu === "quiropraxia" && (
              <div className="pl-4">
                {quiropraxia.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-1 pb-2 border-b border-white"
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="py-2 w-full">
          <div
            className={`flex flex-row justify-start pb-2 border-b border-white items-center ${openSubMenu === "praxisVertebral"
              ? "bg-primary text-SECONDARY p-2"
              : ""
              }`}
          >
            <button
              className="w-full text-left"
              onClick={() => handleSubMenu("praxisVertebral")}
            >
              PRAXIS VERTEBRAL
            </button>
            <FaAngleDown
              className={`transform transition-transform duration-300 ${openSubMenu === "praxisVertebral" ? "rotate-180" : ""
                }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-1000 ${openSubMenu === "praxisVertebral" ? "max-h-screen" : "max-h-0"
              }`}
          >
            {openSubMenu === "praxisVertebral" && (
              <div className="pl-4">
                {praxisvertebral.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-1 pb-2 border-b border-white"
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="py-2 w-full">
          <div
            className={`flex flex-row justify-start pb-2 border-b border-white items-center ${openSubMenu === "tkEmocional" ? "bg-primary text-SECONDARY p-2" : ""
              }`}
          >
            <button
              className="w-full text-left"
              onClick={() => handleSubMenu("tkEmocional")}
            >
              TK EMOCIONAL
            </button>
            <FaAngleDown
              className={`transform transition-transform duration-300 ${openSubMenu === "tkEmocional" ? "rotate-180" : ""
                }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-1000 ${openSubMenu === "tkEmocional" ? "max-h-screen" : "max-h-0"
              }`}
          >
            {openSubMenu === "tkEmocional" && (
              <div className="pl-4">
                {tkemocional.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-1 pb-2 border-b border-white"
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="py-2 w-full">
          <div
            className={`flex flex-row justify-start pb-2 border-b border-white items-center ${openSubMenu === "otrosServicios"
              ? "bg-primary text-SECONDARY p-2"
              : ""
              }`}
          >
            <button
              className="w-full text-left"
              onClick={() => handleSubMenu("otrosServicios")}
            >
              OTROS SERVICIOS
            </button>
            <FaAngleDown
              className={`transform transition-transform duration-300 ${openSubMenu === "otrosServicios" ? "rotate-180" : ""
                }`}
            />
          </div>

        </div>
        <div className="pb-2 border-b pt-2 border-white w-full">
          <Link href="/contacto" className="py-2" onClick={handleLinkClick}>
            CONTACTO
          </Link>
        </div>
        <div className="pb-2 border-b pt-2 text-sm border-white w-full">
          <Link href="/productos" className="py-2" onClick={handleLinkClick}>
            PRODUCTOS
          </Link>
        </div>
      </div>
      <div className="bg-colorButton flex justify-center items-center">
        <a
          target="_blank"
          href="https://wa.me/+5930995129878?text=¡Saludos!,%20Me%20interesa%20agendar%20una%20cita."
          className="text-center text-SECONDARY m-3 font-semibold text-lg"
        >
          PEDIR CITA
        </a>
      </div>
    </div>
  );
};

export default NavbarMoviles;
