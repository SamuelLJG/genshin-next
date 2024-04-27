"use client"

import Image from "next/image"
import { useState } from "react"


export default function FilterCharacters () {
    
const [fivenone, setFiveNone] = useState(true)
const [fournone, setFourNone] = useState(true)
function FourStar () {
    setFiveNone(!fivenone)
  }
  function FiveStar () {
    setFourNone(!fournone)
  }
  return <>
        <div id="characters-filter">
            <div style={{display:'flex',gap:'10px'}}>
            <button onClick={FourStar}>
                <svg width="1.5em" height="1.5em" viewBox="0 0 64 64" style={{marginLeft:'2px',verticalAlign:'top'}}><path fill="#b788ca" d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15 C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343 c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957 c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25 c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657 C63.951,25.771,64.131,24.987,63.893,24.277z"></path>
                </svg>
            </button>
            <button onClick={FiveStar}>
                <svg width="1.5em" height="1.5em" viewBox="0 0 64 64" style={{marginLeft:'2px',verticalAlign:'top'}}><path fill="#d5ac64" d="M63.893,24.277c-0.238-0.711-0.854-1.229-1.595-1.343l-19.674-3.006L33.809,1.15 C33.479,0.448,32.773,0,31.998,0s-1.48,0.448-1.811,1.15l-8.815,18.778L1.698,22.935c-0.741,0.113-1.356,0.632-1.595,1.343 c-0.238,0.71-0.059,1.494,0.465,2.031l14.294,14.657L11.484,61.67c-0.124,0.756,0.195,1.517,0.822,1.957 c0.344,0.243,0.747,0.366,1.151,0.366c0.332,0,0.666-0.084,0.968-0.25l17.572-9.719l17.572,9.719c0.302,0.166,0.636,0.25,0.968,0.25 c0.404,0,0.808-0.123,1.151-0.366c0.627-0.44,0.946-1.201,0.822-1.957l-3.378-20.704l14.294-14.657 C63.951,25.771,64.131,24.987,63.893,24.277z"></path>
                </svg>
            </button>
            </div>
            <div className="vertical-hr"></div>
            <div id="elements-filter">
                <button><Image loading='eager' src="/images/We/element_anemo.webp" width={30} height={30} alt="Elemento Anemo" title='Elemento Anemo' /></button>
                <button><Image loading='eager' src="/images/We/element_cryo.webp" width={30} height={30} alt="Elemento Cryo" title='Elemento Cryo' /></button>
                <button><Image loading='eager' src="/images/We/element_dendro.webp" width={30} height={30} alt="Elemento Dendro" title='Elemento Dendro' /></button>
                <button><Image loading='eager' src="/images/We/element_electro.webp" width={30} height={30} alt="Elemento Electro" title='Elemento Electro' /></button>
                <button><Image loading='eager' src="/images/We/element_geo.webp" width={30} height={30} alt="Elemento Geo" title='Elemento Geo' /></button>
                <button><Image loading='eager' src="/images/We/element_hydro.webp" width={30} height={30} alt="Elemento Hydro" title='Elemento Hydro' /></button>
                <button><Image loading='eager' src="/images/We/element_pyro.webp" width={30} height={30} alt="Elemento Pyro" title='Elemento Pyro' /></button>
            </div>
            <div className="vertical-hr"></div>
            <div id="weapons-filter">
                <button><Image loading='eager' src="/images/We/Icon_Sword.webp" width={50} height={50} alt="Sword" title="Sword" /></button>
                <button><Image loading='eager' src="/images/We/Icon_Claymore.webp" width={50} height={50} alt="Claymore" title="Claymore" /></button>
                <button><Image loading='eager' src="/images/We/Icon_Bow.webp" width={50} height={50} alt="Bow" title="Bow" /></button>
                <button><Image loading='eager' src="/images/We/Icon_Polearm.webp" width={50} height={50} alt="Polearm" title="Polearm" /></button>
                <button><Image loading='eager' src="/images/We/Icon_Catalyst.webp" width={50} height={50} alt="Catalyst" title="Catalyst" /></button>
            </div>
        </div>
        </>
}
