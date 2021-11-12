import React from 'react'
import { Button } from './Button'
import '../styles/HeroSectionCountdown.css'

function HeroSectionCountdown() {

    return (
        <div className="hero-container">
            <h1>Brolan 4ème édition</h1>
            <p>Le 05/11/21 à 19h</p>
            <div id="countdown">
                <ul>
                    <li className="li_countdown"><span id="days"></span>Jours</li>
                    <li className="li_countdown"><span id="hours"></span>Heures</li>
                    <li className="li_countdown"><span id="minutes"></span>Minutes</li>
                    <li className="li_countdown"><span id="seconds"></span>Secondes</li>
                </ul>
            </div>
            <div id="content" class="emoji">
                <span>La lan a commencé !</span>
            </div>
            <div className="hero-btns">
                {isFinished()
                    ? <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" href="https://www.twitch.tv/deasp_" target="_blank" id="hero_button_stream">Voir le stream</Button>
                    : <Button buttonStyle="btn--primary" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Brolan&details=Participe+%C3%A0+la+4%C3%A8me+%C3%A9dition+de+la+Brolan+et+mesure+toi+%C3%A0+9+autres+%C3%A9quipes+sur+10+jeux+diff%C3%A9rents&location=Chez+toi&dates=20211105T180000Z%2F20211105T225900Z" target="_blank" >Ajouter au calendrier</Button>
                }
            </div>
            {Countdown()}
        </div>
    )
}

function Countdown() {

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let lanDate = "Nov 05, 2021 19:00:00",
        countDown = new Date(lanDate).getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            if (document.getElementById("days") === null || document.getElementById("hours") === null || document.getElementById("minutes") === null || document.getElementById("seconds") === null) {
                return;
            }

            if (Math.floor(distance / (day)) >= 10) {
                document.getElementById("days").innerText = Math.floor(distance / (day));
            } else {
                document.getElementById("days").innerText = '0' + Math.floor(distance / (day));
            }

            if (Math.floor((distance % (day)) / (hour)) >= 10) {
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
            } else {
                document.getElementById("hours").innerText = '0' + Math.floor((distance % (day)) / (hour));
            }
            if (Math.floor((distance % (hour)) / (minute)) >= 10) {
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
            } else {
                document.getElementById("minutes").innerText = '0' + Math.floor((distance % (hour)) / (minute));
            }
            if (Math.floor((distance % (minute)) / second) >= 10) {
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            } else {
                document.getElementById("seconds").innerText = '0' + Math.floor((distance % (minute)) / second);
            }

            if (distance < 0) {
                let countdown = document.getElementById("countdown");
                let content = document.getElementById("content");

                countdown.style.display = "none";
                content.style.display = "block";

                clearInterval(x);
            }
        }, 0)
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

export default HeroSectionCountdown
