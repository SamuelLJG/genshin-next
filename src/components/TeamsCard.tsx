import Image from "next/image"

import Link from "next/link"

export default function TeamsCard(props:any) {
    return <> 
    <Link href={props.CharacterUrl} className="character-team-card">
        <Image
            width={80}
            height={80} className={props.CharacterTeamElement} src={props.CharacterTeamNameImage} alt={props.CharacterTeamName} title={props.CharacterTeamName} />
        <h4>{props.CharacterTeamName}</h4>
        <p>{props.CF[props.id]}</p>
        

    </Link>
</>
}