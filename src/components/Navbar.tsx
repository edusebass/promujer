
"use client";
import React, { useState } from "react";
import CustomLink from "./CustomLink";
import DropdownMenu from "./DropdownMenu";
import {
  ginecologia,
  obstetricia,
} from "@/constants/servicios_lista";
import Link from "next/link";
import Image from "next/image";
import NavbarMoviles from "./NavbarMoviles";

const Navbar = () => {
  const [isginecologiaOpen, setIsginecologiaOpen] = useState(false);
  const [isobstetriciaOpen, setIsobstetriciaOpen] = useState(false);
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


  const logoNavbar =
    "/logo.jpg";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="w-full h-[55px] justify-betweenpx-8 sm:px-16 md:px-16  font-normal flex items-center justify-between sticky top-0 z-50 bg-secondary select-none text-sm shadow-md">
      <nav className="justify-start items-center flex gap-3 sm:gap-10 w-full">
        <Link href="/" className="md:hidden flex">
          <Image
            src={logoNavbar}
            alt="Logo "
            width={150}
            height={150}
            className="py-2 object-contain"
            priority
            draggable={false}
          />
        </Link>

        <CustomLink href="/" title="INICIO" className="hidden md:flex " />
        <div className="hidden md:flex gap-9">


          <div
            onMouseEnter={() => handleMouseEnter(setIsginecologiaOpen)}
            onMouseLeave={() => handleMouseLeave(setIsginecologiaOpen)}
          >
            <DropdownMenu
              title="ginecologia"
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
              title="PRAXIS VERTEBRAL"
              data={obstetricia}
              open={isobstetriciaOpen}
              setOpen={setIsobstetriciaOpen}
            />
          </div>


        </div>
        <CustomLink
          href="/contacto"
          title="CONTACTO"
          classNameText=" hidden md:block"
        />

        <button className="md:hidden flex items-center gap-2 bg-button h-full py-1  ">
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
          className="md:hidden flex pr-7 gap-2 text-text-primary"
          onClick={toggleMobileMenu}
        >
          <span className="relative w-6 h-6">
            {/* Hamburger */}
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
          <p className="text-text-primary text-base font-bold">
            {isMobileMenuOpen ? "CERRAR" : "MENU"}
          </p>
        </button>
      </nav>
      <NavbarMoviles isOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
    </header>
  );
};

export default Navbar;
