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
    // páginas principales por secciones
    { url: "https://drjuanyancha.com/ginecologia/sindrome-ovario-poliquistico", lastModified },
    { url: "https://drjuanyancha.com/ginecologia/endometriosis", lastModified },
    { url: "https://drjuanyancha.com/ginecologia/infecciones-vaginales", lastModified },
    { url: "https://drjuanyancha.com/ginecologia/dolor-pelvico-cronico", lastModified },
    { url: "https://drjuanyancha.com/ginecologia/trastornos-menstruales", lastModified },

    { url: "https://drjuanyancha.com/obstetricia/control-prenatal", lastModified },
    { url: "https://drjuanyancha.com/obstetricia/diabetes-gestacional", lastModified },
    { url: "https://drjuanyancha.com/obstetricia/preeclampsia", lastModified },
    { url: "https://drjuanyancha.com/obstetricia/parto-prematuro", lastModified },
    { url: "https://drjuanyancha.com/obstetricia/cesarea-recuperacion", lastModified },
    { url: "https://drjuanyancha.com/obstetricia/cuidados-postparto", lastModified },

    { url: "https://drjuanyancha.com/cirugias/miomas-uterinos", lastModified },
    { url: "https://drjuanyancha.com/cirugias/cirugia-laparoscopica", lastModified },
    { url: "https://drjuanyancha.com/cirugias/histerectomia", lastModified },
    { url: "https://drjuanyancha.com/cirugias/cirugia-endometriosis", lastModified },
    { url: "https://drjuanyancha.com/cirugias/miomectomia", lastModified },
    { url: "https://drjuanyancha.com/cirugias/ooforectomia-anexectomia", lastModified },
    { url: "https://drjuanyancha.com/cirugias/salpingectomia", lastModified },
    { url: "https://drjuanyancha.com/cirugias/cistectomia-ovaria", lastModified },
    { url: "https://drjuanyancha.com/cirugias/prolapso-organos-pelvicos", lastModified },
    { url: "https://drjuanyancha.com/cirugias/histeroscopia", lastModified },
    { url: "https://drjuanyancha.com/cirugias/cirugia-reconstructiva", lastModified },

    { url: "https://drjuanyancha.com/ecografias/cromosomica", lastModified },
    { url: "https://drjuanyancha.com/ecografias/anatomica", lastModified },
    { url: "https://drjuanyancha.com/ecografias/doppler-fetal", lastModified },
    { url: "https://drjuanyancha.com/ecografias/ginecologica", lastModified },
    { url: "https://drjuanyancha.com/ecografias/obstetrica", lastModified },
    { url: "https://drjuanyancha.com/ecografias/4d-hd-live", lastModified },

    { url: "https://drjuanyancha.com/informacion/planificacion-familiar", lastModified },
    { url: "https://drjuanyancha.com/informacion/menopausia", lastModified },
    { url: "https://drjuanyancha.com/informacion/cancer-ginecologico", lastModified },
    { url: "https://drjuanyancha.com/informacion/salud-sexual", lastModified },
    { url: "https://drjuanyancha.com/informacion/chequeos-ginecologicos", lastModified },
  ];
}