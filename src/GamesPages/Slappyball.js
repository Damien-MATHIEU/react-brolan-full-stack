import React from 'react'
import Footer from '../components/Footer'
import GameDescription from '../components/GameDescription'
import HelpBanner from '../components/HelpBanner'
import HeroSectionPicture from '../components/HeroSectionPicture'

function Slappyball() {
    const gameRules = [
        { title: 'Règles', content: 'On sait pas GL HF' },
    ];
    return (
        <>
            <HeroSectionPicture title="Slappyball" imageSrc="slappyball" />
            <GameDescription
                gameRules={gameRules}
                addtionnalDescription="Slappyball est simplement un jeu de volleyball où vous controllez une main. Pas plus d'informations à savoir mdr."
            />
            <HelpBanner />
            <Footer />
        </>
    )
}

export default Slappyball
