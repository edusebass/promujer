import React from "react";
import { FaCalendarCheck, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

export const InfoContact = () => {
  return (
    <>
      <section className="contact-info w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-100 p-8 rounded-lg">
        <div className="info-icon flex flex-col items-center text-center">
          <FaCircleInfo className="text-xl mb-2" />
          <p className="text-gray-700 text-xs">
            Horario de atención: <br /> Lunes - Viernes 10.30 am a 17 pm <br />{" "}
            Sabado 10 am - 15 pm
          </p>
        </div>
        <div className="phone-icon flex flex-col items-center text-center hover:cursor-pointer hover:scale-110">
          <FaPhoneAlt className="text-primary text-xl mb-2" />
          <a
            target="_blank"
            href="https://wa.me/+5930995129878?text=¡Saludos!,%20Me%20interesa%20su%20servicio."
            className="text-gray-700 text-xs"
          >
            0995129878  |  0987140893  |  0995026093  |  (02)2622545
          </a>
        </div>
        <div className="email-icon flex flex-col items-center text-center">
          <FaEnvelope className="text-primary text-xl mb-2" />
          <p className="text-gray-700 text-xs">termoasis@gmail.com</p>
        </div>
        <div className="appointment-icon flex flex-col items-center text-center hover:cursor-pointer hover:scale-110   ">
          <FaCalendarCheck className="text-primary text-xl mb-2" />
          <a
            target="_blank"
            href="https://wa.me/+5930995129878?text=¡Saludos!,%20Me%20interesa%20su%20servicio."
            className="text-gray-700 text-xs "
          >
            Solicitie una cita
          </a>
        </div>
      </section>
    </>
  );
};
