import React from 'react'
import Footer from '../components/Footer'
import GameDescription from '../components/GameDescription'
import HelpBanner from '../components/HelpBanner'
import HeroSectionPicture from '../components/HeroSectionPicture'

function Battlerite() {
    const gameRules = [
        { title: 'Manches', content: '3' },
        { title: 'Temps du round', content: '2min' },
        { title: 'Mode', content: 'Arène' },
        { title: 'Région', content: 'EUW' },
        { title: 'Règles', content: 'Orbe d’âme et mort subite activées' },
    ];
    return (
        <>
            <HeroSectionPicture title="Battlerite" imageSrc="battlerite" />
            <GameDescription
                gameRules={gameRules}
                addtionnalDescription="Battlerite est un jeu de combat en arène PvP, et le successeur spirituel du fameux Bloodline Champions. Découvrez une combinaison unique d'un jeu de tir en vue de dessus et d'un jeu de combat intense, et participez aux combats 2v2 explosifs et hautement compétitifs.
                Plongez dans une action intense et rapide en prenant le contrôle de nombreux Champions, chacun possédant des capacités uniques à maitriser. Entrez dans un monde où les Champions dédient leur vie à l'arène."
            />
            <HelpBanner />
            <Footer />
        </>
    )
}

export default Battlerite
