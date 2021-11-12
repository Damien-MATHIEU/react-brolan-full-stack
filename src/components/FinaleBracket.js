import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/AllScores.css'

function FinaleBracket() {
    axios.defaults.withCredentials = true;

    const serverUrl = "https://brolan.damien-mathieu.fr"
    const [selectedGames, setSelectedGames] = useState([])
    const [selectedTeams, setSelectedTeams] = useState([])
    const [selectedScoresTeamOne, setSelectedScoresTeamOne] = useState([])
    const [selectedScoresTeamTwo, setSelectedScoresTeamTwo] = useState([])

    function getSelectedTeams() {
        axios.get(serverUrl + '/admin/brackets/final/teams').then((response) => {
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
        axios.get(serverUrl + '/admin/brackets/final/games').then((response) => {
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
        axios.get(serverUrl + '/admin/brackets/final/scores').then((response) => {
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
            <h1 className="all_scores_title">Finale</h1>
            <div className="all_scores_container">
                <table className="all_scores_table">
                    <thead>
                        <tr>
                            {/* Leave empty */}
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

                            {selectedGames[3] !== undefined
                                ? <th>{selectedGames[3]}</th>
                                : <th>Manche 4</th>
                            }

                            {selectedGames[4] !== undefined
                                ? <th>{selectedGames[4]}</th>
                                : <th>Manche 5</th>
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

                            <td id="score_team_one_round_one_final">{selectedScoresTeamOne.scoreRoundOne}</td>
                            <td id="score_team_one_round_two_final">{selectedScoresTeamOne.scoreRoundTwo}</td>
                            <td id="score_team_one_round_three_final">{selectedScoresTeamOne.scoreRoundThree}</td>
                            <td id="score_team_one_round_four_final">{selectedScoresTeamOne.scoreRoundFour}</td>
                            <td id="score_team_one_round_five_final">{selectedScoresTeamOne.scoreRoundFive}</td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_one_final">0</b></td>
                        </tr>
                        <tr>
                            {selectedTeams[1] !== undefined
                                ? <td className="th_style">{selectedTeams[1]}</td>
                                : <td className="th_style">Equipe 2</td>
                            }
                            <td id="score_team_two_round_one_final">{selectedScoresTeamTwo.scoreRoundOne}</td>
                            <td id="score_team_two_round_two_final">{selectedScoresTeamTwo.scoreRoundTwo}</td>
                            <td id="score_team_two_round_three_final">{selectedScoresTeamTwo.scoreRoundThree}</td>
                            <td id="score_team_two_round_four_final">{selectedScoresTeamTwo.scoreRoundFour}</td>
                            <td id="score_team_two_round_five_final">{selectedScoresTeamTwo.scoreRoundFive}</td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_two_final">0</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )

    // Calculate total score
    function totalScoreCalculate() {
        const totalScoreTeamOne = document.getElementById('total_score_team_one_final')
        const totalScoreTeamTwo = document.getElementById('total_score_team_two_final')

        totalScoreTeamOne.innerHTML = parseInt(document.getElementById('score_team_one_round_one_final').innerHTML) + parseInt(document.getElementById('score_team_one_round_two_final').innerHTML) + parseInt(document.getElementById('score_team_one_round_three_final').innerHTML) + parseInt(document.getElementById('score_team_one_round_four_final').innerHTML) + parseInt(document.getElementById('score_team_one_round_five_final').innerHTML)
        totalScoreTeamTwo.innerHTML = parseInt(document.getElementById('score_team_two_round_one_final').innerHTML) + parseInt(document.getElementById('score_team_two_round_two_final').innerHTML) + parseInt(document.getElementById('score_team_two_round_three_final').innerHTML) + parseInt(document.getElementById('score_team_two_round_four_final').innerHTML) + parseInt(document.getElementById('score_team_two_round_five_final').innerHTML)
    }
}

export default FinaleBracket
