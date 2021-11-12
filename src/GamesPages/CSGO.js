import React from 'react'
import Footer from '../components/Footer'
import GameDescription from '../components/GameDescription'
import HelpBanner from '../components/HelpBanner'
import HeroSectionPicture from '../components/HeroSectionPicture'

function CSGO() {
    const gameRules = [
        { title: 'Mode', content: 'Wingman' },
        { title: 'Carte', content: 'Inferno' },
        { title: 'Condition de victoire', content: '9 rounds gagnants' },
    ]
    return (
        <>
            <HeroSectionPicture title="CS:GO" imageSrc="csgo" />
            <GameDescription
                gameRules={gameRules}
                addtionnalDescription="Counter-Strike: Global Offensive est un jeu de tir à la première personne multijoueur en ligne. Jouez en tant que terroriste ou antiterroriste. L'équipe marquant le plus de manche gagne la partie."
            />
            <HelpBanner />
            <Footer />
        </>
    )
}

export default CSGO
