import React from 'react'
import Footer from '../components/Footer'
import GameDescription from '../components/GameDescription'
import HelpBanner from '../components/HelpBanner'
import HeroSectionPicture from '../components/HeroSectionPicture'

function Slapshot() {
    const gameRules = [
        { title: 'Period off', content: '5min' },
        { title: 'Carte', content: 'La 1ère' },
        { title: 'Région', content: 'Europe' },

    ];
    return (
        <>
            <HeroSectionPicture title="Slapshot" imageSrc="slapshot" />
            <GameDescription
                gameRules={gameRules}
                addtionnalDescription="Slapshot est un jeu multijoueur de hockey sur glace, il n'y a pas d'aide pour le contrôle du palet, tout se fait au talent. Bonne chance !"
            />
            <HelpBanner />
            <Footer />
        </>
    )
}

export default Slapshot
