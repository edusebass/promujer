"use client";
import ExperienciasEntrevistas from "@/components/ExperienciasEntrevistas";
import GridServicios from "@/components/GridServicios";
import RandomImage from "@/components/RandomImage";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { ginecologia, obstetricia, otros } from "@/constants/servicios_lista";

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
  const [fadeClass, setFadeClass] = useState("fade-enter");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("fade-exit");
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % imagesAndTitles.length
        );
        setFadeClass("fade-enter");
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

      <section className="flex flex-col items-center justify-center">
        <h1 className="text-4xl mt-3 md:text-6xl font-extrabold text-center md:px-16 md:mt-3">
          PRO MUJER
        </h1>
        <h2 className="text-4xl mt-3 md:text-6xl font-bold text-center md:px-16 md:mt-3">
          GINECOLOGIA & OBSTETRICIA
        </h2>
      </section>

      <div className="info-icon flex flex-col items-center text-center">
        <FaCircleInfo className="text-xl mb-2" />
        <p className="text-gray-700 text-xs">
          Horario de atención: <br /> Lunes - Viernes 10.30 am a 17 pm <br />{" "}
          Sabado 10 am - 15 pm
        </p>
      </div>

      {/* Servicios */}
      <section className="flex flex-col text-center">
        <h2 className="text-2xl mt-6">Servicios de ginecologia</h2>
        <p className="my-3 mx-10">
          La ginecologia alinea la columna para aliviar dolores y mejorar tu
          bienestar. Descubre sus beneficios y cómo puede transformar tu vida.
        </p>
        <GridServicios
          items={ginecologia.map(({ title, href, descripcion, icon }) => ({
            title,
            link: href,
            description: title,
            icon,
          }))}
        />
        <RandomImage count={4} />

        <h2 className="text-2xl mt-6">Servicios de obstetricia</h2>
        <GridServicios
          items={obstetricia.map(({ title, href, descripcion, icon }) => ({
            title,
            link: href,
            description: title,
            icon,
          }))}
        />
        <RandomImage count={4} />

        <h2 className="text-2xl mt-6">OTROS SERVICIOS</h2>
        <GridServicios
          items={otros.map(({ title, href, descripcion, icon }) => ({
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
          <p className="text-gray-700">
            El Centro Terapéutico Quiropractico y praxista Termo Oasis se como
            referencia por el Estadio del Aucas, en la calle Apuela S28-180 y
            Quito 170606. Para llegar, puedes tomar el metro hasta la estación
            Morán Valverde, bajar por la calle Rumichaca y luego ingresar a la
            ubicación.
          </p>
        </div>
        <div className="md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2547.0122069503054!2d-78.54958674413513!3d-0.2797872801011895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59976e8b0a6b5%3A0xb9e333dbdad9a81d!2sTermo%20Oasis%20Centro%20Terap%C3%A9utico!5e0!3m2!1sen!2sec!4v1722607762487!5m2!1sen!2sec"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Termo Oasis Centro Terapéutico"
          ></iframe>
        </div>
      </section>

      {/* Personal */}
      <section className="mx-14 my-14 flex flex-col items-center justify-center">
        <h3 className="text-center font-semibold text-5xl mb-3">
          Nuestro equipo de especialistas
        </h3>
        <p className="text-black mb-6">
          Nuestros expertos en ginecologia praxista y fisioterapia emplearán
          diversos tipos de tratamientos para lograr la readaptación,
          rehabilitación muscular y articular de cualquier patología.
        </p>
        <div className="flex flex-col justify-center items-center rounded-lg bg-colorTextSecondary  md:max-w-3xl md:flex-row">
          <Image
            className="h-full w-full rounded-t-lg object-cover md:h-auto md:w-72 md:!rounded-none md:!rounded-s-lg"
            src="https://res.cloudinary.com/dwowtb0ya/image/upload/v1722910354/termooasis/servicios%20y%20personal/oswaldo_aviles_cuerpo_completo_rqiztw.png"
            alt="Fisioterapeuta Oswaldo Aviles"
            width={700}
            height={500}
          />
          <div className="flex flex-col justify-center p-6">
            <h5 className="mb-2 text-2xl font-bold text-primary">
              Dr. Quiropracta Oswaldo Aviles
            </h5>
            <p className="mb-4 text-base  text-primary/80">
              * Con más de 23 años de experiencia en ginecologia y en todas las
              patologias. <br />* Formacion en el instituto nacional Nuevo
              Amanecer de Lima, Perú. <br /> * Además, cuentan con una
              preparación académica de dos años en Lima, Perú, por la
              Universidad San Marcos.
              <br />* Especializacion en Alemania
              <br />* Especializacion en Mexico
              <br />* Especializacion en Argentina
            </p>
          </div>
        </div>
      </section>

      {/* Instalaciones */}
      <section className="flex flex-col md:flex-row-reverse md:items-center md:space-x-4 p-4 ">
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
              "https://res.cloudinary.com/dwowtb0ya/image/upload/v1722310417/Portfolio/instalaciones_termosoasis_3_pa6szh.jpg"
            }
            alt="Centro Quiropractico y Praxista Termo Oasis"
            width={300}
            height={500}
          />
        </div>
      </section>

      <ExperienciasEntrevistas />

    </>
  );
}
