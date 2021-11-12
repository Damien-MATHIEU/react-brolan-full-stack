import React from 'react'
import '../styles/App.css'
import Footer from '../components/Footer'
import FinaleBracket from '../components/FinaleBracket'
import OpeningBracketOne from '../components/OpeningBracketOne'
import OpeningBracketTwo from '../components/OpeningBracketTwo'
import SecondChanceBracketOne from '../components/SecondChanceBracketOne'
import SecondChanceBracketTwo from '../components/SecondChanceBracketTwo'
import LoserBracketOne from '../components/LoserBracketOne'
import LoserBracketTwo from '../components/LoserBracketTwo'
import WinnerBracketOne from '../components/WinnerBracketOne'
import WinnerBracketTwo from '../components/WinnerBracketTwo'
import SmallFinal from '../components/SmallFinal'
import SmallFinalTwo from '../components/SmallFinalTwo'

function Scores() {
    return (
        <>
        <OpeningBracketOne />
        <OpeningBracketTwo />

        <SecondChanceBracketOne />
        <SecondChanceBracketTwo />

        <LoserBracketOne />
        <LoserBracketTwo />

        <WinnerBracketOne />
        <WinnerBracketTwo />

        <SmallFinal />
        <SmallFinalTwo />

        <FinaleBracket />

        <Footer />
        </>
    )
}

export default Scores
