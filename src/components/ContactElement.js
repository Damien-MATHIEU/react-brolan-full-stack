import React from 'react'
import '../styles/ContactElement.css'
import { Button } from './Button'

function Contact() {
    return (
        <div className="contact_background">
            <div className="contact_transparent">
                <div className="contact_container">
                    <div className="contact_discord">
                        <h2 className="contact_sub_title">Discord</h2>
                        <p className="contact_sub_description">Le discord officiel de la Brolan</p>
                        <p className="contact_sub_description">Organisateur : Deasp#5627</p>
                        <Button buttonSize="btn--medium" buttonStyle="btn--outline" href="https://discord.gg/fhj9zyCvMc" target="_blank">Contacter</Button>
                    </div>
                    <div className="contact_bug">
                        <h2 className="contact_sub_title">Signaler un bug</h2>
                        <p className="contact_sub_description">Vous rencontrez un problème ?</p>
                        <Button buttonSize="btn--medium" buttonStyle="btn--outline" href="mailto:contact@dutch-en-ligne.fr?subject=Brolan%20:%20Signaler%20un%20bug" target="_blank">Signaler</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
