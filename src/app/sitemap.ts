import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date().toISOString();
  return [
    {
      url: "https://drjuanyancha.com/contacto",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/productos",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/ginecologia/herniasDiscales",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/ginecologia/lumbalgias",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/ginecologia/cervicalgia",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/ginecologia/tendinitis",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/ginecologia/hombrocongelado",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/ginecologia/pubalgia",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/obstetricia/rectificacioncervical",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/obstetricia/estrechamientocanallumbar",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/obstetricia/hiperlordosiscervical",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/obstetricia/hiperlordosislumbar",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/obstetricia/desviacioncolumna",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/obstetricia/desplazamientocadera",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/otros/escoliosis",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/otros/ciatalgia",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/otros/nervioaciatico",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/otros/estres",
      lastModified,
    },
    {
      url: "https://drjuanyancha.com/otros/crecimiento",
      lastModified,
    },
  ];
}