"use client";
import React from "react";
import { motion } from "framer-motion";

interface BannerDoctorProps {
    servicio: string;
}

const BannerDoctor: React.FC<BannerDoctorProps> = ({ servicio }) => (
    <section className="bg-primary w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-6 md:py-10 my-6 md:my-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <motion.div
                className="flex gap-3 flex-col"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h3 className="text-white text-xl md:text-2xl font-semibold leading-relaxed">
                    Dr. Juan Yancha
                    <br />
                    <span className="font-extrabold">Ginecólogo Obstetra</span>
                    <br />
                    <span className="font-extrabold text-2xl md:text-3xl">{servicio}</span>
                </h3>
                <p className="text-white max-w-3xl md:text-base">
                    Brindo atención médica especializada y acompañamiento integral
                    para tu salud femenina, con ética, calidez y profesionalismo. <br />
                    Estoy aquí para escucharte y ayudarte a encontrar la mejor
                    solución para tu bienestar.
                </p>
            </motion.div>
            <motion.div
                className="flex items-center p-3 justify-center h-10 md:h-12 bg-background hover:bg-colorButton/95 rounded-lg md:px-5 md:py-2 cursor-pointer whitespace-nowrap self-start md:self-center shadow"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <a
                    target="_blank"
                    href="https://wa.me/+5930969618902?text=¡Saludos!,%20Me%20interesa%20agendar%20una%20cita."
                    className="text-black font-semibold"
                >
                    PROGRAME UNA CITA
                </a>
            </motion.div>
        </div>
    </section>
);

export default BannerDoctor;