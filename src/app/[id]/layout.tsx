import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Chiori Melhores Builds e Times',
  description: 'Maximize o potencial da personagem Chiori em Genshin Impact com nossas builds especializadas! Confira as melhores opções de armas, artefatos e times.',
  openGraph: {
    images: ['https://genshinbuild.com/images/FullQuality/Wish_Chiori.webp']
  }
};

export default function RootLayout({children, params,}: {
    children: React.ReactNode;
    params: { id: string };
  })
{
  return <>
    {children}
  </>
}