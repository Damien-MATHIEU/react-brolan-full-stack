import React from 'react'
import '../styles/HeroSectionPicture.css'
import '../styles/App.css'

function HeroSectionPicture({ title, imageSrc }) {
    return (
        <div className={ `hero_container ${imageSrc}` }>
            <h1 className="game_title">{ title }</h1>
        </div>
    )
}

export default HeroSectionPicture
