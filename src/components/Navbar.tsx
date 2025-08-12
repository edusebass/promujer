
"use client";
import React, { useState } from "react";
import CustomLink from "./CustomLink";
import DropdownMenu from "./DropdownMenu";
import {
  ginecologia,
  obstetricia,
  cirugias,
  ecografias,
  informacion,
} from "@/constants/servicios_lista";
import Link from "next/link";
import Image from "next/image";
import NavbarMoviles from "./NavbarMoviles";

const Navbar = () => {
  const [isginecologiaOpen, setIsginecologiaOpen] = useState(false);
  const [isobstetriciaOpen, setIsobstetriciaOpen] = useState(false);
  const [iscirugiasOpen, setIscirugiasOpen] = useState(false);
  const [isecografiasOpen, setIsecografiasOpen] = useState(false);
  const [isinformacionOpen, setIsinformacionOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setOpen(true);
  };

  const handleMouseLeave = (
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setOpen(false);
  };

  const logoNavbar = "/logo.jpg";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="w-full h-[55px] md:h-[62px] justify-betweenpx-8 sm:px-8 md:px-12 font-normal flex items-center justify-between sticky top-0 z-40 bg-white text-black shadow-md border-b border-black/10 pr-2">
      <nav className="max-w-7xl mx-auto justify-between items-center flex gap-3 sm:gap-10 w-full">
        <Link href="/" className="md:hidden flex pl-2 ">
          <Image
            src={logoNavbar}
            alt="Logo "
            width={150}
            height={150}
            className="py-2 object-contain "
            priority
            draggable={false}
          />
        </Link>

        <CustomLink href="/" title="INICIO" className="hidden md:flex font-semibold tracking-wide" classNameText="text-black hover:text-secondary" />
        <div className="hidden md:flex gap-8">
          <div
            onMouseEnter={() => handleMouseEnter(setIsginecologiaOpen)}
            onMouseLeave={() => handleMouseLeave(setIsginecologiaOpen)}
          >
            <DropdownMenu
              title="GINECOLOGÍA"
              data={ginecologia}
              open={isginecologiaOpen}
              setOpen={setIsginecologiaOpen}
            />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(setIsobstetriciaOpen)}
            onMouseLeave={() => handleMouseLeave(setIsobstetriciaOpen)}
          >
            <DropdownMenu
              title="OBSTETRICIA"
              data={obstetricia}
              open={isobstetriciaOpen}
              setOpen={setIsobstetriciaOpen}
            />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(setIscirugiasOpen)}
            onMouseLeave={() => handleMouseLeave(setIscirugiasOpen)}
          >
            <DropdownMenu
              title="CIRUGÍAS"
              data={cirugias}
              open={iscirugiasOpen}
              setOpen={setIscirugiasOpen}
            />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(setIsecografiasOpen)}
            onMouseLeave={() => handleMouseLeave(setIsecografiasOpen)}
          >
            <DropdownMenu
              title="ECOGRAFÍAS"
              data={ecografias}
              open={isecografiasOpen}
              setOpen={setIsecografiasOpen}
            />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(setIsinformacionOpen)}
            onMouseLeave={() => handleMouseLeave(setIsinformacionOpen)}
          >
            <DropdownMenu
              title="INFORMACIÓN"
              data={informacion}
              open={isinformacionOpen}
              setOpen={setIsinformacionOpen}
            />
          </div>
        </div>

        <button className="md:hidden flex items-center gap-2 bg-button h-full rounded-lg px-4 hover:bg-button/90 transition-colors duration-300">
          <p className=" text-sm font-semibold text-SECONDARY px-2">
            <a
              target="_blank"
              href="https://wa.me/+5930969618902?text=¡Saludos!,%20Me%20interesa%20agendar%20una%20cita."
            >
              Solicite una cita
            </a>
          </p>
        </button>
        <button
          className="md:hidden flex pr-4 py-2 p gap-2 text-text-primary bg-primary/90 rounded-lg"
          onClick={toggleMobileMenu}
        >
          <span className="relative ml-4 w-6 h-6 ">
            <span
              className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transition-all duration-300
                ${isMobileMenuOpen ? "rotate-45 top-3" : "-translate-y-2"}
              `}
            />
            <span
              className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transition-all duration-300
                ${isMobileMenuOpen ? "opacity-0" : ""}
              `}
            />
            <span
              className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transition-all duration-300
                ${isMobileMenuOpen ? "-rotate-45 top-3" : "translate-y-2"}
              `}
            />
          </span>
        </button>
      </nav>
      <NavbarMoviles isOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
    </header>
  );
};

export default Navbar;
