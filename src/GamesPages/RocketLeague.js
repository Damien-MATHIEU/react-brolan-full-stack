import React from 'react'
import Footer from '../components/Footer'
import GameDescription from '../components/GameDescription'
import HelpBanner from '../components/HelpBanner'
import HeroSectionPicture from '../components/HeroSectionPicture'

function RocketLeague() {
    const gameRules = [
        { title: 'Mode', content: 'Foot car' },
        { title: 'Arène', content: 'Aléatoire' },
        { title: 'Région', content: 'Europe' },
        { title: 'Temps', content: '5min' },
    ];
    return (
        <>
            <HeroSectionPicture title="Rocket League" imageSrc="rocket_league" />
            <GameDescription
                gameRules={gameRules}
                addtionnalDescription="Rocket League est inspiré du football : deux équipes, composées de un à quatre joueurs conduisant des véhicules, s'affrontent au cours d'un match afin de frapper un ballon et de marquer dans le but adverse. Les voitures sont équipées de propulseurs (boost) et peuvent sauter, permettant de jouer le ballon dans les airs."
            />
            <HelpBanner />
            <Footer />
        </>
    )
}

export default RocketLeague
