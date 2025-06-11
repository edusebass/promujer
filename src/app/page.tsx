"use client";
import GridServicios from "@/components/GridServicios";
import RandomImage from "@/components/RandomImage";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { ginecologia, obstetricia, otros } from "@/constants/servicios_lista";
import PerfilComponent from "@/components/PerfilComponent";

export default function Home() {
  const imagesAndTitles = [
    {
      image:
        "url(https://blogs.unitec.mx/hubfs/Imported_Blog_Media/fisioterapeuta-quiropractico-1-compressor-1.jpg)",
      title1: "Mas de 25000 pacientes atendidos",
      title2: "Obstetricia",
    },
    {
      image:
        "url(https://backbone.care/cdn/shop/articles/ginecologia_y_fisioterapia_1024x1024.png?v=1649423997)",
      title1: "Especializado en Mexico",
      title2: "Ginecologia",
    },
    {
      image:
        "url(https://cfisiomad.org/wp-content/uploads/2022/12/iStock-1291920859-1024x683.jpg)",
      title1: "Mas de 25 años de experiencia",
      title2: "Ginecologia y Obstetricia",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % imagesAndTitles.length
        );
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, [imagesAndTitles.length]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.setAttribute("data-use-service-core", "");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          name="description"
          content="El mejor centro de ginecologia y fisioterapia. Especialistas en tratamientos para hernias discales, lumbalgias, cervicalgias, y más."
        />
        <meta
          name="keywords"
          content="ginecologia, fisioterapia, hernias discales, lumbalgias, cervicalgias"
        />
        <meta name="author" content="Termo Oasis" />
        <link rel="canonical" href="https://www.termooasis.com/" />
      </Head>

      <section
        className="relative flex items-start justify-center w-full h-72 bg-cover bg-center fade-enter fade-enter-active rounded-t-xl"
        style={{ backgroundImage: currentData.image }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="flex items-center justify-center flex-col pt-10">
          <h3 className="relative text-center text-3xl font-semibold text-white p-4">
            {currentData.title1}
          </h3>
          <h3 className="relative text-center text-4xl font-bold text-white p-4">
            {currentData.title2}
          </h3>
        </div>
      </section>
      {/* Médico Especialista */}
      <section className="flex flex-col items-start justify-start my-8">
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
            <img
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
            <img
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
          <img
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
          items={ginecologia.map(({ title, href, icon }) => ({
            title,
            link: href,
            description: title,
            icon,
          }))}
        />
        <RandomImage count={4} />

        <h2 className="text-2xl mt-6">Servicios de obstetricia</h2>
        <GridServicios
          items={obstetricia.map(({ title, href, icon }) => ({
            title,
            link: href,
            description: title,
            icon,
          }))}
        />
        <RandomImage count={4} />

        <h2 className="text-2xl mt-6">OTROS SERVICIOS</h2>
        <GridServicios
          items={otros.map(({ title, href, icon }) => ({
            title,
            link: href,
            description: title,
            icon,
          }))}
        />
        <RandomImage count={4} />

        <RandomImage count={4} />
      </section>

    </>
  );
}
