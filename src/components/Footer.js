import React from 'react'
import "../styles/Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer-container">
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src="/images/logo3d3.png" className="logo" alt="The BroLan logo" />
                        </Link>
                    </div>
                    <small class='website-rights'>Brolan © 2021</small>
                    <div class='social-icons'>
                        <Link class='social-icon-link discord' to={{ pathname: "https://discord.gg/fhj9zyCvMc" }} target='_blank' aria-label='Discord' title="Lien du Discord">
                            <i class="fab fa-discord fa-2x"></i>
                        </Link>
                        <Link class='social-icon-link bug' to={{ pathname: 'mailto:contact@dutch-en-ligne.fr?subject=Brolan%20:%20Signaler%20un%20bug' }} target='_blank' aria-label='Discord' title="Signaler un bug">
                            <i class="fas fa-bug fa-lg"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer
