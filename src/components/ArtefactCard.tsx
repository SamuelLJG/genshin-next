
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
            style={{height:'5vw', width:'auto', maxWidth:'90px',  maxHeight:'20px'}}
            loading="lazy"
            src={props.ArtefactRarityImage}
            alt={props.ArtefactRarityAlt}
            title={props.ArtefactRarityAlt}
            />
        </div>
        <div className="ag-title">
            <h4>{props.ArtefactCardAlt}</h4>
            <p>
                <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" style={{verticalAlign:'top'}}>
                    <title>Areia do Tempo</title>
                    <path d="M9.41763 18.5409C10.1913 17.3978 11.2839 16 12 16C12.7161 16 13.8087 17.3978 14.5824 18.5409C15.0129 19.1769 14.5438 20 13.7757 20H10.2243C9.45619 20 8.9871 19.1769 9.41763 18.5409Z" fill="#ffffff"/>
                    <path d="M12 9C12.3511 9 12.9855 8.23437 13.5273 7.47668C13.9798 6.84397 13.5091 6 12.7313 6L11.2687 6C10.4909 6 10.0202 6.84397 10.4727 7.47668C11.0145 8.23437 11.6489 9 12 9Z" fill="#ffffff"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 2C4 1.44772 4.44772 1 5 1H19C19.5523 1 20 1.44772 20 2C20 2.55228 19.5523 3 19 3H17.9726C17.8373 5.41131 17.21 7.23887 16.2903 8.7409C15.4882 10.0511 14.4804 11.0808 13.4874 12C14.4804 12.9192 15.4882 13.9489 16.2903 15.2591C17.21 16.7611 17.8373 18.5887 17.9726 21H19C19.5523 21 20 21.4477 20 22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22C4 21.4477 4.44772 21 5 21H6.02739C6.16267 18.5887 6.79004 16.7611 7.70965 15.2591C8.51183 13.9489 9.51962 12.9192 10.5126 12C9.51962 11.0808 8.51183 10.0511 7.70965 8.7409C6.79004 7.23887 6.16267 5.41131 6.02739 3H5C4.44772 3 4 2.55228 4 2ZM15.9691 21C15.8384 18.9511 15.3049 17.4797 14.5846 16.3034C13.8874 15.1645 12.9954 14.2641 12 13.3497C11.0046 14.2641 10.1126 15.1645 9.41535 16.3034C8.69515 17.4797 8.1616 18.9511 8.03092 21H15.9691ZM8.03092 3H15.9691C15.8384 5.04891 15.3049 6.52026 14.5846 7.6966C13.8874 8.83549 12.9954 9.73587 12 10.6503C11.0046 9.73587 10.1126 8.83549 9.41535 7.6966C8.69515 6.52026 8.1616 5.04891 8.03092 3Z" fill="#ffffff"/>
                </svg>
                &nbsp;
                {props.ArtefactSubStats[0]}
            </p>
            <p>
                <svg  height="1.2em" width="1.2em" viewBox="0 0 32 32" style={{verticalAlign:'top'}}>
                    <title>Cálice de Erátema</title>
                    <path fill="#ffffff" d="M29,6h-5V5c0-0.6-0.4-1-1-1H9C8.4,4,8,4.4,8,5v1H3C2.4,6,2,6.4,2,7v2.7c0,4.4,3.4,8,7.8,8.2c0.8,1.1,1.9,1.9,3.2,2.4V23h-1 c-1.7,0-3,1.3-3,3v3c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1v-3c0-1.7-1.3-3-3-3h-1v-2.6c1.3-0.5,2.4-1.4,3.2-2.4 c4.3-0.3,7.8-3.8,7.8-8.2V7C30,6.4,29.6,6,29,6z M4,9.7V8h4v5c0,1,0.2,1.9,0.5,2.7C5.9,15,4,12.6,4,9.7z M28,9.7 c0,2.8-1.9,5.2-4.5,6C23.8,14.9,24,14,24,13V8h4V9.7z"/> 
                </svg>
                &nbsp;{props.ArtefactSubStats[1]}
            </p>
            <p>
            <svg height="1.2em" width="1.2em" viewBox="0 0 512 512" style={{verticalAlign:'top', marginRight:'.5px'}}>
                    <title>Tiara de Logos</title>
                <path fill="#ffffff" d="M355.86,219.684L256,63.436l-99.86,156.248L0,145.724l79.068,302.84h353.863L512,145.724L355.86,219.684z M256,390.746
			    l-54.184-84.648L256,221.449l54.184,84.649L256,390.746z"/>
            </svg>
                &nbsp;
                {props.ArtefactSubStats[2]}
            </p>
        </div>
    </div>
    <p className="wa-p-margin-top">{props.ArtefactDescription[0]}</p>
    <p style={{marginTop:'10px'}}>{props.ArtefactDescription[1]}</p>
</div>
}