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
        className="relative flex items-start justify-center w-full h-72 bg-cover bg-center fade-enter fade-enter-active"
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
      <section className="flex flex-col  justify-start">
        {/* <h1 className="text-4xl mt-3 md:text-6xl font-extrabold text-center md:px-16 md:mt-3">
          PRO MUJER
        </h1> */}
        <h2 className="text-4xl mt-3 md:text-6xl font-bold text-center md:px-16 md:mt-3">
          GINECOLOGIA & OBSTETRICIA
        </h2>
      </section>

      {/* Servicios */}
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

      {/* Ubicacion */}
      <section className="flex flex-col md:flex-row md:items-center md:space-x-4 p-4 bg-slate-50">
        <div className="md:w-1/2 mt-4 md:mt-0 md:pl-10">
          <h2 className="text-4xl font-normal mb-4 ">
            Ubicación del Centro Quiropractico y Praxista
          </h2>
          {/* <p className="text-gray-700">
            El Centro Terapéutico Quiropractico y praxista Termo Oasis se como
            referencia por el Estadio del Aucas, en la calle Apuela S28-180 y
            Quito 170606. Para llegar, puedes tomar el metro hasta la estación
            Morán Valverde, bajar por la calle Rumichaca y luego ingresar a la
            ubicación.
          </p> */}
        </div>
        <div className="md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d331.6576361530139!2d-78.47897986643864!3d-0.2932220595095898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d599094ab85f49%3A0x3bf7d9b51b73e952!2sDr.%20Juan%20Yancha%20.T.%20-%20Pro_mujer.!5e1!3m2!1sen!2sec!4v1749607658772!5m2!1sen!2sec"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dr. Juan Yancha - PRO MUJER"
          ></iframe>
        </div>
      </section>

      {/* 2. Aplica el ref aquí */}
      <div ref={perfilRef}>
        <PerfilComponent />
      </div>

      {/* Instalaciones */}
      {/* <section className="flex flex-col md:flex-row-reverse md:items-center md:space-x-4 p-4 ">
        <div className="flex flex-col gap-4 md:w-1/2 mt-4 md:mt-0 md:pl-10 ">
          <Image
            alt="Icono fisioterapia"
            src={"https://cdn-icons-png.flaticon.com/512/6180/6180520.png"}
            width={100}
            height={100}
            className="mx-auto"
          />
          <span className="text-5xl font-semibold mb-4 text-center">
            Instalaciones
          </span>
          <h3 className="text-xl font-medium">
            UNIMOS PROFESIONALIDAD Y ESTILO PARA CREAR UNA CENTRO QUIROPRACTICO
            UNICO
          </h3>
          <p className="text-gray-700 mb-4 md:mb-0">
            Creemos que para garantizar una recuperación rápida y eficiente el
            paciente debe sentirse cómodo y tener el espacio que necesita, por
            ello nos esforzamos tanto en cuidar nuestro lugar de trabajo.
          </p>
        </div>

        <div className="md:w-1/2 flex flex-col justify-center items-center md:flex-row gap-10 ">
          <Image
            src={
              "https://res.cloudinary.com/dwowtb0ya/image/upload/v1722310422/Portfolio/instalaciones_termosoasis_2_tro5af.jpg"
            }
            alt="Centro Quiropractico y Praxista Termo Oasis"
            width={300}
            height={500}
          />
          <Image
            src={
              "https://res.cloudinary.com/dwowtb0ya/image/upload_v1722310417/Portfolio/instalaciones_termosoasis_3_pa6szh.jpg"
            }
            alt="Centro Quiropractico y Praxista Termo Oasis"
            width={300}
            height={500}
          />
        </div>
      </section> */}

      {/* <ExperienciasEntrevistas /> */}
    </>
  );
}
