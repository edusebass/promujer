import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date().toISOString();
  return [
    {
      url: "https://termoasis.com/contacto",
      lastModified,
    },
    {
      url: "https://termoasis.com/productos",
      lastModified,
    },
    {
      url: "https://termoasis.com/",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/fisioterapia/cervical",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/fisioterapia/hombro",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/fisioterapia/lumbar",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/fisioterapia/cadera",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/fisioterapia/dorsal",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/fisioterapia/manoycodo",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/fisioterapia/rodilla",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/fisioterapia/tobilloypie",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/fisioterapia/cuello",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/fisioterapia/lesiones",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/quiropraxia/herniasDiscales",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/quiropraxia/lumbalgias",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/quiropraxia/cervicalgia",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/quiropraxia/tendinitis",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/quiropraxia/hombrocongelado",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/quiropraxia/pubalgia",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/praxisvertebral/rectificacioncervical",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/praxisvertebral/estrechamientocanallumbar",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/praxisvertebral/hiperlordosiscervical",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/praxisvertebral/hiperlordosislumbar",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/praxisvertebral/desviacioncolumna",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/praxisvertebral/desplazamientocadera",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/tkemocional/depresioncronica",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/tkemocional/enfermedadesautoinmunes",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/tkemocional/insomnio",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/tkemocional/migrana",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/otros/escoliosis",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/otros/ciatalgia",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/otros/nervioaciatico",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/otros/estres",
      lastModified,
    },
    {
      url: "https://termoasis.com/servicios/otros/crecimiento",
      lastModified,
    },
  ];
}