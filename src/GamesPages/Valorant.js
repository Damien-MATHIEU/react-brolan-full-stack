import React from 'react'
import Footer from '../components/Footer'
import GameDescription from '../components/GameDescription'
import HelpBanner from '../components/HelpBanner'
import HeroSectionPicture from '../components/HeroSectionPicture'

function Valorant() {
    const gameRules = [
        { title: 'Carte', content: 'Libre' },
        { title: 'Manches', content: '13' },
    ];
    return (
        <>
            <HeroSectionPicture title="Valorant" imageSrc="valorant" />
            <GameDescription
                gameRules={gameRules}
                addtionnalDescription="Valorant est un jeu de tir à la 1ère personne. Contrairement aux jeux de tir traditionnaux, vous pouvez choisir des personnages ayant des sorts et aptitudes uniques. En plus des armes traditionnelles à acheter à chaque début de manche."
            />
            <HelpBanner />
            <Footer />
        </>
    )
}

export default Valorant
