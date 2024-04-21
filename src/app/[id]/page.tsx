

import Characters from "../../components/Characters"
import WeaponCard from "../../components/WeaponCard"
import ArtefactCard from "../../components/ArtefactCard"
import TeamsCard from "../../components/TeamsCard"
import ArtefactsData from "@/database/ArtefactsData.json"
import WeaponsData from "@/database/WeaponsData.json"
import Builds from "@/database/builds.json"
import Header from "../../components/Header"
import Footer from "@/components/Footer"

import { characterSelector, characterMetadata, characterMetaImage } from "../../components/TeamsData"
import { Metadata } from "next";


const weaponsSelector = [WeaponsData[0],WeaponsData[1]]

const artefactsSelector = [ArtefactsData[0],ArtefactsData[1]]



const characters = [ "albedo", "alhaitham", "aloy", "amber", "wanderer", "arataki-itto", "barbara", "baizhu", "beidou", "bennett", "candace", "charlotte", "chiori", "chongyun", "collei", "cyno", "dehya", "diluc", "diona", "dori", "eula", "faruzan", "fischl", "freminet", "furina", "ganyu", "gorou", "hutao", "Jean", "kaedehara-kazuha", "kaeya", "kamisato-ayaka", "kamisato-ayato", "kaveh", "keqing", "kirara", "klee", "kujou-sara", "kuki-shinobu",  "layla", "lisa", "lynette", "lyney", "mika", "mona", "nahida", "neuvillette", "nilou", "ningguang", "noelle", "qiqi", "raiden-shogun", "razor", "rosaria", "sangonomiya-kokomi", "sayu", "shenhe", "shikanoin-heizou", "sucrose", "tartaglia", "thoma", "tighnari", "traveler-anemo",  "traveler-cryo",  "traveler-dendro",  "traveler-electro",  "traveler-hydro",  "venti", "wriothesley", "xiangling", "xianyun", "xiao", "xingqiu", "xinyan", "yae-miko",  "yanfei", "yaoyao", "yelan", "yoimiya", "yun-jin", "zhongli", ];

const mapCharactersToIds:any = {};

characters.forEach((character, index) => {
    mapCharactersToIds[character] = index ;
});

type Props = {
    params: {
        id: string
    }
}

export async function generateMetadata({params}: Props):Promise<Metadata> {
    return {
        title: `${characterMetadata[mapCharactersToIds[params.id]]} Melhores Builds e Times`,
        description: `Maximize o potencial de ${characterMetadata[mapCharactersToIds[params.id]]} em Genshin Impact com nossas builds especializadas! Confira as melhores opções de armas, artefatos e times.`,
        openGraph: {
            images: [`https://genshinbuild.com/images/FullQuality/Wish_${characterMetaImage[mapCharactersToIds[params.id]]}.webp`],
            url: `https://genshinbuild.com/${params.id}`
        }
    }
}
  

