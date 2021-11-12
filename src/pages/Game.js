import React from 'react'
import '../styles/App.css'
import Footer from '../components/Footer'
import GameDescription from '../components/GameDescription'
import HelpBanner from '../components/HelpBanner'
import HeroSectionPicture from '../components/HeroSectionPicture'

function Game() {
    return (
        <>
        <HeroSectionPicture title="Game 1" />
        <GameDescription />
        <HelpBanner />
        <Footer />
        </>
    )
}

export default Game
