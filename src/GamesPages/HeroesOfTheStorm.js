import React from 'react'
import Footer from '../components/Footer'
import GameDescription from '../components/GameDescription'
import HelpBanner from '../components/HelpBanner'
import HeroSectionPicture from '../components/HeroSectionPicture'

function HeroesOfTheStorm() {
    const gameRules = [
        { title: 'Mode', content: 'Standard' },
        { title: 'Confidentialité', content: 'Normale' },
        { title: 'Condition de victoire', content: 'Déstruction du nexus' },
    ];
    return (
        <>
            <HeroSectionPicture title="Heroes of the Storm" imageSrc="hots" />
            <GameDescription
                gameRules={gameRules}

                addtionnalDescription="Heroes of the Storm est un MOBA se déroulant dans l'univers des franchises Blizzard. 2 équipes s'affrontent sur différentes cartes afin de détruire la base ennemie. Le jeu se distingue en propsant plusieurs cartes de jeu et des objectifs uniques liés à celles-ci."
            />
            <HelpBanner />
            <Footer />
        </>
    )
}

export default HeroesOfTheStorm
