import React from 'react'
import '../styles/App.css'
// import HeroSectionCountdown from '../components/HeroSectionCountdown'
import Footer from '../components/Footer'
import GamesList from '../components/GamesList'

function Games() {
    return (
        <>
            {/* <HeroSectionCountdown /> */}
            <GamesList />
            <Footer />
        </>
    )
}

export default Games
