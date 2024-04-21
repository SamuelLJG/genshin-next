

import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
    <head><link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" /></head>
    <body>
        {children}
    </body>
    </html>
  );
}
