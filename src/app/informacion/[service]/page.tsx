/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { InfoContact } from "@/components/InfoContact";
import AccordionComponent from "@/components/AccordionComponent";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SERVICIOS_INFORMACION as informacion } from "@/constants/servicios_descrip";
import type { Metadata } from "next";
import RandomImage from "@/components/RandomImage";
import BannerDoctor from "@/components/BannerDoctor";
import AnimatedVideoSection from "@/components/AnimatedVideoSection";

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { service } = await params;
    const title = `${informacion[service].servicio}`;
    return {
        title,
        icons:
            "https://res.cloudinary.com/dwowtb0ya/image/upload/v1750287409/lopgo%20dr/logoMujer_nvo70c.jpg",
    };
}

const Informacion = async ({ params }: any) => {
    const { service } = await params;
    return (
        <>
            <section
                className="relative flex items-start justify-center w-full h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${informacion[service].imgBanner})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="flex items-center justify-center flex-col pt-10">
                    <h1 className="relative text-3xl font-semibold text-white p-4">
                        INFORMACION
                    </h1>
                    <h2 className="relative text-4xl font-bold text-white p-4">
                        {informacion[service].servicio}
                    </h2>
                </div>
            </section>

            <section className="flex flex-col w-10/12 mx-10 md:mx-16 bg-white p-3">
                <div className="bg-colorTextSecondary mt-16 mb-5 p-5">
                    <p className="text-3xl bg-colorTextSecondary font-bold pb-1">
                        {informacion[service].servicio}
                    </p>
                    <p>Información sobre este tema</p>
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

            <AnimatedVideoSection
                servicio={informacion[service].servicio}
                urlVideo={informacion[service]?.urlVideo}
                introText="Revise la información detallada y recuerde que una consulta personalizada es clave para su bienestar."
            />
        </>
    );
};

export default Informacion;

