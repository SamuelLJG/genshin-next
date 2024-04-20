import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Script from "next/script";
import "./globals.css"

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
      <link rel="preconnect" href="https://kit.fontawesome.com" />
    </head>
      <body>
        <Header />
        <br />
        {children}
        <br />
        <Footer />
    <Script src="https://kit.fontawesome.com/7e144ec40c.js" />
      </body>
    </html>
  );
}
