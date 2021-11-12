import React from 'react'
import Footer from '../components/Footer'
import GameDescription from '../components/GameDescription'
import HelpBanner from '../components/HelpBanner'
import HeroSectionPicture from '../components/HeroSectionPicture'

function Haxball() {
    const gameRules = [
        { title: 'Temps', content: '10min' },
        { title: 'Score', content: 'Pas de limite' },
        { title: 'Carte', content: 'Stade classique' },
    ];
    return (
        <>
            <HeroSectionPicture title="Haxball" imageSrc="haxball" />
            <GameDescription
                gameRules={gameRules}
                addtionnalDescription="HaxBall est un jeu en ligne multijoueur, mélangeant le football et le air hockey. L'équipe ayant marqué le plus de point à la fin du timer gagne la partie."
            />
            <HelpBanner />
            <Footer />
        </>
    )
}

export default Haxball
