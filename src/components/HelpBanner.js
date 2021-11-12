import React from 'react'
import '../styles/HelpBanner.css'
import { Button } from './Button'

function HelpBanner() {
    return (
        <div className="help_banner_container">
            <div className="games_cta_transparent">
                <div className="games_cta_margin">
                    <h2 className="help_banner_title">Des questions ?</h2>
                    <p className="help_banner_description">Contactez Deasp#5627 sur discord</p>
                    <div className="games_cta_div_button">
                        <Button className="help_banner_button" buttonStyle="btn--outline" buttonSize="btn--medium" href="https://discord.gg/fhj9zyCvMc" target="_blank">Discord</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HelpBanner
