import React from 'react'
import '../styles/App.css'
import '../styles/GameDescription.css'

function GameDescription(props) {
    const tableContent = props.gameRules.map((gameRule) =>
        <>
            <tr>
                <td>{gameRule.title}</td>
                <td>{gameRule.content}</td>
            </tr>
        </>
    );

    return (
        <div className="game_description_container">
            <table>
                <thead>
                    <tr>
                        <th colSpan="2">Informations</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
            <div className="game_description_additional_content">
                <p className="game_description_additional_content_text">{props.addtionnalDescription}</p>
            </div>
        </div>
    )
}

export default GameDescription
