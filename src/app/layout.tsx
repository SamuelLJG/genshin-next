import type { Metadata } from "next";
import "./style.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "",
    template: "%s | Genshin Build"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
      <meta name="description" content="Maximize o potencial de Chiori em Genshin Impact com nossas builds especializadas! Confira as melhores opções de armas, artefatos e times." />
      </head>
      <body>
        <Header />
        <br />
        {children}
        <br />
        <Footer />
        <script src="https://kit.fontawesome.com/7e144ec40c.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
