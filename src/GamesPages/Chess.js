import React from 'react'
import Footer from '../components/Footer'
import GameDescription from '../components/GameDescription'
import HelpBanner from '../components/HelpBanner'
import HeroSectionPicture from '../components/HeroSectionPicture'

function Chess() {
    const gameRules = [
        { title: 'Temps', content: '10min' },
        { title: 'Mode', content: 'Standard' },
        { title: 'Règles', content: 'Si égalité, nouvelle partie en 3min' },
    ];
    return (
        <>
            <HeroSectionPicture title="Echecs" imageSrc="chess" />
            <GameDescription
                gameRules={gameRules}
                addtionnalDescription="Les échecs est un jeu de société opposant deux joueurs de part et d’autre d'un échéquier. Les joueurs jouent à tour de rôle en déplaçant l'une de leurs seize pièces, claires pour le camp des blancs, sombres pour le camp des noirs. Chaque joueur possède au départ un roi, une dame, deux tours, deux fous, deux cavaliers et huit pions. Le but du jeu est d'infliger à son adversaire un échec et mat, une situation dans laquelle le roi d'un joueur est en prise sans qu'il soit possible d'y remédier."
            />
            <HelpBanner />
            <Footer />
        </>
    )
}

export default Chess
