import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UpperNavbar from "@/components/UpperNavbar";
import FloatButtons from "@/components/FloatButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://drjuanyancha.com"),
  title: {
    default: "Dr. Juan Yancha, Ginecólogo Obstreta Quito  ",
    template: "%s - Dr. Juan Yancha, Ginecólogo Obstreta Quito  | ginecologia, Ginecologia, ",
  },
  description:
    "El Dr. Juan Yancha es especialista en ginecología, obstetricia y ecografías en Quito. Atención integral y personalizada en consulta ginecológica, control prenatal y estudios ecográficos avanzados para la salud femenina.",

  icons:
    "/logoMujer.jpg",

  twitter: {
    card: "summary_large_image",
    site: "@Dr. Juan Yancha, Ginecólogo Obstreta Quito ",
    title: "Dr. Juan Yancha, Ginecólogo Obstreta Quito  | Ecos y control prenatal",
    description:
      "Descubre cómo nuestros tratamientos en ginecologia, Ginecologia y  pueden mejorar tu calidad de vida.",
  },
  openGraph: {
    type: "website",
    url: "https://drjuanyancha.com",
    title: "Dr. Juan Yancha, Ginecólogo Obstreta Quito  | ginecologia, Ginecologia, ",
    description:
      "El Dr. Juan Yancha es especialista en ginecología, obstetricia y ecografías en Quito. Atención integral y personalizada en consulta ginecológica, control prenatal y estudios ecográficos avanzados para la salud femenina.",
    images: [
      {
        url: "opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Juan Yancha, Ginecólogo Obstreta Quito  - Tratamientos de ginecologia y Ginecologia",
      },
    ],
  },

  keywords: [
    "ginecología",
    "obstetricia",
    "ecografías",
    "consulta ginecológica",
    "control prenatal",
    "salud femenina",
    "especialista en ginecología",
    "especialista en obstetricia",
    "Dr. Juan Yancha",
    "Ginecólogo Quito",
    "Obstetra Quito",
    "consultorio ginecológico Quito"
  ],
  alternates: {
    canonical: "https://drjuanyancha.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://drjuanyancha.com" />
      </head>
      <body
        className={`bg-background w-full min-h-screen min-w-min flex flex-col text-primary ${inter.className}`}
      >
        <UpperNavbar />
        <Navbar />
        <div className="flex-1 flex flex-col min-h-screen">
          {children}
        </div>
        <FloatButtons />
        <Footer />
      </body>
    </html>
  );
}
