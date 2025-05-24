import { Fab } from "@mui/material";
import React from "react";
import { FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";
import { MdCall, MdEdit } from "react-icons/md"; // Un ícono diferente para el segundo botón
import { IoAddCircleOutline } from "react-icons/io5"; // Un ícono diferente para el tercer botón

const FloatButtons = () => {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/+5930995129878?text=¡Saludos!,%20Me%20interesa%20su%20servicio."
        target="_blank"
      >
        <Fab color="primary" className="bg-blue hover:bg-lightBlue text-3xl">
          <FaWhatsapp />
        </Fab>
      </a>
      <a href="https://maps.app.goo.gl/DFFTRT7eG9E7xFNL7" target="_blank">
        <Fab color="primary" className="bg-blue hover:bg-lightBlue text-3xl">
          <FaMapMarkedAlt />
        </Fab>
      </a>
      <a href="tel:+5930995129878">
        <Fab color="primary" className="bg-blue hover:bg-lightBlue text-3xl">
          <MdCall />
        </Fab>
      </a>
    </div>
  );
};

export default FloatButtons;
