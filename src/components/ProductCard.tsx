import React from "react";
import { FaStar } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import Image from "next/image"; // Importa Image de Next.js

interface ProductCardProps {
  img: string;
  nombre: string;
  informacion: string;
}

const ProductCard = ({ img, nombre, informacion }: ProductCardProps) => {
  return (
    <div className="relative flex justify-center w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-colorTextSecondary shadow-md">
      <a
        className="relative mx-3 mt-3 flex h-60 justify-center overflow-hidden rounded-xl items-center"
        href="#"
      >
        <Image
          className="object-cover items-center justify-center"
          src={img}
          alt="product image"
          width={240}
          height={240}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-colorText.Primary">
          39% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-slate-900">{nombre}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <div className="flex items-center">
            <FaStar className="h-5 w-5 text-yellow-300" />
            <FaStar className="h-5 w-5 text-yellow-300" />
            <FaStar className="h-5 w-5 text-yellow-300" />
            <FaStar className="h-5 w-5 text-yellow-300" />
            <FaStar className="h-5 w-5 text-yellow-300" />
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </span>
          </div>
        </div>
        <p className="mb-5">{informacion}</p>
        <div className="flex justify-center gap-4">
          <a
            href={`https://wa.me/+5930969618902?text=¡Saludos!,%20Me%20interesa%20el%20producto%20${nombre}`}
            target="_blank"
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-colorText.Primary hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <BsFillCartFill className="mr-2 h-6 w-6" />
            Cotizar
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;