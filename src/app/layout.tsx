import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UpperNavbar from "@/components/UpperNavbar";
import FloatButtons from "@/components/FloatButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://termoasis.com"),
  title: {
    default: "Termo Oasis ",
    template: "%s - Termo Oasis | ginecologia, Ginecologia, Praxis Vertebral",
  },
  description:
    "Termo Oasis ofrece tratamientos especializados en ginecologia, Ginecologia, y Praxis Vertebral para aliviar cualquier tipo de dolor. Contamos con expertos en cuidados de espalda, cuello, y más.",

  icons:
    "https://res.cloudinary.com/ds41xxspf/image/upload/v1721864671/termoasis/WhatsApp_Image_2024-07-23_at_13.47.22-removebg-preview_2_1_1_mgqds4.png",

  twitter: {
    card: "summary_large_image",
    site: "@TermoOasis",
    title: "Termo Oasis | ginecologia, Ginecologia, Praxis Vertebral",
    description:
      "Descubre cómo nuestros tratamientos en ginecologia, Ginecologia y Praxis Vertebral pueden mejorar tu calidad de vida.",
  },
  openGraph: {
    type: "website",
    url: "https://termoasis.com",
    title: "Termo Oasis | ginecologia, Ginecologia, Praxis Vertebral",
    description:
      "Especialistas en ginecologia, Ginecologia y Praxis Vertebral para tratar dolores de espalda, cuello, y más.",
    images: [
      {
        url: "opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Termo Oasis - Tratamientos de ginecologia y Ginecologia",
      },
    ],
  },

  keywords: [
    "Termo Oasis",
    "termoasis",
    "Ginecologia",
    "ginecologia",
    "dolores de espalda",
    "cuidado de lesiones",
    "columna",
    "cuello",
    "cervical",
    "estrés",
    "depresión crónica",
    "praxis vertebral",
    "rodilla",
    "pie",
    "insomnio",
    "migraña",
    "lumbalgias",
    "tendinitis",
    "hernias",
    "hombro congelado",
    "pubalgia",
    "rehabilitación",
    "tratamientos para jóvenes",
    "crecimiento en niños y jóvenes",
  ],
  alternates: {
    canonical: "https://termoasis.com",
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
        <link rel="canonical" href="https://termoasis.com" />
      </head>
      <body
        className={`bg-background w-full min-h-screen flex flex-col items-center text-primary ${inter.className}`}
      >
        <UpperNavbar />
        <Navbar />
        {children}
        <FloatButtons />
        <Footer />
      </body>
    </html>
  );
}
