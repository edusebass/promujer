import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <>
      <footer className="bg-primary w-full relative overflow-hidden rounded-b-2xl">
        <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-10">
          {/* Título de canales de atención */}
          <h2 className="text-xl font-bold text-white mb-4 text-center">
            Canales de Atención
          </h2>


          <div className="md:flex md:justify-between md:items-center gap-6">
            <div className="flex flex-col items-center p-3 justify-center mt-3 md:h-16 bg-background hover:bg-colorButton/95 rounded-lg md:px-5 md:py-2 cursor-pointer shadow-sm">
              <a
                className="flex flex-col items-center text-black no-underline"
                target="_blank"
                href="https://wa.me/+5930969618902?text=¡Saludos!,%20Me%20interesa%20su%20servicio."
              >
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-green-600 text-lg" />
                  <span className="font-semibold">PROGRAME UNA CITA</span>
                </div>
                <span className="text-xs text-gray-700 mt-1">0969618902</span>
              </a>
            </div>
            <div className="flex flex-col items-center p-3 justify-center mt-3 md:h-16 bg-background hover:bg-colorButton/95 rounded-lg md:px-5 md:py-2 cursor-pointer shadow-sm">
              <a
                className="flex flex-col items-center text-black no-underline"
                target="_blank"
                href="https://maps.app.goo.gl/DFFTRT7eG9E7xFNL7"
              >
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-600 text-lg" />
                  <span className="font-semibold">UBICACIÓN</span>
                </div>
                <span className="text-xs text-gray-700 mt-1 text-center">
                  Consultorio Parque Promujer
                </span>
              </a>
            </div>
          </div>
          {/* Mapa */}
          <section className="mt-8">
            <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d331.6576361530139!2d-78.47897986643864!3d-0.2932220595095898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d599094ab85f49%3A0x3bf7d9b51b73e952!2sDr.%20Juan%20Yancha%20.T.%20-%20Pro_mujer.!5e1!3m2!1sen!2sec!4v1749607658772!5m2!1sen!2sec"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Juan Yancha - PRO MUJER"
              ></iframe>
            </div>
          </section>
          <div className="flex flex-col items-center p-3 justify-center mt-6 bg-background rounded-lg md:px-5 md:py-3 shadow-sm">
            <span className="font-semibold mb-2 text-black">REDES SOCIALES</span>
            <div className="flex flex-row gap-4">
              <a href="https://www.facebook.com/drjuanyanchat" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-blue-600 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/drjuanyanchat" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 text-2xl hover:scale-110 transition-transform" />
              </a>

            </div>
          </div>
          <hr className="my-6 border-white/30 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-xs text-white sm:text-center dark:text-gray-400">
              © {new Date().getFullYear()}{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                DR. JUAN YANCHA
              </a>
              . Todos los derechos reservados
            </span>
          </div>
        </div>

      </footer>
      <div>
        <br />
        <br />
        <br />
      </div>
    </>

  );
};

export default Footer;
