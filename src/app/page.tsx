import Link from "next/link"

    export default function CharacterBuild({ params }: {
      params: { id: string }
  }) {
      return <>
      <h1>Página Home</h1>
      <br />
      <Link href='/albedo'>ALBEDO</Link>
      <br />
      <br />
      <Link href='/alhaitham'>ALHAITHAM</Link>
      </>
  }

