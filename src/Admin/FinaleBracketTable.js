import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/Button.css'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function FinaleBracketTable() {
    axios.defaults.withCredentials = true;

    const serverUrl = "https://brolan.damien-mathieu.fr"
    // Get
    const [teamsArray, setTeamsArray] = useState([])
    const [gamesArray, setGamesArray] = useState([])

    const [selectedGames, setSelectedGames] = useState([])
    const [selectedTeams, setSelectedTeams] = useState([])
    const [selectedScoresTeamOne, setSelectedScoresTeamOne] = useState([])
    const [selectedScoresTeamTwo, setSelectedScoresTeamTwo] = useState([])

    // Post
    const [gameNameRoundOne, setGameNameRoundOne] = useState()
    const [gameNameRoundTwo, setGameNameRoundTwo] = useState()
    const [gameNameRoundThree, setGameNameRoundThree] = useState()
    const [gameNameRoundFour, setGameNameRoundFour] = useState()
    const [gameNameRoundFive, setGameNameRoundFive] = useState()

    const [teamNameOne, setTeamNameOne] = useState()
    const [teamNameTwo, setTeamNameTwo] = useState()

    const [scoreTeamOneRoundOne, setScoreTeamOneRoundOne] = useState()
    const [scoreTeamOneRoundTwo, setScoreTeamOneRoundTwo] = useState()
    const [scoreTeamOneRoundThree, setScoreTeamOneRoundThree] = useState()
    const [scoreTeamOneRoundFour, setScoreTeamOneRoundFour] = useState()
    const [scoreTeamOneRoundFive, setScoreTeamOneRoundFive] = useState()

    const [scoreTeamTwoRoundOne, setScoreTeamTwoRoundOne] = useState()
    const [scoreTeamTwoRoundTwo, setScoreTeamTwoRoundTwo] = useState()
    const [scoreTeamTwoRoundThree, setScoreTeamTwoRoundThree] = useState()
    const [scoreTeamTwoRoundFour, setScoreTeamTwoRoundFour] = useState()
    const [scoreTeamTwoRoundFive, setScoreTeamTwoRoundFive] = useState()

    // Populate table
    function getAllTeamNames() {
        axios.get(serverUrl + '/teams/get').then((response) => {
            if (!response) {
                console.log('Error in getAllTeamNames()');
                return
            } else {
                setTeamsArray(response.data.result)
                // console.log(teamsArray);
            }
        })
    }

    function getGameNames() {
        axios.get(serverUrl + '/games/get').then((response) => {
            if (!response) {
                console.log('Error in getGameNames()');
                return
            } else {
                setGamesArray(response.data.result)
            }
        })
    }

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

    // Post
    function postFinalBracketTable() {
        axios.post(serverUrl + '/admin/brackets/final/post', {
            bracket: 'final_bracket',
            bracketGame: 'final_bracket_games',

            gameNameRoundOne: gameNameRoundOne,
            gameNameRoundTwo: gameNameRoundTwo,
            gameNameRoundThree: gameNameRoundThree,
            gameNameRoundFour: gameNameRoundFour,
            gameNameRoundFive: gameNameRoundFive,

            teamNameOne: teamNameOne,
            teamNameTwo: teamNameTwo,

            scoreTeamOneRoundOne: scoreTeamOneRoundOne,
            scoreTeamOneRoundTwo: scoreTeamOneRoundTwo,
            scoreTeamOneRoundThree: scoreTeamOneRoundThree,
            scoreTeamOneRoundFour: scoreTeamOneRoundFour,
            scoreTeamOneRoundFive: scoreTeamOneRoundFive,

            scoreTeamTwoRoundOne: scoreTeamTwoRoundOne,
            scoreTeamTwoRoundTwo: scoreTeamTwoRoundTwo,
            scoreTeamTwoRoundThree: scoreTeamTwoRoundThree,
            scoreTeamTwoRoundFour: scoreTeamTwoRoundFour,
            scoreTeamTwoRoundFive: scoreTeamTwoRoundFive,

        }).then((response) => {
            if (!response) {
                console.log('Error in postOpeningBracketTwoTable()');
                toast.error("⛔ Une erreur est survenue lors de l'envoie des données", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return
            } else {
                toast.success('🎉 Changements enregistrés', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        })
    }

    
    useEffect(() => {
        getAllTeamNames()
        getGameNames()
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
                            <th></th>
                            <th>
                                <select onChange={(e) => {
                                    setGameNameRoundOne(e.target.value)
                                }}>
                                    <option>Manche 1</option>
                                    {gamesArray.map((game) => {
                                        return (
                                            <>
                                                {selectedGames.indexOf(game['Game name']) === 0
                                                    ? <option key={game.id} value={game['Game name']} selected>{game['Game name']}</option>
                                                    : <option key={game.id} value={game['Game name']}>{game['Game name']}</option>
                                                }
                                            </>
                                        )
                                    })}
                                </select>
                            </th>
                            <th>
                                <select onChange={(e) => {
                                    setGameNameRoundTwo(e.target.value)
                                }}>
                                    <option>Manche 2</option>
                                    {gamesArray.map((game) => {
                                        return (
                                            <>
                                                {selectedGames.indexOf(game['Game name']) === 1
                                                    ? <option key={game.id} value={game['Game name']} selected>{game['Game name']}</option>
                                                    : <option key={game.id} value={game['Game name']}>{game['Game name']}</option>
                                                }
                                            </>
                                        )
                                    })}
                                </select>
                            </th>
                            <th>
                                <select onChange={(e) => {
                                    setGameNameRoundThree(e.target.value)
                                }}>
                                    <option >Manche 3</option>
                                    {gamesArray.map((game) => {
                                        return (
                                            <>
                                                {selectedGames.indexOf(game['Game name']) === 2
                                                    ? <option key={game.id} value={game['Game name']} selected>{game['Game name']}</option>
                                                    : <option key={game.id} value={game['Game name']}>{game['Game name']}</option>
                                                }
                                            </>
                                        )
                                    })}
                                </select>
                            </th>
                            <th>
                                <select onChange={(e) => {
                                    setGameNameRoundFour(e.target.value)
                                }}>
                                    <option>Manche 4</option>
                                    {gamesArray.map((game) => {
                                        return (
                                            <>
                                                {selectedGames.indexOf(game['Game name']) === 3
                                                    ? <option key={game.id} value={game['Game name']} selected>{game['Game name']}</option>
                                                    : <option key={game.id} value={game['Game name']}>{game['Game name']}</option>
                                                }
                                            </>
                                        )
                                    })}
                                </select>
                            </th>
                            <th>
                                <select onChange={(e) => {
                                    setGameNameRoundFive(e.target.value)
                                }}>
                                    <option >Manche 5</option>
                                    {gamesArray.map((game) => {
                                        return (
                                            <>
                                                {selectedGames.indexOf(game['Game name']) === 4
                                                    ? <option key={game.id} value={game['Game name']} selected>{game['Game name']}</option>
                                                    : <option key={game.id} value={game['Game name']}>{game['Game name']}</option>
                                                }
                                            </>
                                        )
                                    })}
                                </select>
                            </th>
                            <th className="all_scores_sticky_column head"><b>Total</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="th_style">
                                <select onChange={(e) => {
                                    setTeamNameOne(e.target.value)
                                }}>
                                    <option>Equipes</option>
                                    {teamsArray.map((team) => {
                                        return (
                                            <>
                                                {selectedTeams.indexOf(team['Team name']) === 0
                                                    ? <option key={team.id} value={team['Team name']} selected>{team['Team name']}</option>
                                                    : <option key={team.id} value={team['Team name']}>{team['Team name']}</option>
                                                }
                                            </>
                                        )
                                    })}
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamOneRoundOne(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_one_round_one">
                                    {selectedScoresTeamOne.scoreRoundOne === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamOneRoundTwo(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_one_round_two">
                                    {selectedScoresTeamOne.scoreRoundTwo === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamOneRoundThree(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_one_round_three">
                                    {selectedScoresTeamOne.scoreRoundThree === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamOneRoundFour(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_one_round_four">
                                    {selectedScoresTeamOne.scoreRoundFour === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamOneRoundFive(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_one_round_five">
                                    {selectedScoresTeamOne.scoreRoundFive === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_one">0</b></td>
                        </tr>
                        <tr>
                            <td className="th_style">
                                <select onChange={(e) => {
                                    setTeamNameTwo(e.target.value)
                                }}>
                                    <option >Equipes</option>
                                    {teamsArray.map((team) => {
                                        return (
                                            <>
                                                {selectedTeams.indexOf(team['Team name']) === 1
                                                    ? <option key={team.id} value={team['Team name']} selected>{team['Team name']}</option>
                                                    : <option key={team.id} value={team['Team name']}>{team['Team name']}</option>
                                                }
                                            </>
                                        )
                                    })}
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamTwoRoundOne(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_two_round_one">
                                    {selectedScoresTeamTwo.scoreRoundOne === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamTwoRoundTwo(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_two_round_two">
                                    {selectedScoresTeamTwo.scoreRoundTwo === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamTwoRoundThree(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_two_round_three">
                                    {selectedScoresTeamTwo.scoreRoundThree === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamTwoRoundFour(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_two_round_four">
                                    {selectedScoresTeamTwo.scoreRoundFour === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamTwoRoundFive(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_two_round_five">
                                    {selectedScoresTeamTwo.scoreRoundFive === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_two">0</b></td>
                        </tr>

                    </tbody>
                </table>
            </div>
            <div className="all_scores_admin_save_button">
                <input type="button" value="Sauvegarder" className="btn btn--primary--dark btn--large" onClick={postFinalBracketTable} />
            </div>
            <ToastContainer />
        </>
    )

    // Calculate total score
    function totalScoreCalculate() {
        const totalScoreTeamOne = document.getElementById('total_score_team_one')
        const totalScoreTeamTwo = document.getElementById('total_score_team_two')

        totalScoreTeamOne.innerHTML = parseInt(document.getElementById('score_team_one_round_one').value) + parseInt(document.getElementById('score_team_one_round_two').value) + parseInt(document.getElementById('score_team_one_round_three').value) + parseInt(document.getElementById('score_team_one_round_four').value) + parseInt(document.getElementById('score_team_one_round_five').value)
        totalScoreTeamTwo.innerHTML = parseInt(document.getElementById('score_team_two_round_one').value) + parseInt(document.getElementById('score_team_two_round_two').value) + parseInt(document.getElementById('score_team_two_round_three').value) + parseInt(document.getElementById('score_team_two_round_four').value) + parseInt(document.getElementById('score_team_two_round_five').value)
    }

}

export default FinaleBracketTable
