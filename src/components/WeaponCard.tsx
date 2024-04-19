"use client"
import Image from "next/image"

export default function WeaponCard(props:any) {
    return <div className={'best-optional '+props.WeaponsArtefactsContainer}> 
    
    <div className="flex-wa">
        <div className="weapons-artefacts-image-container">
            <Image 
            width={80}
            height={80}
            style={{width:'22vw', maxWidth:'90px', height:'auto',  maxHeight:'90px'}}
            loading="lazy"
            src={props.WeaponCardImage}
            alt={props.WeaponCardAlt}
            title={props.WeaponCardAlt}
            />
            <br />
            <Image 
            width={80} 
            height={80}
            style={{height:'5vw', width:'auto', maxWidth:'90px',  maxHeight:'20px !important'}}
            loading="lazy"
            src={props.WeaponRarityImage}
            alt={props.WeaponRarityAlt}
            title={props.WeaponRarityAlt}
            />
        </div>
        <div className="ag-title">
            <h4>{props.WeaponCardAlt}</h4>
            <p>{props.WeaponSubStats}</p>
        </div>
    </div>
    <p className="wa-p-margin-top">{props.WeaponDescription}</p>
</div>
}