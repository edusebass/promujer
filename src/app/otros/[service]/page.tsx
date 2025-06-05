/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { InfoContact } from "@/components/InfoContact";
import AccordionComponent from "@/components/AccordionComponent";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SERVICIOS_OTROS as informacion } from "@/constants/servicios_descrip";
import { Metadata } from "next";
import RandomImage from "@/components/RandomImage";
import BannerDoctor from "@/components/BannerDoctor";

export async function generateMetadata({
  params,
}: {
  params: { service: string };
}): Promise<Metadata> {
  const { service } = params;
  const title = `${informacion[service].servicio}`;
  return {
    title,
    icons:
      "https://res.cloudinary.com/ds41xxspf/image/upload/v1721864671/termoasis/WhatsApp_Image_2024-07-23_at_13.47.22-removebg-preview_2_1_1_mgqds4.png",
  };
}
const Otros = ({ params }: { params: { service: string } }) => {
  const { service } = params;

  return (
    <>
      <section
        className="relative flex items-start justify-center w-full h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${informacion[service].imgBanner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex items-center justify-center flex-col pt-10">
          <h1 className="relative text-3xl font-semibold text-white p-4">
            GINECOLOGIA
          </h1>
          <h2 className="relative text-4xl font-bold text-white p-4">
            {informacion[service].servicio}
          </h2>
        </div>
      </section>

      <section className="flex flex-col w-10/12 mx-10 md:mx-16 bg-white p-3">
        <div className="bg-colorTextSecondary mt-16 mb-5 p-5">
          <p className="text-3xl bg-colorTextSecondary font-semibold">
            {informacion[service].servicio}
          </p>
          <p>Información sobre este padecimiento</p>
        </div>
        <div className="flex flex-col gap-3 justify-center w-full md:flex-row">
          <div className="flex-1">
            <AccordionComponent questions={informacion[service].questions} />
          </div>
          <div className="flex-shrink-0 w-64 justify-center items-center m-auto">
            <RandomImage />
          </div>
        </div>
        <InfoContact />
      </section>

      <BannerDoctor servicio={informacion[service].servicio} />


      <section className="flex flex-col-reverse md:flex-row md:px-16 md:my-1 md:items-center md:space-x-4 p-4">
        <div className="md:w-1/2">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${informacion[service]?.urlVideo}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="md:w-1/2 mt-4 mb-5 md:mt-0 md:pl-10">
          <h2 className="text-4xl font-normal mb-2">
            {informacion[service].servicio}
          </h2>
          <p className="text-black text-base md:text-sm">
            La ginecologia y la fisioterapia ayudan a tratar enfermedades
            autoinmunes al mejorar la función nerviosa, reducir la inflamación,
            aliviar el dolor y aumentar la movilidad, mejorando así la calidad
            de vida del paciente.
          </p>
        </div>
      </section>
    </>
  );
};

export default Otros;