export default async function CharacterBuild({params}:any) {

    const charactersTeamsAll = characterSelector[mapCharactersToIds[params.id]]

    const buildsSelector = [Builds[ mapCharactersToIds[params.id]]]
    
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": `${characterMetadata[mapCharactersToIds[params.id]]} Melhores Builds e Times - Genshin Impact`,
        "description": `Maximize o potencial de ${characterMetadata[mapCharactersToIds[params.id]]} em Genshin Impact com nossas builds especializadas! Confira as melhores opções de armas, artefatos e times.`,
        "url": `https://genshinbuild.com/${params.id}`,
        "image": [`https://genshinbuild.com/images/FullQuality/Wish_${characterMetaImage[mapCharactersToIds[params.id]]}.webp`],
        "author": [{
            "@type": "Person",
            "name": "Smk",
            "url": "https://github.com/SamuelLJG"
          }
        ]
    }
    return <>

        {
            buildsSelector.map((item:any,id:any) => {
                return (
                    <Header
                    key={id}
                    MainElement={item.MainElement}
                    />
                )
            })
        }
        <br />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="canonical" href={"https://genshinbuild.com/"+[params.id]} />
        <meta property="og:type" content="website" />

        {
            buildsSelector.map((item:any,id:any) => {
               return (
                     <Characters
                    key={id}
                    characterbackground={item.characterbackground}
                    characterImagePosition={item.characterImagePosition}
                    MainElement={item.MainElement}
                    EmblemImage={item.EmblemImage}
                    EmblemAlt={item.EmblemAlt}
                    WeaponCharacterImage={item.WeaponCharacterImage}
                    WeaponCharacterAlt={item.WeaponCharacterAlt }
                    CharacterName={item.CharacterName}
                    CharacterFunction={item.CharacterFunction}
                    CharacterElement={item.CharacterElement}
                    Rarity={item.Rarity} 
                    RarityBackground={item.RarityBackground}
                    BuildTitle={item.BuildTitle }
                    BuildDescription={item.BuildDescription }
                    BestWeaponDescription={item.BestWeaponDescription }
                    OtherWeapons={item.OtherWeapons }
                    BestArtefactDescription={item.BestArtefactDescription }
                    ArtefactSubAttribute={item.ArtefactSubAttribute }
                    TalentPriority={item.TalentPriority }
                    TeamsDescription={item.TeamsDescription}
                    TeamsTitle={item.TeamsTitle}
                    TeamsCharacterDescription={item.TeamsCharacterDescription}
                    >
        {
            weaponsSelector.map( (item:any,id:any) => {
                return (
                    <WeaponCard
                    key={id}
                    WeaponsArtefactsContainer={item.WeaponsArtefactsContainer}
                    WeaponCardImage={item.WeaponCardImage}
                    WeaponCardAlt={item.WeaponCardAlt}
                    WeaponRarityImage={item.WeaponRarityImage}
                    WeaponRarityAlt={item.WeaponRarityAlt}
                    WeaponSubStats={item.WeaponSubStats}
                    WeaponDescription={item.WeaponDescription}
                    />
                )
             })
        }
        {
            artefactsSelector.map( (item:any,id:any) => {
                return (
                    <ArtefactCard
                    key={id}
                    WeaponsArtefactsContainer={item.WeaponsArtefactsContainer}
                    ArtefactCardImage={item.ArtefactCardImage}
                    ArtefactCardAlt={item.ArtefactCardAlt}
                    ArtefactRarityImage={item.ArtefactRarityImage}
                    ArtefactRarityAlt={item.ArtefactRarityAlt}
                    ArtefactSubStats={["DEF %", "Bônus de Dano Geo", "Taxa ou Dano CRIT"]}
                    ArtefactDescription={item.ArtefactDescription}
                    />
                )
            })
        }
        {
           charactersTeamsAll[0].map( (item:any,id:any) =>  {
                return (
                    <TeamsCard
                    key={id}
                    id={id}
                    CharacterTeamName={item.CharacterTeamName}
                    CharacterTeamNameImage={item.CharacterTeamNameImage}
                    CharacterUrl={item.CharacterUrl}
                    CharacterTeamElement={item.CharacterTeamElement}
                    CF={['Main DPS','Sub-DPS','Suporte','Suporte']}
                    />
                )
            })
        }
        {
           charactersTeamsAll[1].map( (item:any,id:any)  => {
                return (
                    <TeamsCard
                    key={id}
                    id={id}
                    CharacterTeamName={item.CharacterTeamName}
                    CharacterTeamNameImage={item.CharacterTeamNameImage}
                    CharacterUrl={item.CharacterUrl}
                    CharacterTeamElement={item.CharacterTeamElement}
                    CF={['Main DPS','Sub-DPS','Suporte','Suporte']}
                    />
                )
            })
        }
        {
           charactersTeamsAll[2].map( (item:any,id:any) => {
                return (
                    <TeamsCard
                    key={id}
                    id={id}
                    CharacterTeamName={item.CharacterTeamName}
                    CharacterTeamNameImage={item.CharacterTeamNameImage}
                    CharacterUrl={item.CharacterUrl}
                    CharacterTeamElement={item.CharacterTeamElement}
                    CF={['Main DPS','Sub-DPS','Suporte','Suporte']}
                    />
                )
            })
        }
        </Characters>
    )
 })
}
        <br />
        <Footer/>
    </>
}

