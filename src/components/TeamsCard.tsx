import Image from "next/image"

import Link from "next/link"

export default function TeamsCard(props:any) {
    return <> 
    <Link href={props.CharacterUrl} className="character-team-card">
        <Image
        width={116}
        height={116}
        style={{width:'19vw', maxWidth:'116px', height:'auto',  maxHeight:'116px'}}
        className={props.CharacterTeamElement}
        src={`/images/Characters/${props.CharacterTeamNameImage}.webp`}
        alt={props.CharacterTeamName}
        title={props.CharacterTeamName}
        />
        <h4>{props.CharacterTeamName}</h4>
        <p>{props.CF[props.id]}</p>
        

    </Link>
</>
}