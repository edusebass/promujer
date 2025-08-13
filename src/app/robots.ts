import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://drjuanyancha.com/sitemap.xml",
    host: "https://drjuanyancha.com",
  };
}

