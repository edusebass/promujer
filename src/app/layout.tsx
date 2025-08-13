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
    default: "Dr. Juan Yancha | Ginecología, Obstetricia y Ecografías en Quito",
    template: "%s | Dr. Juan Yancha",
  },
  description:
    "Atención profesional en ginecología, obstetricia y ecografías en Quito. Consulta ginecológica, control prenatal y medicina materna con tecnología avanzada.",
  icons: "/logoMujer.svg",
  applicationName: "Dr. Juan Yancha",
  openGraph: {
    type: "website",
    url: "https://drjuanyancha.com",
    siteName: "Dr. Juan Yancha",
    title: "Dr. Juan Yancha | Ginecología, Obstetricia y Ecografías en Quito",
    description:
      "Atención profesional en ginecología, obstetricia y ecografías en Quito. Consulta ginecológica, control prenatal y medicina materna.",
    images: [
      {
        url: "https://drjuanyancha.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Juan Yancha | Ginecólogo Obstetra en Quito",
      },
    ],
    locale: "es_EC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Juan Yancha | Ginecología, Obstetricia y Ecografías en Quito",
    description:
      "Atención profesional en ginecología, obstetricia y ecografías en Quito.",
    images: ["https://drjuanyancha.com/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  keywords: [
    "ginecología",
    "obstetricia",
    "ecografías",
    "consulta ginecológica",
    "control prenatal",
    "medicina materna",
    "ginecólogo Quito",
    "obstetra Quito",
    "ecografía Quito",
  ],
  alternates: {
    canonical: "https://drjuanyancha.com",
    languages: {
      "es-EC": "https://drjuanyancha.com",
      "es-419": "https://drjuanyancha.com",
      "x-default": "https://drjuanyancha.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-EC">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://drjuanyancha.com" />
        <meta name="theme-color" content="#B12B72" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="geo.region" content="EC-P" />
        <meta name="geo.placename" content="Quito" />
        <meta name="geo.position" content="-0.293222;-78.478980" />
        <meta name="ICBM" content="-0.293222, -78.478980" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Physician",
              name: "Dr. Juan Yancha",
              url: "https://drjuanyancha.com",
              image: "https://drjuanyancha.com/opengraph-image.png",
              logo: "https://drjuanyancha.com/logoMujer.svg",
              telephone: "+593969618902",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Quito",
                addressRegion: "Pichincha",
                addressCountry: "EC",
              },
              areaServed: "Quito, Ecuador",
              sameAs: [
                "https://www.facebook.com/drjuanyanchat",
                "https://www.instagram.com/drjuanyanchat",
              ],
            }),
          }}
        />
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
