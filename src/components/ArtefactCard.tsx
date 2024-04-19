"use client"
import Image from "next/image"

export default function ArtefactCard(props:any) {
    return <div className={'best-optional '+props.WeaponsArtefactsContainer}> 
    
    <div className="flex-wa">
        <div className="weapons-artefacts-image-container">
            <Image 
            width={100}
            height={100}
            style={{width:'22vw', maxWidth:'90px', height:'auto',  maxHeight:'90px'}}
            loading="lazy"
            src={props.ArtefactCardImage}
            alt={props.ArtefactCardAlt}
            title={props.ArtefactCardAlt}
            />
            <br />
            <Image 
            width={80}
            height={80}
            style={{height:'5vw', width:'auto', maxWidth:'90px',  maxHeight:'20px !important'}}
            loading="lazy"
            src={props.ArtefactRarityImage}
            alt={props.ArtefactRarityAlt}
            title={props.ArtefactRarityAlt}
            />
        </div>
        <div className="ag-title">
            <h4>{props.ArtefactCardAlt}</h4>
            <p><i className="fa-regular fa-hourglass-half"></i>&nbsp;{props.ArtefactSubStats[0]}</p>
            <p><i className="fa-solid fa-trophy"></i>&nbsp;{props.ArtefactSubStats[1]}</p>
            <p><i className="fa-solid fa-crown"></i>&nbsp;{props.ArtefactSubStats[2]}</p>
        </div>
    </div>
    <p className="wa-p-margin-top">{props.ArtefactDescription[0]}</p>
    <p style={{marginTop:'10px'}}>{props.ArtefactDescription[1]}</p>
</div>
}