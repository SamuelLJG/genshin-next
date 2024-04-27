import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CharacterCard from "@/components/CharacterCard"
import CD from "@/database/CharactersListData.json"
import { Metadata } from "next"
import FilterCharacters from "@/components/FilterCharacters"


export async function generateMetadata():Promise<Metadata> {
  return {
      title: "Genshin Impact Lista de Personagens | Genshin Build",
      description: "Saiba as melhores Builds, Times e TierList do seu personagem hoje em Genshin Impact. Fique por dentro de todas as atualizações do jogo.",
      openGraph: {
          images: "/images/GenshinBuild.png",
          url: "https://genshinbuild.com/"
      }
  }
}


  
  const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": " Melhores Builds e Times - Genshin Impact",
      "description": "Saiba as melhores Builds, Times e TierList do seu personagem hoje em Genshin Impact. Fique por dentro de todas as atualizações do jogo.",
      "url": "https://genshinbuild.com/",
      "image": "/images/GenshinBuild.png",
      "author": [{
          "@type": "Person",
          "name": "Smk",
          "url": "https://github.com/SamuelLJG"
        }
      ]
  }
    export default function CharacterBuild({ params }: {
      params: { id: string }
  }) {
      return <>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href="https://genshinbuild.com/" />
        <meta property="og:type" content="website" />
      <Header/>
      <br />
        <main className="characters-main" style={{padding:'30px'}}>
        <h1>Genshin Impact Lista de Personagens</h1>
          <br />
          <FilterCharacters />
          <br />
          <section id="home-page-characters-grid">
            {
             CD.map( (item:any,id:any)  => {
                  return (
                      <CharacterCard
                      key={id}
                      CharacterTeamName={item.CharacterTeamName}
                      CharacterTeamNameImage={item.CharacterTeamNameImage}
                      CharacterUrl={item.CharacterUrl}
                      CharacterTeamElement={item.CharacterTeamElement}
                      CharacterRarity={item.CharacterRarity}
                      CharacterRarity2={item.CharacterRarity2}
                      />
                  )
              })
                    }
          </section>
        </main>
        <Footer/>
      </>
  }

