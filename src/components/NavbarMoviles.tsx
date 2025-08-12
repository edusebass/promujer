"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import {
  ginecologia,
  obstetricia,
  cirugias,
  ecografias,
  informacion,
} from "@/constants/servicios_lista";

const NavbarMoviles = ({
  isOpen,
  toggleMobileMenu,
}: {
  isOpen: boolean;
  toggleMobileMenu: () => void;
}) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [instantClose, setInstantClose] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleScroll = () => {
      setInstantClose(true);
      toggleMobileMenu();
      setTimeout(() => setInstantClose(false), 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, toggleMobileMenu]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubMenu = (menu: string) => {
    setOpenSubMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const handleLinkClick = () => {
    toggleMobileMenu();
  };

  return (
    <div
      className={`
        md:hidden fixed ${scrolled ? "top-[55px]" : "top-[180px]"} left-0 w-full z-40 bg-white text-black shadow-md
        ${instantClose ? "" : "transition-all duration-500 ease-in-out"}
        ${isOpen ? "max-h-[100vh] opacity-100 translate-y-0 pointer-events-auto" : "max-h-0 opacity-0 -translate-y-8 pointer-events-none"}
        overflow-hidden
      `}
      style={{ transitionProperty: instantClose ? "none" : "max-height, opacity, transform" }}
    >
      <div className="flex flex-col items-start p-4">
        <div className="pb-2 border-b border-black/10 w-full">
          <Link href="/" className="py-2" onClick={handleLinkClick}>
            INICIO
          </Link>
        </div>

        <div className="py-2 w-full">
          <div
            className={`flex flex-row justify-start pb-2 border-b border-black/10 items-center ${openSubMenu === "ginecologia" ? "bg-primary/5 text-SECONDARY p-2" : ""
              }`}
          >
            <button
              className="w-full text-left"
              onClick={() => handleSubMenu("ginecologia")}
            >
              GINECOLOGIA
            </button>
            <FaAngleDown
              className={`transform transition-transform duration-300 ${openSubMenu === "ginecologia" ? "rotate-180" : ""
                }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-1000 ${openSubMenu === "ginecologia" ? "max-h-screen" : "max-h-0"
              }`}
          >
            {openSubMenu === "ginecologia" && (
              <div className="pl-4">
                {ginecologia.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-1 pb-2 border-b border-black/10"
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
            className={`flex flex-row justify-start pb-2 border-b border-black/10 items-center ${openSubMenu === "obstetricia"
              ? "bg-primary/5 text-SECONDARY p-2"
              : ""
              }`}
          >
            <button
              className="w-full text-left"
              onClick={() => handleSubMenu("obstetricia")}
            >
              OBSTETRICIA
            </button>
            <FaAngleDown
              className={`transform transition-transform duration-300 ${openSubMenu === "obstetricia" ? "rotate-180" : ""
                }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-1000 ${openSubMenu === "obstetricia" ? "max-h-screen" : "max-h-0"
              }`}
          >
            {openSubMenu === "obstetricia" && (
              <div className="pl-4">
                {obstetricia.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-1 pb-2 border-b border-black/10"
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
            className={`flex flex-row justify-start pb-2 border-b border-black/10 items-center ${openSubMenu === "cirugias"
              ? "bg-primary/5 text-SECONDARY p-2"
              : ""
              }`}
          >
            <button
              className="w-full text-left"
              onClick={() => handleSubMenu("cirugias")}
            >
              CIRUGIAS
            </button>
            <FaAngleDown
              className={`transform transition-transform duration-300 ${openSubMenu === "cirugias" ? "rotate-180" : ""
                }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-1000 ${openSubMenu === "cirugias" ? "max-h-screen" : "max-h-0"
              }`}
          >
            {openSubMenu === "cirugias" && (
              <div className="pl-4">
                {cirugias.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-1 pb-2 border-b border-black/10"
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
            className={`flex flex-row justify-start pb-2 border-b border-black/10 items-center ${openSubMenu === "ecografias"
              ? "bg-primary/5 text-SECONDARY p-2"
              : ""
              }`}
          >
            <button
              className="w-full text-left"
              onClick={() => handleSubMenu("ecografias")}
            >
              ECOGRAFIAS
            </button>
            <FaAngleDown
              className={`transform transition-transform duration-300 ${openSubMenu === "ecografias" ? "rotate-180" : ""
                }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-1000 ${openSubMenu === "ecografias" ? "max-h-screen" : "max-h-0"
              }`}
          >
            {openSubMenu === "ecografias" && (
              <div className="pl-4">
                {ecografias.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-1 pb-2 border-b border-black/10"
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
            className={`flex flex-row justify-start pb-2 border-b border-black/10 items-center ${openSubMenu === "informacion"
              ? "bg-primary/5 text-SECONDARY p-2"
              : ""
              }`}
          >
            <button
              className="w-full text-left"
              onClick={() => handleSubMenu("informacion")}
            >
              INFORMACION
            </button>
            <FaAngleDown
              className={`transform transition-transform duration-300 ${openSubMenu === "informacion" ? "rotate-180" : ""
                }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-1000 ${openSubMenu === "informacion" ? "max-h-screen" : "max-h-0"
              }`}
          >
            {openSubMenu === "informacion" && (
              <div className="pl-4">
                {informacion.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-1 pb-2 border-b border-black/10"
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-primary flex justify-center items-center animate-zoom">
        <a
          target="_blank"
          href="https://wa.me/+5930969618902?text=¡Saludos!,%20Me%20interesa%20agendar%20una%20cita."
          className="text-center text-white m-3 font-semibold text-lg"
        >
          SOLICITE UNA CITA
        </a>
      </div>
    </div>
  );
};

export default NavbarMoviles;
