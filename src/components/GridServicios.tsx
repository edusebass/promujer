import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Item = {
  title: string;
  icon: string;
  description: string;
  link: string;
};

type GridServiciosProps = {
  items: Item[];
};

const ServicioCard = ({ item, index }: { item: Item; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      key={index}
      ref={ref}
      initial={{ opacity: 0, x: -60 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center text-center p-6 border rounded-2xl shadow-lg bg-white h-full md:min-h-[380px]"
    >
      <div className="flex flex-col items-center">
        <Image
          src={item.icon}
          alt={item.description}
          width={125}
          height={100}
        />
        <h2 className="text-2xl mt-3 mb-3 font-bold">{item.title}</h2>
        <p className="text-sm text-gray-600 leading-loose">
          {item.description}
        </p>
      </div>
      <motion.div
        whileTap={{ scale: 0.95 }}
        className="mt-auto flex items-center p-2 bg-primary justify-center bg-colorButton hover:bg-colorButton/95 active:bg-colorButton/80 rounded-lg px-5 py-1 cursor-pointer transition"
      >
        <Link
          href={item.link}
          className="text-white font-extrabold text-sm w-full h-full flex items-center justify-center"
        >
          Conozca más
        </Link>
      </motion.div>
    </motion.div>
  );
};

const GridServicios = ({ items }: GridServiciosProps) => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 md:p-6 min-h-[300px] items-stretch">
        {items.map((item, index) => (
          <ServicioCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default GridServicios;