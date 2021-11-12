// import React, { useState } from 'react'
import React from 'react'
import '../styles/GamesList.css'
import GameItem from './GameItem'
// import Axios from 'axios'

function GamesList() {
    return (
        <div className='cards'>
            <h1>Les jeux</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <GameItem
                        src='images/lol-cover.jpg'
                        text='League of Legends'
                        label='MOBA'
                        path='/game/league-of-legends'
                        gridPlace="one"
                    />
                    <GameItem
                        src='images/rocket-league-cover.jpg'
                        text='Rocket League'
                        label='Sport'
                        path='/game/rocket-league'
                        gridPlace="two"
                    />
                    <GameItem
                        src='images/csgo-cover.jpg'
                        text='CS:GO'
                        label='Tir'
                        path='/game/cs-go'
                        gridPlace="three"
                    />
                    <GameItem
                        src='images/valorant-cover.png'
                        text='Valorant'
                        label='Tir'
                        path='/game/valorant'
                        gridPlace=""
                    />
                    <GameItem
                        src='images/hots-cover.jpg'
                        text='Heroes of the Storm'
                        label='MOBA'
                        path='/game/heroes-of-the-storm'
                    />
                    <GameItem
                        src='images/haxball-cover.png'
                        text='Haxball'
                        label='Sport'
                        path='/game/haxball'
                    />
                    <GameItem
                        src='images/slapshot-cover.jpg'
                        text='Slapshot'
                        label='Sport'
                        path='/game/slapshot'
                    />
                    <GameItem
                        src='images/chess-cover.png'
                        text='Echecs'
                        label='Stratégie'
                        path='/game/chess'
                        gridPlace=""
                    />
                    <GameItem
                        src='images/battlerite-cover.jpg'
                        text='Battlerite'
                        label='Arène'
                        path='/game/battlerite'
                        gridPlace=""
                    />
                    <GameItem
                        src='images/slappyball-cover.jpg'
                        text='Slappyball'
                        label='Sport'
                        path='/game/slappyball'
                        gridPlace="two"
                    />
                </div>
            </div>
        </div>
    );
}

export default GamesList
