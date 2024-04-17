

import Link from "next/link"

export default function TeamsCard({CharacterTeamName, CharacterUrl, CharacterTeamNameImage, CharacterTeamElement, CF, id}: {
    CharacterTeamName: string
    CharacterUrl: string
    CharacterTeamNameImage: string
    CharacterTeamElement: string
    CF: any
    id: number
}) {
    return <> 
    <Link href={CharacterUrl} className="character-team-card">
        <img loading="lazy" className={CharacterTeamElement} src={CharacterTeamNameImage} alt={CharacterTeamName} title={CharacterTeamName} />
        <h4>{CharacterTeamName}</h4>
        <p>{CF[id]}</p>
        

    </Link>
</>
}