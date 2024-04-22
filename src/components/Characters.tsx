
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
                    loading="eager"
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
                <Image width={235} height={235}
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
                    loading="eager"
                    />
                    <h1>
                        {props.CharacterName} Build
                    </h1>
                    <div>
                        <p>{props.CharacterFunction}</p>&nbsp;|&nbsp;<p>{props.CharacterElement}</p>
                    </div>
                    <p id="rarity" style={{backgroundImage:props.RarityBackground}}>
                        {props.Rarity}
                        <svg width=".9em" height="1.2em" viewBox="0 0 64 64" style={{marginLeft:'2px',verticalAlign:'top'}}>
                        <path fill="#ffffff" d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15
                            C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343
                            c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957
                            c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25
                            c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657
                            C63.951,25.771,64.131,24.987,63.893,24.277z"/>
                        </svg>
                    </p>
                </div>
            </section>
        <article className="character-section-main">
            
            <h2 className="title-character">{props.BuildTitle}</h2>
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
        <h2 id="best-teams-title" className="title-character">{props.CharacterName} Melhores Times</h2>
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
