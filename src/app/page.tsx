"use client";
import GridServicios from "@/components/GridServicios";
import RandomImage from "@/components/RandomImage";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import { ecografias, ginecologia, obstetricia, otros } from "@/constants/servicios_lista";
import PerfilComponent from "@/components/PerfilComponent";
import Image from "next/image";
import GridExtra from "@/components/GridExtra";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const imagesAndTitles = [
    {
      image:
        "url(https://res.cloudinary.com/dwowtb0ya/image/upload/v1750174040/dr/Captura_de_pantalla_2025-06-17_101754_1_hvapyy.jpg)",
    },
    {
      image:
        "url(https://res.cloudinary.com/dwowtb0ya/image/upload/v1750174748/dr/Captura_de_pantalla_2025-06-17_103856_hqfjrn.png)",
      title2: "Partos & Cesareas",
    },
    {
      image:
        "url(https://res.cloudinary.com/dwowtb0ya/image/upload/v1750175129/dr/Captura_de_pantalla_2025-06-17_104516_gyb8yl.png)",
      title2: "Cirugías Ginecológicas",
    },
    {
      image:
        "url(https://res.cloudinary.com/dwowtb0ya/image/upload/v1750175285/dr/Ecografia-3D-y-ecografia-4D_livjhy.png)",
      title2: "Ecografias",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Duraciones: 7s para la primera, 3.5s para las demás
  const delays = [4000, 5000, 5000, 4500];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesAndTitles.length);
    }, delays[currentIndex]);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const currentData = imagesAndTitles[currentIndex];

  // 1. Crea el ref
  const perfilRef = useRef<HTMLDivElement>(null);

  // Filtra los servicios específicos
  const consultaGinecologica = ginecologia.find(
    (item) => item.title.toLowerCase().includes("consulta ginecológica")
  );

  const controlPrenatal = obstetricia.find(
    (item) =>
      item.title.toLowerCase().includes("control prenatal") ||
      item.title.toLowerCase().includes("control del embarazo")
  );

  return (
    <>
      <Head>
        <title>PRO MUJER</title>
        <meta
          name="descripcion"
          content="Atención profesional en ginecología y obstetricia en Quito. Consulta ginecológica, control prenatal, ecografías y salud femenina integral con el Dr. Juan Yancha, especialista en el cuidado de la mujer."
        />
        <meta
          name="keywords"
          content="ginecología, obstetricia, ecografías, consulta ginecológica, control prenatal, salud femenina, Dr. Juan Yancha, Ginecólogo Quito, Obstetra Quito"
        />
        <meta name="author" content="Dr. Juan Yancha, Ginecólogo Obstetra Quito" />
        <link rel="canonical" href="https://www.drjuanyancha.com/" />
      </Head>


      {/* Carrusel con transición y overlay solo en las demás imágenes */}
      <section className="relative flex items-start justify-center w-full h-[340px] md:h-72 bg-cover bg-center overflow-hidden min-h-[340px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(12px)" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: currentData.image,
              backgroundSize: "cover",
              backgroundPosition: currentIndex === 0 ? "center 30%" : "center",
            }}
          />
        </AnimatePresence>
        {/* Overlay solo si NO es la primera imagen */}
        {currentIndex !== 0 && (
          <div className="absolute inset-0 bg-black opacity-5 transition-opacity duration-500"></div>
        )}
        <div
          className={`relative z-10 flex items-center justify-center flex-col w-full h-full ${currentIndex === 0 ? "pt-24" : "pt-10"
            }`}
        >
          {/* <h3 className="text-center text-3xl font-semibold text-white p-4 drop-shadow-lg">
            {currentData.? title1}
          </h3> */}
          <h3 className="text-center text-4xl font-bold text-white drop-shadow-2xl">
            {currentData.title2}
          </h3>
        </div>
      </section>
      {/* Médico Especialista */}
      <section className="flex flex-col items-start justify-start my-8 rounded-t-full bg-">
        <span className="text-lg font-bold text-black">
          MÉDICO ESPECIALISTA
        </span>
        <span className="text-2xl font-bold mt-2">Dr. Juan Yancha</span>
        <span className="text-base mt-1 text-start text-black">
          Especialista en Ginecología y Obstetricia
          <br />
          Subespecialista en Medicina Materno Fetal.
        </span>
        {/* Botón Perfil Académico */}
        <div className="w-full flex justify-start mt-4">
          <button
            className="flex items-center gap-2 bg-secondary text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-colorButton/90 transition"
            onClick={() => {
              perfilRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>
              {/* Icono usuario */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <p className="text-white">Perfil Académico</p>
          </button>
        </div>
      </section>


      {/* Servicios Específicos */}
      <section className="flex flex-col md:flex-row gap-6 my-8 items-center justify-center">
        {consultaGinecologica && (
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white max-w-xs">
            <Image
              src={consultaGinecologica.icon}
              alt={consultaGinecologica.title}
              width={80}
              height={80}
            />
            <h3 className="font-bold text-lg mt-2">
              {consultaGinecologica.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {consultaGinecologica.descripcion}
            </p>
          </div>
        )}
        {controlPrenatal && (
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white max-w-xs">
            <Image
              src={controlPrenatal.icon}
              alt={controlPrenatal.title}
              width={80}
              height={80}
            />
            <h3 className="font-bold text-lg mt-2">
              {controlPrenatal.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {controlPrenatal.descripcion}
            </p>
          </div>
        )}
        <div className="flex flex-col w-full items-center p-4 border rounded-lg shadow-lg bg-primary max-w-xs">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5759/5759940.png"
            alt="hola"
            width={80}
            height={80}
          />
          <h3 className="font-bold text-lg mt-2 text-white">
            Contacto Médico al cliente
          </h3>
          <p className="text-sm text-white mt-1">
            0986572316
          </p>
        </div>
      </section>

      {/* 2. Aplica el ref aquí */}
      <div ref={perfilRef}>
        <PerfilComponent />
      </div>
      <section className="flex flex-col  justify-start">
        {/* <h1 className="text-4xl mt-3 md:text-6xl font-extrabold text-center md:px-16 md:mt-3">
          PRO MUJER
        </h1> */}
        <h2 className="text-4xl mt-3 md:text-6xl font-bold text-center md:px-16 md:mt-3">
          ECOGRAFIAS
        </h2>
      </section>
      <GridExtra
        items={ecografias.map(({ title, href, icon, descripcion }) => ({
          title,
          description: descripcion,
          link: href,
          icon,
        }))}
      />

      {/* Servicios */}
      <section className="flex flex-col  justify-start">
        {/* <h1 className="text-4xl mt-3 md:text-6xl font-extrabold text-center md:px-16 md:mt-3">
          PRO MUJER
        </h1> */}
        <h2 className="text-4xl mt-3 md:text-6xl font-bold text-center md:px-16 md:mt-3">
          GINECOLOGIA & OBSTETRICIA
        </h2>
      </section>

      <section className="flex flex-col text-center">
        <h2 className="text-2xl mt-6">Servicios de ginecologia</h2>

        <GridServicios
          items={ginecologia.map(({ href, icon, descripcion, title }) => ({
            title,
            icon,
            description: descripcion,
            link: href,
          }))}
        />

        <RandomImage count={4} />

        <h2 className="text-2xl mt-6">Servicios de obstetricia</h2>
        <GridServicios
          items={obstetricia.map(({ title, href, icon, descripcion }) => ({
            title,
            link: href,
            description: descripcion,
            icon,
          }))}
        />
        <RandomImage count={4} />

        <h2 className="text-2xl mt-6">OTROS SERVICIOS</h2>
        <GridServicios
          items={otros.map(({ title, href, icon, descripcion }) => ({
            title,
            icon,
            description: descripcion,
            link: href,
          }))}
        />
        <RandomImage count={4} />

        <RandomImage count={4} />
      </section>

    </>
  );
}
