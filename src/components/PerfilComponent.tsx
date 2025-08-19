import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const puntos = [
    "Ligadura de arterias hipogástricas – Técnica GALA (OSLS – Support Obstetric Surgical Life, México).",
    "Técnicas Quirúrgicas Avanzadas (TEQUIAV) para la prevención y control de la hemorragia obstétrica – OSLS México.",
    "Diplomado en Ultrasonido Obstétrico – MFM Educations, aval Universidad Autónoma de Querétaro, México.",
    "Diplomado Internacional en Colposcopía & HPV.",
];

const PerfilComponent = () => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const controlsImg = useAnimation();
    const controlsText = useAnimation();

    useEffect(() => {
        if (inView) {
            controlsImg.start({
                y: 0, // <-- Cambia x: 0 por y: 0
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: "easeOut" },
            });
            controlsText.start({
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.8, ease: "easeOut" },
            });
        }
    }, [inView, controlsImg, controlsText]);

    return (
        <section ref={ref}>
            <div className="mx-7 mt-14 flex flex-col items-center justify-center">
                <motion.div
                    initial={{ y: -200, opacity: 0, filter: "blur(3px)" }} // <-- Imagen desde arriba
                    animate={controlsImg}
                    className="w-full flex justify-center"
                >
                    <Image
                        className="h-full w-full rounded-t-lg object-cover md:h-auto md:w-72 md:!rounded-none md:!rounded-s-lg"
                        src="https://res.cloudinary.com/dwowtb0ya/image/upload/v1750174040/dr/Captura_de_pantalla_2025-06-17_101754_1_hvapyy.jpg"
                        alt="Dr. Juan Yancha"
                        width={700}
                        height={500}
                    />
                </motion.div>
            </div>
            <motion.div
                initial={{ x: -100, opacity: 0, filter: "blur(3px)" }} // <-- Texto desde la izquierda
                animate={controlsText}
                className="flex flex-col justify-center items-center rounded-lg bg-colorTextSecondary md:max-w-3xl md:flex-row"
            >
                <div className="flex flex-col justify-center p-6">
                    <span className="text-lg text-primary font-bold mb-2 text-center">
                        Médico Especialista
                    </span>
                    <h5 className="mb-2 text-2xl font-bold text-primary text-center">
                        Dr. Juan Yancha
                    </h5>
                    <ul className="mb-4 text-base text-primary/80 space-y-2">
                        {puntos.map((punto, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <FaCheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                                <span className="text-black text-sm">{punto}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default PerfilComponent;