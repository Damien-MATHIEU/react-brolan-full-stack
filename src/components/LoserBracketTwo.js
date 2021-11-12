import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/AllScores.css'

function LoserBracketTwo() {
    axios.defaults.withCredentials = true;

    const serverUrl = "https://brolan.damien-mathieu.fr"
    const [selectedGames, setSelectedGames] = useState([])
    const [selectedTeams, setSelectedTeams] = useState([])
    const [selectedScoresTeamOne, setSelectedScoresTeamOne] = useState([])
    const [selectedScoresTeamTwo, setSelectedScoresTeamTwo] = useState([])

    function getSelectedTeams() {
        axios.get(serverUrl + '/admin/brackets/loser/two/teams').then((response) => {
            if (!response) {
                console.log('Error in getSelectedTeams()');
                return
            } else {
                let tmp = response.data.result
                // console.log(tmp);
                setSelectedTeams(tmp.map(item => item.team))
            }
        })
    }

    function getSelectedGames() {
        axios.get(serverUrl + '/admin/brackets/loser/two/games').then((response) => {
            if (!response) {
                console.log('Error in getSelectedGames()');
                return
            } else {
                let tmp = response.data.result
                // console.log(tmp);
                setSelectedGames(tmp.map(item => item.game))
            }
        })
    }

    function getSelectedScores() {
        axios.get(serverUrl + '/admin/brackets/loser/two/scores').then((response) => {
            if (!response) {
                console.log('Error in getSelectedTeams()');
                return
            } else {
                let tmp = response.data.result
                // console.log(tmp);
                tmp.forEach(element => {
                    // eslint-disable-next-line
                    switch (element.id) {
                        case 1:
                            setSelectedScoresTeamOne(element)
                            break

                        case 2:
                            setSelectedScoresTeamTwo(element)
                            break
                    }
                });
                totalScoreCalculate()
            }
        })
    }

    useEffect(() => {
        getSelectedGames()
        getSelectedTeams()
        getSelectedScores()
    }, [])

    return (
        <>
            <h1 className="all_scores_title">Loser bracket 2</h1>
            <div className="all_scores_container">
                <table className="all_scores_table">
                    <thead>
                        <tr>
                            <th></th>
                            {selectedGames[0] !== undefined
                                ? <th>{selectedGames[0]}</th>
                                : <th>Manche 1</th>
                            }
                            {selectedGames[1] !== undefined
                                ? <th>{selectedGames[1]}</th>
                                : <th>Manche 2</th>
                            }
                            {selectedGames[2] !== undefined
                                ? <th>{selectedGames[2]}</th>
                                : <th>Manche 3</th>
                            }
                            <th className="all_scores_sticky_column head"><b>Total</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {selectedTeams[0] !== undefined
                                ? <td className="th_style">{selectedTeams[0]}</td>
                                : <td className="th_style">Equipe 1</td>
                            }
                            <td id="score_team_one_round_one_loser_two">{selectedScoresTeamOne.scoreRoundOne}</td>
                            <td id="score_team_one_round_two_loser_two">{selectedScoresTeamOne.scoreRoundTwo}</td>
                            <td id="score_team_one_round_three_loser_two">{selectedScoresTeamOne.scoreRoundThree}</td>

                            <td className="all_scores_sticky_column body"><b id="total_score_team_one_loser_two">0</b></td>
                        </tr>
                        <tr>
                            {selectedTeams[1] !== undefined
                                ? <td className="th_style">{selectedTeams[1]}</td>
                                : <td className="th_style">Equipe 2</td>
                            }
                            <td id="score_team_two_round_one_loser_two">{selectedScoresTeamTwo.scoreRoundOne}</td>
                            <td id="score_team_two_round_two_loser_two">{selectedScoresTeamTwo.scoreRoundTwo}</td>
                            <td id="score_team_two_round_three_loser_two">{selectedScoresTeamTwo.scoreRoundThree}</td>
                            
                            <td className="all_scores_sticky_column body"><b id="total_score_team_two_loser_two">0</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )

    // Calculate total score
    function totalScoreCalculate() {
        const totalScoreTeamOne = document.getElementById('total_score_team_one_loser_two')
        const totalScoreTeamTwo = document.getElementById('total_score_team_two_loser_two')

        totalScoreTeamOne.innerHTML = parseInt(document.getElementById('score_team_one_round_one_loser_two').innerHTML) + parseInt(document.getElementById('score_team_one_round_two_loser_two').innerHTML) + parseInt(document.getElementById('score_team_one_round_three_loser_two').innerHTML)
        totalScoreTeamTwo.innerHTML = parseInt(document.getElementById('score_team_two_round_one_loser_two').innerHTML) + parseInt(document.getElementById('score_team_two_round_two_loser_two').innerHTML) + parseInt(document.getElementById('score_team_two_round_three_loser_two').innerHTML)
    }
}

export default LoserBracketTwo
