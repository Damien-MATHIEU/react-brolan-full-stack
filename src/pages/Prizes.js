import React from 'react'
import Footer from '../components/Footer'
import GamesCTA from '../components/GamesCTA'
import PrizesList from '../components/PrizesList'
import '../styles/App.css'

function Prizes() {
    return (
        <>
            <PrizesList />
            <GamesCTA />
            <Footer />
        </>
    )
}

export default Prizes
