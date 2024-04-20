

import Characters from "@/components/Characters"
import WeaponCard from "@/components/WeaponCard"
import ArtefactCard from "@/components/ArtefactCard"
import TeamsCard from "@/components/TeamsCard"
import ArtefactsData from "@/database/ArtefactsData.json"
import WeaponsData from "@/database/WeaponsData.json"
import CD from "@/database/CharactersData.json"
import TeamsData from "@/database/TeamsData.json"
import Builds from "@/database/builds.json"
import { useState } from 'react';

const weaponsSelector = [WeaponsData[0],WeaponsData[1]]

const artefactsSelector = [ArtefactsData[0],ArtefactsData[1]]


const characters = [ "albedo", "alhaitham", "aloy", "amber", "wanderer", "arataki-itto", "barbara", "baizhu", "beidou", "bennett", "candace", "charlotte", "chiori", "chongyun", "collei", "cyno", "dehya", "diluc", "diona", "dori", "eula", "faruzan", "fischl", "freminet", "furina", "ganyu", "gorou", "hutao", "Jean", "kaedehara-kazuha", "kaeya", "kamisato-ayaka", "kamisato-ayato", "kaveh", "keqing", "kirara", "klee", "kujou-sara", "kuki-shinobu",  "layla", "lisa", "lynette", "lyney", "mika", "mona", "nahida", "neuvillette", "nilou", "ningguang", "noelle", "qiqi", "raiden-shogun", "razor", "rosaria", "sangonomiya-kokomi", "sayu", "shenhe", "shikanoin-heizou", "sucrose", "tartaglia", "thoma", "tighnari", "traveler-anemo",  "traveler-cryo",  "traveler-dendro",  "traveler-electro",  "traveler-hydro",  "venti", "wriothesley", "xiangling", "xianyun", "xiao", "xingqiu", "xinyan", "yae-miko",  "yanfei", "yaoyao", "yelan", "yoimiya", "yun-jin", "zhongli", ];

const mapCharactersToIds:any = {};

characters.forEach((character, index) => {
    mapCharactersToIds[character] = index ;
});

export default async function fgao({params}:any) {


const buildsSelector = [Builds[ mapCharactersToIds[params.id]]]
    return <>
                     
                    
        {
            buildsSelector.map((item:any,id:any) => {
                const characterSelector = [[],[],[]]
               
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
           characterSelector[0].map( (item:any,id:any) =>  {
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
           characterSelector[1].map( (item:any,id:any)  => {
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
           characterSelector[2].map( (item:any,id:any) => {
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

