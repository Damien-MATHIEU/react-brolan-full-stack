import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../styles/AllScores.css'

function OpeningBracketOne() {

    axios.defaults.withCredentials = true;

    const serverUrl = "https://brolan.damien-mathieu.fr"
    const [selectedGames, setSelectedGames] = useState([])
    const [selectedTeams, setSelectedTeams] = useState([])
    const [selectedScoresTeamOne, setSelectedScoresTeamOne] = useState([])
    const [selectedScoresTeamTwo, setSelectedScoresTeamTwo] = useState([])
    const [selectedScoresTeamThree, setSelectedScoresTeamThree] = useState([])
    const [selectedScoresTeamFour, setSelectedScoresTeamFour] = useState([])
    const [selectedScoresTeamFive, setSelectedScoresTeamFive] = useState([])
    const [selectedScoresTeamSix, setSelectedScoresTeamSix] = useState([])

    function getSelectedTeams() {
        axios.get(serverUrl + '/admin/brackets/opening-one/teams').then((response) => {
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
        axios.get(serverUrl + '/admin/brackets/opening-one/games').then((response) => {
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
        axios.get(serverUrl + '/admin/brackets/opening-one/scores').then((response) => {
            if (!response) {
                console.log('Error in getSelectedScores()');
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

                        case 3:
                            setSelectedScoresTeamThree(element)
                            break

                        case 4:
                            setSelectedScoresTeamFour(element)
                            break

                        case 5:
                            setSelectedScoresTeamFive(element)
                            break

                        case 6:
                            setSelectedScoresTeamSix(element)
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
            <h1 className="all_scores_title">Poule 1</h1>
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

                            <td id="score_team_one_round_one">{selectedScoresTeamOne.scoreRoundOne}</td>
                            <td id="score_team_one_round_two">{selectedScoresTeamOne.scoreRoundTwo}</td>
                            <td id="score_team_one_round_three">{selectedScoresTeamOne.scoreRoundThree}</td>
                            <td id="score_team_one_round_four">{selectedScoresTeamOne.scoreRoundFour}</td>
                            <td id="score_team_one_round_five">{selectedScoresTeamOne.scoreRoundFive}</td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_one">0</b></td>
                        </tr>
                        <tr>
                            {selectedTeams[1] !== undefined
                                ? <td className="th_style">{selectedTeams[1]}</td>
                                : <td className="th_style">Equipe 2</td>
                            }
                            <td id="score_team_two_round_one">{selectedScoresTeamTwo.scoreRoundOne}</td>
                            <td id="score_team_two_round_two">{selectedScoresTeamTwo.scoreRoundTwo}</td>
                            <td id="score_team_two_round_three">{selectedScoresTeamTwo.scoreRoundThree}</td>
                            <td id="score_team_two_round_four">{selectedScoresTeamTwo.scoreRoundFour}</td>
                            <td id="score_team_two_round_five">{selectedScoresTeamTwo.scoreRoundFive}</td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_two">0</b></td>
                        </tr>
                        <tr>
                            {selectedTeams[2] !== undefined
                                ? <td className="th_style">{selectedTeams[2]}</td>
                                : <td className="th_style">Equipe 3</td>
                            }
                            <td id="score_team_three_round_one">{selectedScoresTeamThree.scoreRoundOne}</td>
                            <td id="score_team_three_round_two">{selectedScoresTeamThree.scoreRoundTwo}</td>
                            <td id="score_team_three_round_three">{selectedScoresTeamThree.scoreRoundThree}</td>
                            <td id="score_team_three_round_four">{selectedScoresTeamThree.scoreRoundFour}</td>
                            <td id="score_team_three_round_five">{selectedScoresTeamThree.scoreRoundFive}</td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_three">0</b></td>
                        </tr>
                        <tr>
                            {selectedTeams[3] !== undefined
                                ? <td className="th_style">{selectedTeams[3]}</td>
                                : <td className="th_style">Equipe 4</td>
                            }
                            <td id="score_team_four_round_one">{selectedScoresTeamFour.scoreRoundOne}</td>
                            <td id="score_team_four_round_two">{selectedScoresTeamFour.scoreRoundTwo}</td>
                            <td id="score_team_four_round_three">{selectedScoresTeamFour.scoreRoundThree}</td>
                            <td id="score_team_four_round_four">{selectedScoresTeamFour.scoreRoundFour}</td>
                            <td id="score_team_four_round_five">{selectedScoresTeamFour.scoreRoundFive}</td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_four">0</b></td>
                        </tr>
                        <tr>
                            {selectedTeams[4] !== undefined
                                ? <td className="th_style">{selectedTeams[4]}</td>
                                : <td className="th_style">Equipe 5</td>
                            }
                            <td id="score_team_five_round_one">{selectedScoresTeamFive.scoreRoundOne}</td>
                            <td id="score_team_five_round_two">{selectedScoresTeamFive.scoreRoundTwo}</td>
                            <td id="score_team_five_round_three">{selectedScoresTeamFive.scoreRoundThree}</td>
                            <td id="score_team_five_round_four">{selectedScoresTeamFive.scoreRoundFour}</td>
                            <td id="score_team_five_round_five">{selectedScoresTeamFive.scoreRoundFive}</td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_five">0</b></td>
                        </tr>
                        <tr>
                            {selectedTeams[5] !== undefined
                                ? <td className="th_style">{selectedTeams[5]}</td>
                                : <td className="th_style">Equipe 6</td>
                            }
                            <td id="score_team_six_round_one">{selectedScoresTeamSix.scoreRoundOne}</td>
                            <td id="score_team_six_round_two">{selectedScoresTeamSix.scoreRoundTwo}</td>
                            <td id="score_team_six_round_three">{selectedScoresTeamSix.scoreRoundThree}</td>
                            <td id="score_team_six_round_four">{selectedScoresTeamSix.scoreRoundFour}</td>
                            <td id="score_team_six_round_five">{selectedScoresTeamSix.scoreRoundFive}</td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_six">0</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )

    // Calculate total score
    function totalScoreCalculate() {
        const totalScoreTeamOne = document.getElementById('total_score_team_one')
        const totalScoreTeamTwo = document.getElementById('total_score_team_two')
        const totalScoreTeamThree = document.getElementById('total_score_team_three')
        const totalScoreTeamFour = document.getElementById('total_score_team_four')
        const totalScoreTeamFive = document.getElementById('total_score_team_five')
        const totalScoreTeamSix = document.getElementById('total_score_team_six')

        totalScoreTeamOne.innerHTML = parseInt(document.getElementById('score_team_one_round_one').innerHTML) + parseInt(document.getElementById('score_team_one_round_two').innerHTML) + parseInt(document.getElementById('score_team_one_round_three').innerHTML) + parseInt(document.getElementById('score_team_one_round_four').innerHTML) + parseInt(document.getElementById('score_team_one_round_five').innerHTML)
        totalScoreTeamTwo.innerHTML = parseInt(document.getElementById('score_team_two_round_one').innerHTML) + parseInt(document.getElementById('score_team_two_round_two').innerHTML) + parseInt(document.getElementById('score_team_two_round_three').innerHTML) + parseInt(document.getElementById('score_team_two_round_four').innerHTML) + parseInt(document.getElementById('score_team_two_round_five').innerHTML)
        totalScoreTeamThree.innerHTML = parseInt(document.getElementById('score_team_three_round_one').innerHTML) + parseInt(document.getElementById('score_team_three_round_two').innerHTML) + parseInt(document.getElementById('score_team_three_round_three').innerHTML) + parseInt(document.getElementById('score_team_three_round_four').innerHTML) + parseInt(document.getElementById('score_team_three_round_five').innerHTML)
        totalScoreTeamFour.innerHTML = parseInt(document.getElementById('score_team_four_round_one').innerHTML) + parseInt(document.getElementById('score_team_four_round_two').innerHTML) + parseInt(document.getElementById('score_team_four_round_three').innerHTML) + parseInt(document.getElementById('score_team_four_round_four').innerHTML) + parseInt(document.getElementById('score_team_four_round_five').innerHTML)
        totalScoreTeamFive.innerHTML = parseInt(document.getElementById('score_team_five_round_one').innerHTML) + parseInt(document.getElementById('score_team_five_round_two').innerHTML) + parseInt(document.getElementById('score_team_five_round_three').innerHTML) + parseInt(document.getElementById('score_team_five_round_four').innerHTML) + parseInt(document.getElementById('score_team_five_round_five').innerHTML)
        totalScoreTeamSix.innerHTML = parseInt(document.getElementById('score_team_six_round_one').innerHTML) + parseInt(document.getElementById('score_team_six_round_two').innerHTML) + parseInt(document.getElementById('score_team_six_round_three').innerHTML) + parseInt(document.getElementById('score_team_six_round_four').innerHTML) + parseInt(document.getElementById('score_team_six_round_five').innerHTML)
    }
}

export default OpeningBracketOne
