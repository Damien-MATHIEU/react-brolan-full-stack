import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SecondChanceBracketOne() {
    axios.defaults.withCredentials = true;

    const serverUrl = "https://brolan.damien-mathieu.fr"
    const [selectedGames, setSelectedGames] = useState([])
    const [selectedTeams, setSelectedTeams] = useState([])
    const [selectedScoresTeamOne, setSelectedScoresTeamOne] = useState([])
    const [selectedScoresTeamTwo, setSelectedScoresTeamTwo] = useState([])

    function getSelectedTeams() {
        axios.get(serverUrl + '/admin/brackets/second-chance/one/teams').then((response) => {
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
        axios.get(serverUrl + '/admin/brackets/second-chance/one/games').then((response) => {
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
        axios.get(serverUrl + '/admin/brackets/second-chance/one/scores').then((response) => {
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
            <h1 className="all_scores_title">Repêchage poule 1</h1>
            <div className="all_scores_container little_container">
                <table className="all_scores_table">
                    <thead>
                        <tr>
                            {/* Leave empty */}
                            <th></th>

                            {selectedGames[0] !== undefined
                                ? <th>{selectedGames[0]}</th>
                                : <th>Manche 1</th>
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
                            <td id="score_team_one_round_one_second_chance_one">{selectedScoresTeamOne.scoreRoundOne}</td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_one_second_chance_one">0</b></td>
                        </tr>
                        <tr>
                            {selectedTeams[1] !== undefined
                                ? <td className="th_style">{selectedTeams[1]}</td>
                                : <td className="th_style">Equipe 2</td>
                            }
                            <td id="score_team_two_round_one_second_chance_one">{selectedScoresTeamTwo.scoreRoundOne}</td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_two_second_chance_one">0</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )

    // Calculate total score
    function totalScoreCalculate() {
        const totalScoreTeamOne = document.getElementById('total_score_team_one_second_chance_one')
        const totalScoreTeamTwo = document.getElementById('total_score_team_two_second_chance_one')

        totalScoreTeamOne.innerHTML = parseInt(document.getElementById('score_team_one_round_one_second_chance_one').innerHTML)
        totalScoreTeamTwo.innerHTML = parseInt(document.getElementById('score_team_two_round_one_second_chance_one').innerHTML)
    }
}

export default SecondChanceBracketOne
