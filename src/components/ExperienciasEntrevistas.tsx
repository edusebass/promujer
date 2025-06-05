/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import TikTokEmbed from "./TikTokEmbed";
import InstagramEmbed from "./InstagramEmbed";
import ExperienciaPrincipal from "./ExperienciaPrincipal";
import SocialIcon from "./SocialIcon";
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";
const ExperienciasEntrevistas = () => {
  return (
    <>
      <h3 className="text-5xl font-semibold mb-4 text-center mt-8">
        Entrevistas y experiencias
      </h3>
      <p className="flex justify-center items-center mx-4">
        Mira como nuestros servicios han ayudado a mas de 17.000 personas a
        lograr sus objetivos de curarse de cualquier dolencia
      </p>
      <ExperienciaPrincipal />
      {/* tiktok */}
      <p className="text-3xl font-semibold mb-4 text-center mt-16">
        Mira mas experiencias a continuacion
      </p>
      <div className="pl-4 overflow-x-auto w-full">
        <div className="flex flex-nowrap space-x-4 py-4">
          <div className="flex-shrink-0 w-80">
            <TikTokEmbed videoId="7291378406292344069" author="termooasis" />
          </div>
          <div className="flex-shrink-0 w-80">
            <TikTokEmbed videoId="7307673124110224646" author="termooasis" />
          </div>
          <div className="flex-shrink-0 w-80">
            <TikTokEmbed videoId="7293652433933274374" author="termooasis" />
          </div>
          <div className="flex-shrink-0 w-80">
            <TikTokEmbed videoId="7277687910659411205" author="termooasis" />
          </div>
          <div className="flex-shrink-0 w-80">
            <TikTokEmbed videoId="7275061035390881029" author="termooasis" />
          </div>
          <div className="flex-shrink-0 w-80">
            <TikTokEmbed videoId="7258004869917805830" author="termooasis" />
          </div>
          <div className="flex-shrink-0 w-80">
            <TikTokEmbed videoId="7255892055208037637" author="termooasis" />
          </div>
        </div>
      </div>
      {/* instagram */}
      <div className="flex flex-wrap gap-6 justify-center items-center mt-3">
        <InstagramEmbed videoId="CMCv5prnnru" />
        <InstagramEmbed videoId="CXcaLnTgAWA" />
        <InstagramEmbed videoId="CN3Jcd2nlXp" />
        <InstagramEmbed videoId="COjcU0ZnLJO" />
        <InstagramEmbed videoId="CQw_ySKAu8L" />
        <InstagramEmbed videoId="C2TN8PHMbTc" />
        <InstagramEmbed videoId="CW6Vj_fA5by" />
      </div>
      <p className="text-3xl font-semibold mb-4 text-center mt-16">
        Mire más en nuestras redes sociales
      </p>
      <div className="w-full flex justify-center items-end gap-11 md:gap-4 my-10 text-4xl">
        <SocialIcon
          href="https://www.instagram.com/termo_oasis/"
          title="Instagram"
        >
          <FaInstagram className="text-colorDropdown" />
        </SocialIcon>
        <SocialIcon href="https://www.tiktok.com/@termooasis" title="TikTok">
          <FaTiktok className="text-black" />
        </SocialIcon>
        <SocialIcon
          href="https://wa.me/+5930969618902?text=¡Saludos!,%20Me%20interesa%20su%20servicio."
          title="Whatsapp"
        >
          <FaWhatsappSquare className="text-green-500" />
        </SocialIcon>
      </div>
    </>
  );
};

export default ExperienciasEntrevistas;
