import React from 'react'
import '../styles/GamesCTA.css'
import { Button } from './Button'

function GamesCTA() {
    return (
        <>
        <div className="games_cta_container">
            <div className="games_cta_transparent">
                <div className="games_cta_margin">
                    <h3 className="games_cta_text">Les 24 meilleurs joueurs français s'affrontent sur 10 jeux</h3>
                    <div className="games_cta_div_button">
                        <Button href="/games" buttonStyle="btn--outline" buttonSize="btn--large" className="games_cta_button">Voir les jeux</Button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default GamesCTA
