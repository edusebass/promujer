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
      url: "https://termoasis.com/ginecologia/herniasDiscales",
      lastModified,
    },
    {
      url: "https://termoasis.com/ginecologia/lumbalgias",
      lastModified,
    },
    {
      url: "https://termoasis.com/ginecologia/cervicalgia",
      lastModified,
    },
    {
      url: "https://termoasis.com/ginecologia/tendinitis",
      lastModified,
    },
    {
      url: "https://termoasis.com/ginecologia/hombrocongelado",
      lastModified,
    },
    {
      url: "https://termoasis.com/ginecologia/pubalgia",
      lastModified,
    },
    {
      url: "https://termoasis.com/obstetricia/rectificacioncervical",
      lastModified,
    },
    {
      url: "https://termoasis.com/obstetricia/estrechamientocanallumbar",
      lastModified,
    },
    {
      url: "https://termoasis.com/obstetricia/hiperlordosiscervical",
      lastModified,
    },
    {
      url: "https://termoasis.com/obstetricia/hiperlordosislumbar",
      lastModified,
    },
    {
      url: "https://termoasis.com/obstetricia/desviacioncolumna",
      lastModified,
    },
    {
      url: "https://termoasis.com/obstetricia/desplazamientocadera",
      lastModified,
    },
    {
      url: "https://termoasis.com/otros/escoliosis",
      lastModified,
    },
    {
      url: "https://termoasis.com/otros/ciatalgia",
      lastModified,
    },
    {
      url: "https://termoasis.com/otros/nervioaciatico",
      lastModified,
    },
    {
      url: "https://termoasis.com/otros/estres",
      lastModified,
    },
    {
      url: "https://termoasis.com/otros/crecimiento",
      lastModified,
    },
  ];
}