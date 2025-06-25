"use client";
import React from "react";
import { motion } from "framer-motion";

interface BannerDoctorProps {
    servicio: string;
}

const BannerDoctor: React.FC<BannerDoctorProps> = ({ servicio }) => (
    <section className="bg-primary w-full px-10 py-5 my-5 md:px-16 md:py-10 md:my-10">
        <div className="flex flex-col md:flex-row justify-between gap-3">
            <motion.div
                className="flex gap-3 flex-col"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <p className="text-white text-xl font-semibold">
                    Dr. Juan Yancha{" "} <br />
                    <span className="font-extrabold">Ginecólogo Obstetra</span>
                    <br />
                    <span className="font-extrabold text-2xl">{servicio}</span>
                </p>
                <p className="text-white">
                    Brindo atención médica especializada y acompañamiento integral
                    para tu salud femenina, con ética, calidez y profesionalismo. <br />
                    Estoy aquí para escucharte y ayudarte a encontrar la mejor
                    solución para tu bienestar.
                </p>
            </motion.div>
            <motion.div
                className="flex items-center p-3 justify-center md:h-11 bg-background hover:bg-colorButton/95 rounded-lg md:px-5 md:py-2 cursor-pointer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <a
                    target="_blank"
                    href="https://wa.me/+5930969618902?text=¡Saludos!,%20Me%20interesa%20agendar%20una%20cita."
                    className="text-black"
                >
                    PROGRAME UNA CITA
                </a>
            </motion.div>
        </div>
    </section>
);

export default BannerDoctor;