import Image from "next/image";

const PerfilComponent = () => (
    <section className="mx-14 my-14 flex flex-col items-center justify-center">
        <h3 className="text-center font-semibold text-5xl mb-3">
            Nuestro equipo de especialistas
        </h3>
        <p className="text-black mb-6">
            Nuestros expertos en ginecología, obstetricia y fisioterapia emplean
            tratamientos avanzados para la salud integral de la mujer.
        </p>
        <div className="flex flex-col justify-center items-center rounded-lg bg-colorTextSecondary md:max-w-3xl md:flex-row">
            <Image
                className="h-full w-full rounded-t-lg object-cover md:h-auto md:w-72 md:!rounded-none md:!rounded-s-lg"
                src="https://res.cloudinary.com/dwowtb0ya/image/upload/v1722910354/termooasis/servicios%20y%20personal/oswaldo_aviles_cuerpo_completo_rqiztw.png"
                alt="Fisioterapeuta Oswaldo Aviles"
                width={700}
                height={500}
            />
            <div className="flex flex-col justify-center p-6">
                <h5 className="mb-2 text-2xl font-bold text-primary">
                    Dr. Juan Pérez
                </h5>
                <span className="text-base text-primary font-semibold mb-2">
                    Médico Especialista en Ginecología y Obstetricia
                </span>
                <p className="mb-4 text-base text-primary/80">
                    * Más de 20 años de experiencia en salud femenina.
                    <br />
                    * Especialista en control prenatal, partos y cirugías
                    ginecológicas.
                    <br />
                    * Miembro de la Sociedad Ecuatoriana de Ginecología y
                    Obstetricia.
                    <br />
                    * Formación internacional en medicina materno-fetal.
                    <br />
                    * Comprometido con la atención integral y el bienestar de la
                    mujer.
                    <br />
                    * Participante activo en congresos y capacitaciones médicas.
                    <br />
                    * Atención cálida, ética y personalizada.
                </p>
            </div>
        </div>
    </section>
);

export default PerfilComponent;