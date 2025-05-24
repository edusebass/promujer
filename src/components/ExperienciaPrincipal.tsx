import React from "react";
import VideoSection from "./VideoSection";

const ExperienciaPrincipal = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center mt-6">
        <div className="m-10 sm:m-0 text-2xl items-center justify-center sm:pt-[25%]">
          <p>Mira como es nuestro proceso de terapia</p>
        </div>

        <VideoSection
          title="1. Dolencia relatada por el mismo paciente"
          videoSrc="https://res.cloudinary.com/dwowtb0ya/video/upload/v1723655597/termooasis/servicios%20y%20personal/antes_de_la_terapia_1_ibkfac.mp4"
        />
        <VideoSection
          title="2. Evaluacion del paciente antes de la terapia"
          videoSrc="https://res.cloudinary.com/dwowtb0ya/video/upload/v1723656598/termooasis/servicios%20y%20personal/evaluacion_de_la_extremidad_superior_izquierda_antes_de_la_terpaia_idodbp.mp4"
        />
        <VideoSection
          title="3. Evaluación del la extremidad superior izquierda antes de la terapia"
          videoSrc="https://res.cloudinary.com/dwowtb0ya/video/upload/v1723656610/termooasis/servicios%20y%20personal/evaluacion_antes_de_la_terapaia_nyi932.mp4"
        />
        <VideoSection
          title="4. Tratamiento para el hombro con desgarre muscular"
          videoSrc="https://res.cloudinary.com/dwowtb0ya/video/upload/v1723656602/termooasis/servicios%20y%20personal/tratamiento_par_el_hombro_con_desgarre_muscualar_vma0vy.mp4"
        />
        <VideoSection
          title="5. Técnica de praxis verbal tibetana para cervicales con rectificación"
          videoSrc="https://res.cloudinary.com/dwowtb0ya/video/upload/v1723656603/termooasis/servicios%20y%20personal/tecnica_de_praxis_vertebral_tibetana_para_cervicales_con_rectificacion_jxltu3.mp4"
        />
        <VideoSection
          title="6. Resultados relatados por la paciente después de la terapia. El mismo día."
          videoSrc="https://res.cloudinary.com/dwowtb0ya/video/upload/v1723656608/termooasis/servicios%20y%20personal/resultado_relatados_por_la_paciente_despues_de_la_terapia_jbdnqw.mp4"
        />
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center mt-6">
        <div className="m-10 sm:m-0 text-2xl items-center justify-center sm:pt-[25%]">
          <p>Mira como es nuestro proceso de terapia</p>
        </div>

        <VideoSection
          title="1. Relato veridico de una paciente"
          videoSrc="https://res.cloudinary.com/dwowtb0ya/video/upload/v1725904298/termooasis/servicios%20y%20personal/exp_3_aoswnk.mp4"
        />
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center mt-6">
        <div className="m-10 sm:m-0 text-2xl items-center justify-center sm:pt-[25%]">
          <p>Otra experiencia de nuestro servicio profesional</p>
        </div>

        <VideoSection
          title="1. Como llego el paciente"
          videoSrc="https://res.cloudinary.com/dwowtb0ya/video/upload/v1725904558/termooasis/servicios%20y%20personal/experiencia_1_qulho3.mp4"
        />
        <VideoSection
          title="2. Comienzo de proceso de terapia diagnostico"
          videoSrc="https://res.cloudinary.com/dwowtb0ya/video/upload/v1725904600/termooasis/servicios%20y%20personal/experiencai_2_i4gqc0.mp4"
        />
        <VideoSection
          title="3. Proceso de terapia"
          videoSrc="https://res.cloudinary.com/dwowtb0ya/video/upload/v1725904644/termooasis/servicios%20y%20personal/exp3_dzrgob.mp4"
        />
      </div>
    </>
  );
};

export default ExperienciaPrincipal;
