import Image from "next/image"

function Characters({MainElement, children, characterbackground, EmblemImage, EmblemAlt, WeaponCharacterImage, WeaponCharacterAlt, CharacterName, CharacterFunction, CharacterElement, RarityBackground, Rarity, BuildTitle, BuildDescription, BestWeaponDescription, OtherWeapons, BestArtefactDescription, ArtefactSubAttribute, TalentPriority, TeamsDescription, TeamsCharacterDescription, TeamsTitle}:{
    MainElement: any
    children: any
    characterbackground: any
    EmblemImage: any
    EmblemAlt: any
    WeaponCharacterImage: any
    CharacterName: any
    WeaponCharacterAlt: any
    CharacterFunction: any
    CharacterElement: any
    RarityBackground: any
    Rarity: any
    BuildTitle: any
    BuildDescription: any
    BestWeaponDescription: any
    OtherWeapons: any
    BestArtefactDescription: any
    ArtefactSubAttribute: any
    TalentPriority: any
    TeamsDescription: any
    TeamsCharacterDescription: any
    TeamsTitle: any
}) {
        return <>
       <main id={MainElement} className="characters-main">
            
            <section id="section-character" className={MainElement}>
                <div id="character-background" style={{backgroundImage:characterbackground}}></div>
                <Image id="emblem"
                src={EmblemImage}
                alt={EmblemAlt}
                title={EmblemAlt}
                />
                <div className={MainElement}>
                </div>
                <div id="character-name-container">
                    <Image
                    src={WeaponCharacterImage}
                    alt={WeaponCharacterAlt}
                    title={WeaponCharacterAlt}
                    />
                    <h1>
                        {CharacterName} Build
                    </h1>
                    <div>
                        <p>{CharacterFunction}</p>&nbsp;|&nbsp;<p>{CharacterElement}</p>
                    </div>
                    <p id="rarity" style={{backgroundImage:RarityBackground}}>
                        {Rarity}<i className="fa-solid fa-star"></i>
                    </p>
                </div>
            </section>
        <article className="character-section-main">
            
            <h2>{BuildTitle}</h2>
            <p>{BuildDescription}</p>
            <br />
            <div className="ads"></div>
            <br />
            <h3>{CharacterName} Melhor Arma</h3>
            <p>{BestWeaponDescription}</p>
            <br />
            <section className="weapons-artefacts-section">
                {children[0]}
            </section>
            <br />
            <p>{OtherWeapons}</p>
            <br />
            <h3>{CharacterName} Melhor Conjunto de Artefatos</h3>
            <p>{BestArtefactDescription}</p>
            <br />
            <section className="weapons-artefacts-section">
                {children[1]}
            </section>
            <br />
            <h3>{CharacterName} Artefatos Sub-Atributos</h3>
            <p>{ArtefactSubAttribute}</p>
            <br />
            <h3>{CharacterName} Prioridade de Talentos</h3>
            <p>{TalentPriority}</p>
        </article>
        <br />
        <br />
        <h2 id="best-teams-title">{CharacterName} Melhores Times</h2>
        <br />
        <section id="teams-section">
            <p>{TeamsDescription}</p>
            <br />
            <h3>{CharacterName} Time {TeamsTitle[0]}</h3>
            <p>{TeamsCharacterDescription[0]}</p>
            <br />
            <div className="character-team-container">{children[2]}</div>
            <br />
            <h3>{CharacterName} Time {TeamsTitle[1]}</h3>
            <p>{TeamsCharacterDescription[1]}</p>
            <br />
            <div className="character-team-container">{children[3]}</div>
            <br />
            <h3>{CharacterName} Time {TeamsTitle[2]}</h3>
            <p>{TeamsCharacterDescription[2]}</p>
            <br />
            <div className="character-team-container">{children[4]}</div>
        </section>
</main> </>
}

export default Characters