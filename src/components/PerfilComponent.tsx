import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const puntos = [
    "Más de 20 años de experiencia en salud femenina.",
    "Especialista en control prenatal, partos y cirugías ginecológicas.",
    "Miembro de la Sociedad Ecuatoriana de Ginecología y Obstetricia.",
    "Formación internacional en medicina materno-fetal.",
    "Comprometido con la atención integral y el bienestar de la mujer.",
    "Participante activo en congresos y capacitaciones médicas.",
    "Atención cálida, ética y personalizada.",
];

const PerfilComponent = () => (
    <section>

        <div className="mx-7 mt-14 flex flex-col items-center justify-center">
            <Image
                className="h-full w-full rounded-t-lg object-cover md:h-auto md:w-72 md:!rounded-none md:!rounded-s-lg"
                src="https://res.cloudinary.com/dwowtb0ya/image/upload/v1722910354/termooasis/servicios%20y%20personal/oswaldo_aviles_cuerpo_completo_rqiztw.png"
                alt="Fisioterapeuta Oswaldo Aviles"
                width={700}
                height={500}
            />
        </div>
        <div className="flex flex-col justify-center items-center rounded-lg bg-colorTextSecondary md:max-w-3xl md:flex-row">
            <div className="flex flex-col justify-center p-6">
                <span className="text-lg text-primary font-bold mb-2 text-center">
                    Médico Especialista
                </span>
                <h5 className="mb-2 text-2xl font-bold text-primary text-center">
                    Dr. Juan Yancha
                </h5>
                <ul className="mb-4 text-base text-primary/80 space-y-2">
                    {puntos.map((punto, idx) => (
                        <li key={idx} className="flex items-center gap-5">
                            <FaCheckCircle className="text-primary w-5 h-5 flex-shrink-0 pl-1" />
                            <span className="text-black text-sm">{punto}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

export default PerfilComponent;