
import Image from "next/image"

export default function Characters(props:any) {
        return <>
       <main id={props.MainElement} className="characters-main">
            
            <section id="section-character" className={props.MainElement}>
                <div id="character-background">
                    <Image
                    priority={true}
                    width={800}
                    height={800}
                    src={props.characterbackground}
                    alt={props.CharacterName}
                    title={props.CharacterName}
                    style={{
                        position:'absolute',
                        bottom:`${props.characterImagePosition[0]}`,
                        left:`${props.characterImagePosition[1]}`,
                        zIndex:'2',
                        height: props.characterImagePosition[2],
                        width:'auto',
                    }}
                    />
                </div>
                <Image width={254} height={234}
                id="emblem"
                src={props.EmblemImage}
                alt={props.EmblemAlt}
                title={props.EmblemAlt}
                loading="eager"
                />
                <div className={props.MainElement}>
                </div>
                <div id="character-name-container">
                    <Image
                    width={234}
                    height={234}
                    src={props.WeaponCharacterImage}
                    alt={props.WeaponCharacterAlt}
                    title={props.WeaponCharacterAlt}
                    />
                    <h1>
                        {props.CharacterName} Build
                    </h1>
                    <div>
                        <p>{props.CharacterFunction}</p>&nbsp;|&nbsp;<p>{props.CharacterElement}</p>
                    </div>
                    <p id="rarity" style={{backgroundImage:props.RarityBackground}}>
                        {props.Rarity}<i className="fa-solid fa-star"></i>
                    </p>
                </div>
            </section>
        <article className="character-section-main">
            
            <h2>{props.BuildTitle}</h2>
            <p>{props.BuildDescription}</p>
            <br />
            <div className="ads"></div>
            <br />
            <h3>{props.CharacterName} Melhor Arma</h3>
            <p>{props.BestWeaponDescription}</p>
            <br />
            <section className="weapons-artefacts-section">
                {props.children[0]}
            </section>
            <br />
            <p>{props.OtherWeapons}</p>
            <br />
            <h3>{props.CharacterName} Melhor Conjunto de Artefatos</h3>
            <p>{props.BestArtefactDescription}</p>
            <br />
            <section className="weapons-artefacts-section">
                {props.children[1]}
            </section>
            <br />
            <h3>{props.CharacterName} Artefatos Sub-Atributos</h3>
            <p>{props.ArtefactSubAttribute}</p>
            <br />
            <h3>{props.CharacterName} Prioridade de Talentos</h3>
            <p>{props.TalentPriority}</p>
        </article>
        <br />
        <br />
        <h2 id="best-teams-title">{props.CharacterName} Melhores Times</h2>
        <br />
        <section id="teams-section">
            <p>{props.TeamsDescription}</p>
            <br />
            <h3>{props.CharacterName} Time {props.TeamsTitle[0]}</h3>
            <p>{props.TeamsCharacterDescription[0]}</p>
            <br />
            <div className="character-team-container">{props.children[2]}</div>
            <br />
            <h3>{props.CharacterName} Time {props.TeamsTitle[1]}</h3>
            <p>{props.TeamsCharacterDescription[1]}</p>
            <br />
            <div className="character-team-container">{props.children[3]}</div>
            <br />
            <h3>{props.CharacterName} Time {props.TeamsTitle[2]}</h3>
            <p>{props.TeamsCharacterDescription[2]}</p>
            <br />
            <div className="character-team-container">{props.children[4]}</div>
        </section>
</main> </>
}
