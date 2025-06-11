import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Item = {
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
      className="flex flex-col items-center p-4 border rounded-lg shadow-lg bg-white"
    >
      <Image
        src={item.icon}
        alt={item.description}
        width={100}
        height={100}
      />
      <h2 className="text-center mb-4 font-bold">{item.description}</h2>
      <div className="flex items-center p-1 justify-center md:h-6 bg-colorButton hover:bg-colorButton/95 rounded-lg md:px-5 md:py-1 cursor-pointer">
        <Link href={item.link} className="text-black text-sm">
          Conozca más{" "}
        </Link>
      </div>
    </motion.div>
  );
};

const GridServicios = ({ items }: GridServiciosProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 p-4">
      {items.map((item, index) => (
        <ServicioCard key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default GridServicios;