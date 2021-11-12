import React from 'react'
import Footer from '../components/Footer'
import GameDescription from '../components/GameDescription'
import HelpBanner from '../components/HelpBanner'
import HeroSectionPicture from '../components/HeroSectionPicture'

function LeagueOfLegends() {
    const gameRules = [
        { title: 'Carte', content: 'Abîme hurlant' },
        { title: 'Type', content: 'Mode aveugle' },
        { title: 'Condition de victoire', content: 'Détruire le nexus ennemi' },
    ];
    return (
        <>
            <HeroSectionPicture title="League of Legends" imageSrc="league_of_legends" />
            <GameDescription
                gameRules={gameRules}
                addtionnalDescription="League of Legends est un jeu de stratégie en équipe dans lequel deux équipes s'affrontent pour détruire la base adverse. Faites votre choix parmi plus de 140 champions disponibles, partez au combat, éliminez vos adversaires avec adresse et abattez les tourelles ennemies pour décrocher la victoire."
            />
            <HelpBanner />
            <Footer />
        </>
    )
}

export default LeagueOfLegends
