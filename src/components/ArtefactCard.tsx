

export default function ArtefactCard({WeaponsArtefactsContainer, ArtefactCardImage, ArtefactCardAlt, ArtefactRarityImage, ArtefactRarityAlt, ArtefactSubStats, ArtefactDescription}:{
    
    WeaponsArtefactsContainer: string
    ArtefactCardImage: string
    ArtefactCardAlt: string
    ArtefactRarityImage: string
    ArtefactRarityAlt: string
    ArtefactSubStats: any
    ArtefactDescription: any
}) {
    return <div className={'best-optional '+WeaponsArtefactsContainer}> 
    
    <div className="flex-wa">
        <div className="weapons-artefacts-image-container">
            <img
            loading="lazy"
            src={ArtefactCardImage}
            alt={ArtefactCardAlt}
            title={ArtefactCardAlt}
            />
            <br />
            <img
            loading="lazy"
            src={ArtefactRarityImage}
            alt={ArtefactRarityAlt}
            title={ArtefactRarityAlt}
            />
        </div>
        <div className="ag-title">
            <h4>{ArtefactCardAlt}</h4>
            <p><i className="fa-regular fa-hourglass-half"></i>&nbsp;{ArtefactSubStats[0]}</p>
            <p><i className="fa-solid fa-trophy"></i>&nbsp;{ArtefactSubStats[1]}</p>
            <p><i className="fa-solid fa-crown"></i>&nbsp;{ArtefactSubStats[2]}</p>
        </div>
    </div>
    <p className="wa-p-margin-top">{ArtefactDescription[0]}</p>
    <p style={{marginTop:'10px'}}>{ArtefactDescription[1]}</p>
</div>
}