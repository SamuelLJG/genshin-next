import type { Metadata } from "next";
import "./style.css"
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
      </head>
      <body>
        <Header />
        <br />
        {children}
        <br />
        <Footer />
      </body>
    </html>
  );
}
