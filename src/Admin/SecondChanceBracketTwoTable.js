import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SecondChanceBracketTwoTable() {
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

    const [teamNameOne, setTeamNameOne] = useState()
    const [teamNameTwo, setTeamNameTwo] = useState()

    const [scoreTeamOneRoundOne, setScoreTeamOneRoundOne] = useState()

    const [scoreTeamTwoRoundOne, setScoreTeamTwoRoundOne] = useState()

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
        axios.get(serverUrl + '/admin/brackets/second-chance/two/teams').then((response) => {
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
        axios.get(serverUrl + '/admin/brackets/second-chance/two/games').then((response) => {
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
        axios.get(serverUrl + '/admin/brackets/second-chance/two/scores').then((response) => {
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
    function postSecondChanceTwoBracketTable() {

        axios.post(serverUrl + '/admin/brackets/second-chance/two/post', {
            bracket: 'second_chance_bracket_two',
            bracketGame: 'second_chance_bracket_two_games',

            gameNameRoundOne: gameNameRoundOne,

            teamNameOne: teamNameOne,
            teamNameTwo: teamNameTwo,

            scoreTeamOneRoundOne: scoreTeamOneRoundOne,

            scoreTeamTwoRoundOne: scoreTeamTwoRoundOne,

        }).then((response) => {
            if (!response) {
                toast.error("⛔ Une erreur est survenue lors de l'envoie des données", {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                console.log('Error in postSecondChanceTwoBracketTable()');
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
                // setTeamsArray(response.data.result)
                // console.log(response);
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
            <h1 className="all_scores_title">Repêchage 2</h1>
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
                            <td className="all_scores_sticky_column body"><b id="total_score_team_two">0</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="all_scores_admin_save_button">
                <input type="button" value="Sauvegarder" className="btn btn--primary--dark btn--large" onClick={postSecondChanceTwoBracketTable} />
            </div>
            <ToastContainer />
        </>
    )

    // Calculate total score
    function totalScoreCalculate() {
        const totalScoreTeamOne = document.getElementById('total_score_team_one')
        const totalScoreTeamTwo = document.getElementById('total_score_team_two')

        totalScoreTeamOne.innerHTML = parseInt(document.getElementById('score_team_one_round_one').value)
        totalScoreTeamTwo.innerHTML = parseInt(document.getElementById('score_team_two_round_one').value)
    }
}

export default SecondChanceBracketTwoTable
