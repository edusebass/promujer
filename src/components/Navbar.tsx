"use client";
import React, { useState } from "react";
import CustomLink from "./CustomLink";
import DropdownMenu from "./DropdownMenu";
import {
  quiropraxia,
  praxisvertebral,
  tkemocional,
  fisioterapia,
} from "@/constants/servicios_lista";
import Link from "next/link";
import Image from "next/image";
import NavbarMoviles from "./NavbarMoviles";

const Navbar = () => {
  const [isQuiropraxiaOpen, setIsQuiropraxiaOpen] = useState(false);
  const [isPraxisVertebralOpen, setIsPraxisVertebralOpen] = useState(false);
  const [isTkEmocionalOpen, setIsTkEmocionalOpen] = useState(false);
  const [isOtrosServiciosOpen, setIsOtrosServiciosOpen] = useState(false);
  const [isFisioterapiaOpen, setIsFisioterapiaOpen] = useState(false);
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

  const logo =
    "https://res.cloudinary.com/ds41xxspf/image/upload/v1721864671/termoasis/WhatsApp_Image_2024-07-23_at_13.47.22-removebg-preview_2_2_vng5mp.png";

  const logoNavbar =
    "https://res.cloudinary.com/ds41xxspf/image/upload/v1721959811/horizontal_n3nhyy.png";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="w-full h-[55px] justify-betweenpx-8 sm:px-16 md:px-16  font-normal flex items-center justify-between sticky top-0 z-50 bg-secondary select-none text-sm shadow-md">
      <nav className="justify-start items-center flex gap-3 sm:gap-10 w-full">
        <Link href="/" className="md:hidden flex">
          <Image
            src={logoNavbar}
            alt="Logo Termo Oasis"
            width={150}
            height={150}
            className="py-2 object-contain"
            priority
            draggable={false}
          />
        </Link>

        <CustomLink href="/" title="INICIO" className="hidden md:flex" />
        <div className="hidden md:flex gap-9">
          <div
            onMouseEnter={() => handleMouseEnter(setIsFisioterapiaOpen)}
            onMouseLeave={() => handleMouseLeave(setIsFisioterapiaOpen)}
          >
            <DropdownMenu
              title="FISIOTERAPIA"
              data={fisioterapia}
              open={isFisioterapiaOpen}
              setOpen={setIsFisioterapiaOpen}
            />
          </div>

          <div
            onMouseEnter={() => handleMouseEnter(setIsQuiropraxiaOpen)}
            onMouseLeave={() => handleMouseLeave(setIsQuiropraxiaOpen)}
          >
            <DropdownMenu
              title="QUIROPRAXIA"
              data={quiropraxia}
              open={isQuiropraxiaOpen}
              setOpen={setIsQuiropraxiaOpen}
            />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(setIsPraxisVertebralOpen)}
            onMouseLeave={() => handleMouseLeave(setIsPraxisVertebralOpen)}
          >
            <DropdownMenu
              title="PRAXIS VERTEBRAL"
              data={praxisvertebral}
              open={isPraxisVertebralOpen}
              setOpen={setIsPraxisVertebralOpen}
            />
          </div>
          <div
            onMouseEnter={() => handleMouseEnter(setIsTkEmocionalOpen)}
            onMouseLeave={() => handleMouseLeave(setIsTkEmocionalOpen)}
          >
            <DropdownMenu
              title="TK EMOCIONAL"
              data={tkemocional}
              open={isTkEmocionalOpen}
              setOpen={setIsTkEmocionalOpen}
            />
          </div>

        </div>
        <CustomLink
          href="/contacto"
          title="CONTACTO"
          classNameText="hover:text-colorDropdown hidden md:block"
        />
        <CustomLink
          href="/productos"
          title="PRODUCTOS"
          classNameText="hover:text-colorDropdown hidden md:block"
        />
        <button className="md:hidden flex items-center gap-2 bg-colorButton h-full py-1  ">
          <p className=" text-sm font-semibold text-SECONDARY px-2">
            <a
              target="_blank"
              href="https://wa.me/+5930995129878?text=¡Saludos!,%20Me%20interesa%20agendar%20una%20cita."
            >
              Pedir cita
            </a>
          </p>
        </button>
        <button
          className="md:hidden flex pr-7 gap-2 "
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          <p className="text-primary text-base font-bold">MENU</p>
        </button>
      </nav>
      {isMobileMenuOpen && (
        <NavbarMoviles toggleMobileMenu={toggleMobileMenu} />
      )}
    </header>
  );
};

export default Navbar;
