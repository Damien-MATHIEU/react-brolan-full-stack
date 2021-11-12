import React from 'react'
import '../styles/PrizesList.css'

function PrizesList() {
    return (
        <div className="prizes_page_container">
            <h1 className="prizes_list_title">Récompenses</h1>
            {/* Desktop */}
            <div className="prizes_list_container desktop">
                <div className="third_prize_container">
                    <div className="third_prize_content_container">
                        <h2 className="prize_content_title">3ème place</h2>
                        <p className="prize_content_description">Rien</p>
                    </div>
                    <div className="third_prize_line"></div>
                </div>
                <div className="first_prize_container">
                    <div className="first_prize_line"></div>
                    <div className="first_prize_content_container">
                        <h2 className="prize_content_title">1ère place</h2>
                        <p className="prize_content_description">1 place assurée à l'édition physique 2022<br />40 euros fnac<br />Peluche pieuvre 2021</p>
                    </div>
                </div>
                <div className="second_prize_container">
                    <div className="second_prize_line"></div>
                    <div className="second_prize_content_container">
                        <h2 className="prize_content_title">2ème place</h2>
                        <p className="prize_content_description">Kit Ruban LED <br />Peluche pieuvre 2021</p>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="prizes_list_container mobile">
                <div className="third_prize_container">
                    <div className="third_prize_content_container">
                        <h2 className="prize_content_title">3ème place</h2>
                        <p className="prize_content_description">Rien</p>
                    </div>
                    <div className="third_prize_line"></div>
                </div>
                <div className="second_prize_container">
                    <div className="second_prize_line"></div>
                    <div className="second_prize_content_container">
                        <h2 className="prize_content_title">2ème place</h2>
                        <p className="prize_content_description">Kit Ruban LED <br />Peluche pieuvre 2021</p>
                    </div>
                </div>
                <div className="first_prize_container">
                    <div className="first_prize_line"></div>
                    <div className="first_prize_content_container">
                        <h2 className="prize_content_title">1ère place</h2>
                        <p className="prize_content_description">1 place assurée à l'édition physique 2022<br />40 euros fnac<br />Peluche pieuvre 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrizesList
