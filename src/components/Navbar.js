import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { Button } from './Button'

function Navbar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const [button, setButton] = useState(true)
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        closeDropdown()
        showButton()
        dropdown()
    }, [])

    window.addEventListener('resize', showButton)

    function dropdown() {
        document.addEventListener("click", e => {
            const isDropdownButton = e.target.matches("[data-dropdown-button]")
            if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

            let currentDropdown
            if (isDropdownButton) {
                currentDropdown = e.target.closest("[data-dropdown]")
                currentDropdown.classList.toggle("active")
                document.getElementById('arrow').classList.toggle('arrow-up')
            }

            document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
                if (dropdown === currentDropdown) return
                dropdown.classList.remove("active")
                document.getElementById('arrow').classList.remove('arrow-up')
            })
        })
    }

    function closeDropdown() {
        closeMobileMenu()

        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
            dropdown.classList.remove("active")
        })

        document.getElementById('arrow').classList.remove('arrow-up')
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src="/images/logo3d3.png" className="logo" alt="The BroLan logo" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <div className="dropdown" data-dropdown >
                            <button className="nav-item nav-links" data-dropdown-button>Jeux<i class="arrow" id="arrow"></i></button>

                            <div className="dropdown-menu information-list">
                                <div className="dropdown-links">
                                    <Link to="/games" className="dropdown-link" onClick={closeDropdown}><span className="emoji-container">🎮</span> Tous les jeux</Link>
                                    <Link to="/game/league-of-legends" className="dropdown-link" onClick={closeDropdown}><span className="emoji-container">⚔️</span> League of Legends</Link>
                                    <Link to="/game/rocket-league" className="dropdown-link" onClick={closeDropdown}><span className="emoji-container">🚙</span> Rocket League</Link>
                                    <Link to="/game/cs-go" className="dropdown-link" onClick={closeDropdown}><span className="emoji-container">💣</span> CS:GO</Link>
                                    <Link to="/game/valorant" className="dropdown-link" onClick={closeDropdown}><span className="emoji-container">🔫</span> Valorant</Link>
                                    <Link to="/game/heroes-of-the-storm" className="dropdown-link" onClick={closeDropdown}><span className="emoji-container">⚡</span> Heroes of the Storm</Link>
                                    <Link to="/game/haxball" className="dropdown-link" onClick={closeDropdown}><span className="emoji-container">🥌</span> Haxball</Link>
                                    <Link to="/game/slapshot" className="dropdown-link" onClick={closeDropdown}><span className="emoji-container">🏒</span> Slapshot</Link>
                                    <Link to="/game/chess" className="dropdown-link" onClick={closeDropdown}><span className="emoji-container">♟️</span> Echecs</Link>
                                    <Link to="/game/battlerite" className="dropdown-link" onClick={closeDropdown}><span className="emoji-container">🛡️</span> Battlerite</Link>
                                    <Link to="/game/slappyball" className="dropdown-link" onClick={closeDropdown}><span className="emoji-container">🏐</span> Slappyball</Link>
                                </div>
                            </div>
                        </div>
                        <li className="nav-item">
                            <Link to="/scores" className="nav-links" onClick={closeMobileMenu}>Scores</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/prizes" className="nav-links" onClick={closeMobileMenu}>Récompenses</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
                        </li>
                        {window.innerWidth <= 960 && !isFinished() &&
                            <li className="nav-item">
                                <Button buttonStyle="btn--outline" buttonSize="btn--small" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Brolan&details=Participe+%C3%A0+la+4%C3%A8me+%C3%A9dition+de+la+Brolan+et+mesure+toi+%C3%A0+9+autres+%C3%A9quipes+sur+10+jeux+diff%C3%A9rents&location=Chez+toi&dates=20211105T180000Z%2F20211105T225900Z" target="_blank" >Ajouter au calendrier</Button>
                            </li>
                        }
                        {window.innerWidth <= 960 && isFinished() &&
                            <li className="nav-item">
                                <Button buttonStyle="btn--outline--red" href="https://www.twitch.tv/deasp_" target="_blank">Voir le stream</Button>
                            </li>}
                    </ul>
                    {isFinished()
                        ? button && <Button buttonStyle="btn--outline--red" href="https://www.twitch.tv/deasp_" target="_blank">Voir le stream</Button>
                        : button && <Button buttonStyle="btn--outline" buttonSize="btn--small" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Brolan&details=Participe+%C3%A0+la+4%C3%A8me+%C3%A9dition+de+la+Brolan+et+mesure+toi+%C3%A0+9+autres+%C3%A9quipes+sur+10+jeux+diff%C3%A9rents&location=Chez+toi&dates=20211105T180000Z%2F20211105T225900Z" target="_blank" >Ajouter au calendrier</Button>
                    }
                </div>
            </nav>
        </>
    )
}

function isFinished() {
    let lanDate = "Nov 05, 2021 19:00:00",
        countDown = new Date(lanDate).getTime();

    let now = new Date().getTime(),
        distance = countDown - now;

    if (distance < 0) {
        return true;
    } else {
        return false;
    }
}

export default Navbar
