import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

type Item = {
  icon: string;
  description: string;
  link: string;
};

type GridServiciosProps = {
  items: Item[];
};

const GridServicios = ({ items }: GridServiciosProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 p-4 ">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-colorTextSecondary"
        >
          <Image
            src={item.icon}
            alt={item.description}
            width={100}
            height={100}
          />
          <h2 className="text-center mb-4">{item.description}</h2>
          <div className="flex items-center p-1 justify-center md:h-6 bg-colorButton hover:bg-colorButton/95 rounded-lg md:px-5 md:py-1 cursor-pointer">
            <Link href={item.link} className="text-colorText.Primary text-sm">
              Conozca más {" "}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridServicios;
