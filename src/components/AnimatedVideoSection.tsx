"use client";
import { motion } from "framer-motion";
import React from "react";

interface AnimatedVideoSectionProps {
    servicio: string;
    urlVideo: string;
    introText: string;
}

const AnimatedVideoSection = ({ servicio, urlVideo, introText }: AnimatedVideoSectionProps) => (
    <section className="flex flex-col-reverse md:flex-row md:px-16 md:my-1 md:items-center md:space-x-4 p-4">
        {/* Video desde arriba */}
        <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${urlVideo}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </motion.div>
        {/* Título y párrafo animados por separado */}
        <div className="md:w-1/2 mt-4 mb-5 md:mt-0 md:pl-10">
            <motion.h2
                className="text-4xl font-bold mb-2"
                initial={{ opacity: 0, y: -60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {servicio}
            </motion.h2>
            <motion.p
                className="text-black text-base md:text-sm"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
            >
                {introText.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </motion.p>
        </div>
    </section>
);

export default AnimatedVideoSection;