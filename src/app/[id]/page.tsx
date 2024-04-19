import { notFound } from "next/navigation"
import { Metadata } from "next"


// import { ChioriHelmet } from "@/components/Helmets"
import Characters from "@/components/Characters"
import WeaponCard from "@/components/WeaponCard"
import ArtefactCard from "@/components/ArtefactCard"
import TeamsCard from "@/components/TeamsCard"
import ArtefactsData from "@/database/ArtefactsData.json"
import WeaponsData from "@/database/WeaponsData.json"
import CD from "@/database/CharactersData.json"
import Teams from "@/database/Teams.json"

const weaponsSelector = [WeaponsData[0],WeaponsData[1]]

const artefactsSelector = [ArtefactsData[0],ArtefactsData[1]]

const characterSelector = [[CD[6],CD[0],CD[26],CD[80]],[CD[71],CD[0],CD[70],CD[80]],[CD[27],CD[0],CD[72],CD[80]]]

async function getCharacterById(id: string) {
    const response = await fetch(`http://localhost:3000/builds/${id}`)
    return response.json()
}

async function fgao({params}:any) {
    const build = await getCharacterById(params.id)
    return <>
    
        {
            build.map(function (item:any,id:any)  {
                return (
                        
                    <Characters
                    key={id}
                    characterbackground = {item.characterbackground}
                    MainElement = {item.MainElement}
                    EmblemImage= {item.EmblemImage}
                    EmblemAlt= {item.EmblemAlt}
                    WeaponCharacterImage= {item.WeaponCharacterImage}
                    WeaponCharacterAlt = {item.WeaponCharacterAlt }
                    CharacterName= {item.CharacterName}
                    CharacterFunction= {item.CharacterFunction}
                    CharacterElement= {item.CharacterElement}
                    Rarity= {item.Rarity} 
                    RarityBackground= {item.RarityBackground}
                    BuildTitle = {item.BuildTitle }
                    BuildDescription = {item.BuildDescription }
                    BestWeaponDescription = {item.BestWeaponDescription }
                    OtherWeapons = {item.OtherWeapons }
                    BestArtefactDescription = {item.BestArtefactDescription }
                    ArtefactSubAttribute = {item.ArtefactSubAttribute }
                    TalentPriority = {item.TalentPriority }
                    TeamsDescription= {item.TeamsDescription}
                    TeamsTitle= {item.TeamsTitle}
                    TeamsCharacterDescription= {item.TeamsCharacterDescription}
                    >
        {
            weaponsSelector.map(function (item,id)  {
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
            artefactsSelector.map(function (item,id)  {
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
           characterSelector[0].map(function (item,id)  {
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
           characterSelector[1].map(function (item,id)  {
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
           characterSelector[2].map(function (item,id)  {
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
    </>
}


export default fgao
