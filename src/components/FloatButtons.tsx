import { Fab } from "@mui/material";
import React from "react";

const FloatButtons = () => {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col gap-4 z-50">

      <a
        href="https://maps.app.goo.gl/DFFTRT7eG9E7xFNL7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Fab color="primary" className="bg-white hover:bg-secondary">
          <img
            src="maps.png"
            alt="Google Maps"
            className="w-8 h-8"
            draggable={false}
          />
        </Fab>
      </a>
      <a href="tel:+5930995129878">
        <Fab color="primary" className="bg-white hover:bg-secondary">
          <img
            src="phone.png"
            alt="Llamar"
            className="w-8 h-8"
            draggable={false}
          />
        </Fab>
      </a>
      <a
        href="https://wa.me/+5930995129878?text=¡Saludos!,%20Me%20interesa%20su%20servicio."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Fab color="primary" className="bg-white hover:bg-secondary">
          <img
            src="whatsapp.png"
            alt="WhatsApp"
            className="w-8 h-8"
            draggable={false}
          />
        </Fab>
      </a>
    </div>
  );
};

export default FloatButtons;
