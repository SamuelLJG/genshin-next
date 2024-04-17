
export default function WeaponCard({WeaponsArtefactsContainer, WeaponCardImage, WeaponCardAlt, WeaponRarityImage, WeaponRarityAlt, WeaponSubStats, WeaponDescription}: {
    WeaponsArtefactsContainer: string
    WeaponCardImage: string
    WeaponCardAlt: string
    WeaponRarityImage: string
    WeaponRarityAlt: string
    WeaponSubStats: string
    WeaponDescription: string
}) {
    return <div className={'best-optional '+WeaponsArtefactsContainer}> 
    <div className="flex-wa">
        <div className="weapons-artefacts-image-container">
            <img
            loading="lazy"
            src={WeaponCardImage}
            alt={WeaponCardAlt}
            title={WeaponCardAlt}
            />
            <br />
            <img
            loading="lazy"
            src={WeaponRarityImage}
            alt={WeaponRarityAlt}
            title={WeaponRarityAlt}
            />
        </div>
        <div className="ag-title">
            <h4>{WeaponCardAlt}</h4>
            <p>{WeaponSubStats}</p>
        </div>
    </div>
    <p className="wa-p-margin-top">{WeaponDescription}</p>
</div>
}