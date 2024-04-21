import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

    export default function CharacterBuild({ params }: {
      params: { id: string }
  }) {
      return <>
      <body>

      <Header/>
          <h1>Página Home</h1>
          <br />
          <Link href='/albedo'>ALBEDO</Link>
          <br />
          <br />
          <Link href='/alhaitham'>ALHAITHAM</Link>
        <Footer/>
      </body>
      </>
  }

