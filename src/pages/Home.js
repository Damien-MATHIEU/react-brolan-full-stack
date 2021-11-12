import React from 'react'
import '../styles/App.css'
import Footer from '../components/Footer'
import HeroSectionCountdown from '../components/HeroSectionCountdown'
import VideoPresentation from '../components/VideoPresentation'
import TeamsTable from '../components/TeamsTable'
import GamesCTA from '../components/GamesCTA'
import VideoTrailer from '../components/VideoTrailer'

function Home() {
    return(
        <>
        <HeroSectionCountdown />
        <VideoPresentation />
        <TeamsTable />
        <VideoTrailer />
        <GamesCTA />
        <Footer />
        </>
    )
}

export default Home