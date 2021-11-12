import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/Button.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OpeningBracketOneTable() {
    axios.defaults.withCredentials = true;

    const serverUrl = "https://brolan.damien-mathieu.fr"

    // Get
    const [teamsArray, setTeamsArray] = useState([])
    const [gamesArray, setGamesArray] = useState([])

    const [selectedGames, setSelectedGames] = useState([])
    const [selectedTeams, setSelectedTeams] = useState([])
    const [selectedScoresTeamOne, setSelectedScoresTeamOne] = useState([])
    const [selectedScoresTeamTwo, setSelectedScoresTeamTwo] = useState([])
    const [selectedScoresTeamThree, setSelectedScoresTeamThree] = useState([])
    const [selectedScoresTeamFour, setSelectedScoresTeamFour] = useState([])
    const [selectedScoresTeamFive, setSelectedScoresTeamFive] = useState([])
    const [selectedScoresTeamSix, setSelectedScoresTeamSix] = useState([])

    // Post
    const [gameNameRoundOne, setGameNameRoundOne] = useState()
    const [gameNameRoundTwo, setGameNameRoundTwo] = useState()
    const [gameNameRoundThree, setGameNameRoundThree] = useState()
    const [gameNameRoundFour, setGameNameRoundFour] = useState()
    const [gameNameRoundFive, setGameNameRoundFive] = useState()

    const [teamNameOne, setTeamNameOne] = useState()
    const [teamNameTwo, setTeamNameTwo] = useState()
    const [teamNameThree, setTeamNameThree] = useState()
    const [teamNameFour, setTeamNameFour] = useState()
    const [teamNameFive, setTeamNameFive] = useState()
    const [teamNameSix, setTeamNameSix] = useState()

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

    const [scoreTeamThreeRoundOne, setScoreTeamThreeRoundOne] = useState()
    const [scoreTeamThreeRoundTwo, setScoreTeamThreeRoundTwo] = useState()
    const [scoreTeamThreeRoundThree, setScoreTeamThreeRoundThree] = useState()
    const [scoreTeamThreeRoundFour, setScoreTeamThreeRoundFour] = useState()
    const [scoreTeamThreeRoundFive, setScoreTeamThreeRoundFive] = useState()

    const [scoreTeamFourRoundOne, setScoreTeamFourRoundOne] = useState()
    const [scoreTeamFourRoundTwo, setScoreTeamFourRoundTwo] = useState()
    const [scoreTeamFourRoundThree, setScoreTeamFourRoundThree] = useState()
    const [scoreTeamFourRoundFour, setScoreTeamFourRoundFour] = useState()
    const [scoreTeamFourRoundFive, setScoreTeamFourRoundFive] = useState()

    const [scoreTeamFiveRoundOne, setScoreTeamFiveRoundOne] = useState()
    const [scoreTeamFiveRoundTwo, setScoreTeamFiveRoundTwo] = useState()
    const [scoreTeamFiveRoundThree, setScoreTeamFiveRoundThree] = useState()
    const [scoreTeamFiveRoundFour, setScoreTeamFiveRoundFour] = useState()
    const [scoreTeamFiveRoundFive, setScoreTeamFiveRoundFive] = useState()

    const [scoreTeamSixRoundOne, setScoreTeamSixRoundOne] = useState()
    const [scoreTeamSixRoundTwo, setScoreTeamSixRoundTwo] = useState()
    const [scoreTeamSixRoundThree, setScoreTeamSixRoundThree] = useState()
    const [scoreTeamSixRoundFour, setScoreTeamSixRoundFour] = useState()
    const [scoreTeamSixRoundFive, setScoreTeamSixRoundFive] = useState()

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



    // Post
    function postOpeningBracketOneTable() {

        axios.post(serverUrl + '/admin/brackets/opening/post', {
            bracket: 'opening_bracket_one',
            bracketGame: 'opening_bracket_one_games',

            gameNameRoundOne: gameNameRoundOne,
            gameNameRoundTwo: gameNameRoundTwo,
            gameNameRoundThree: gameNameRoundThree,
            gameNameRoundFour: gameNameRoundFour,
            gameNameRoundFive: gameNameRoundFive,

            teamNameOne: teamNameOne,
            teamNameTwo: teamNameTwo,
            teamNameThree: teamNameThree,
            teamNameFour: teamNameFour,
            teamNameFive: teamNameFive,
            teamNameSix: teamNameSix,

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

            scoreTeamThreeRoundOne: scoreTeamThreeRoundOne,
            scoreTeamThreeRoundTwo: scoreTeamThreeRoundTwo,
            scoreTeamThreeRoundThree: scoreTeamThreeRoundThree,
            scoreTeamThreeRoundFour: scoreTeamThreeRoundFour,
            scoreTeamThreeRoundFive: scoreTeamThreeRoundFive,

            scoreTeamFourRoundOne: scoreTeamFourRoundOne,
            scoreTeamFourRoundTwo: scoreTeamFourRoundTwo,
            scoreTeamFourRoundThree: scoreTeamFourRoundThree,
            scoreTeamFourRoundFour: scoreTeamFourRoundFour,
            scoreTeamFourRoundFive: scoreTeamFourRoundFive,

            scoreTeamFiveRoundOne: scoreTeamFiveRoundOne,
            scoreTeamFiveRoundTwo: scoreTeamFiveRoundTwo,
            scoreTeamFiveRoundThree: scoreTeamFiveRoundThree,
            scoreTeamFiveRoundFour: scoreTeamFiveRoundFour,
            scoreTeamFiveRoundFive: scoreTeamFiveRoundFive,

            scoreTeamSixRoundOne: scoreTeamSixRoundOne,
            scoreTeamSixRoundTwo: scoreTeamSixRoundTwo,
            scoreTeamSixRoundThree: scoreTeamSixRoundThree,
            scoreTeamSixRoundFour: scoreTeamSixRoundFour,
            scoreTeamSixRoundFive: scoreTeamSixRoundFive

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

                console.log('Error in getOpeningBracketOneTable()');
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
            <h1 className="all_scores_title">Poule 1</h1>
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
                                }} id="score_team_one_round_one_bracket_one">
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
                                }} id="score_team_one_round_two_bracket_one">
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
                                }} id="score_team_one_round_three_bracket_one">
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
                                }} id="score_team_one_round_four_bracket_one">
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
                                }} id="score_team_one_round_five_bracket_one">
                                    {selectedScoresTeamOne.scoreRoundFive === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_one_bracket_one">0</b></td>
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
                                }} id="score_team_two_round_one_bracket_one">
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
                                }} id="score_team_two_round_two_bracket_one">
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
                                }} id="score_team_two_round_three_bracket_one">
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
                                }} id="score_team_two_round_four_bracket_one">
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
                                }} id="score_team_two_round_five_bracket_one">
                                    {selectedScoresTeamTwo.scoreRoundFive === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_two_bracket_one">0</b></td>
                        </tr>
                        <tr>
                            <td className="th_style">
                                <select onChange={(e) => {
                                    setTeamNameThree(e.target.value)
                                }}>
                                    <option >Equipes</option>
                                    {teamsArray.map((team) => {
                                        return (
                                            <>
                                                {selectedTeams.indexOf(team['Team name']) === 2
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
                                    setScoreTeamThreeRoundOne(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_three_round_one_bracket_one">
                                    {selectedScoresTeamThree.scoreRoundOne === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamThreeRoundTwo(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_three_round_two_bracket_one">
                                    {selectedScoresTeamThree.scoreRoundTwo === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamThreeRoundThree(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_three_round_three_bracket_one">
                                    {selectedScoresTeamThree.scoreRoundThree === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamThreeRoundFour(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_three_round_four_bracket_one">
                                    {selectedScoresTeamThree.scoreRoundFour === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamThreeRoundFive(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_three_round_five_bracket_one">
                                    {selectedScoresTeamThree.scoreRoundFive === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_three_bracket_one">0</b></td>
                        </tr>
                        <tr>
                            <td className="th_style">
                                <select onChange={(e) => {
                                    setTeamNameFour(e.target.value)
                                }}>
                                    <option >Equipes</option>
                                    {teamsArray.map((team) => {
                                        return (
                                            <>
                                                {selectedTeams.indexOf(team['Team name']) === 3
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
                                    setScoreTeamFourRoundOne(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_four_round_one_bracket_one">
                                    {selectedScoresTeamFour.scoreRoundOne === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamFourRoundTwo(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_four_round_two_bracket_one">
                                    {selectedScoresTeamFour.scoreRoundTwo === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamFourRoundThree(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_four_round_three_bracket_one">
                                    {selectedScoresTeamFour.scoreRoundThree === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamFourRoundFour(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_four_round_four_bracket_one">
                                    {selectedScoresTeamFour.scoreRoundFour === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamFourRoundFive(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_four_round_five_bracket_one">
                                    {selectedScoresTeamFour.scoreRoundFive === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_four_bracket_one">0</b></td>
                        </tr>
                        <tr>
                            <td className="th_style">
                                <select onChange={(e) => {
                                    setTeamNameFive(e.target.value)
                                }}>
                                    <option >Equipes</option>
                                    {teamsArray.map((team) => {
                                        return (
                                            <>
                                                {selectedTeams.indexOf(team['Team name']) === 4
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
                                    setScoreTeamFiveRoundOne(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_five_round_one_bracket_one">
                                    {selectedScoresTeamFive.scoreRoundOne === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamFiveRoundTwo(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_five_round_two_bracket_one">
                                    {selectedScoresTeamFive.scoreRoundTwo === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamFiveRoundThree(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_five_round_three_bracket_one">
                                    {selectedScoresTeamFive.scoreRoundThree === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamFiveRoundFour(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_five_round_four_bracket_one">
                                    {selectedScoresTeamFive.scoreRoundFour === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamFiveRoundFive(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_five_round_five_bracket_one">
                                    {selectedScoresTeamFive.scoreRoundFive === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_five_bracket_one">0</b></td>
                        </tr>
                        <tr>
                            <td className="th_style">
                                <select onChange={(e) => {
                                    setTeamNameSix(e.target.value)
                                }}>
                                    <option >Equipes</option>
                                    {teamsArray.map((team) => {
                                        return (
                                            <>
                                                {selectedTeams.indexOf(team['Team name']) === 5
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
                                    setScoreTeamSixRoundOne(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_six_round_one_bracket_one">
                                    {selectedScoresTeamSix.scoreRoundOne === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamSixRoundTwo(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_six_round_two_bracket_one">
                                    {selectedScoresTeamSix.scoreRoundTwo === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamSixRoundThree(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_six_round_three_bracket_one">
                                    {selectedScoresTeamSix.scoreRoundThree === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamSixRoundFour(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_six_round_four_bracket_one">
                                    {selectedScoresTeamSix.scoreRoundFour === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td>
                                <select onChange={(e) => {
                                    setScoreTeamSixRoundFive(e.target.value)
                                    totalScoreCalculate()
                                }} id="score_team_six_round_five_bracket_one">
                                    {selectedScoresTeamSix.scoreRoundFive === 1
                                        ? <> <option value="0">0</option>
                                            <option value="1" selected>1</option></>
                                        : <> <option value="0" selected>0</option>
                                            <option value="1">1</option></>
                                    }
                                </select>
                            </td>
                            <td className="all_scores_sticky_column body"><b id="total_score_team_six_bracket_one">0</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="all_scores_admin_save_button">
                <input type="button" value="Sauvegarder" className="btn btn--primary--dark btn--large" onClick={postOpeningBracketOneTable} />
            </div>
            <ToastContainer />
        </>
    )

    // Calculate total score
    function totalScoreCalculate() {
        const totalScoreTeamOne = document.getElementById('total_score_team_one_bracket_one')
        const totalScoreTeamTwo = document.getElementById('total_score_team_two_bracket_one')
        const totalScoreTeamThree = document.getElementById('total_score_team_three_bracket_one')
        const totalScoreTeamFour = document.getElementById('total_score_team_four_bracket_one')
        const totalScoreTeamFive = document.getElementById('total_score_team_five_bracket_one')
        const totalScoreTeamSix = document.getElementById('total_score_team_six_bracket_one')

        totalScoreTeamOne.innerHTML = parseInt(document.getElementById('score_team_one_round_one_bracket_one').value) + parseInt(document.getElementById('score_team_one_round_two_bracket_one').value) + parseInt(document.getElementById('score_team_one_round_three_bracket_one').value) + parseInt(document.getElementById('score_team_one_round_four_bracket_one').value) + parseInt(document.getElementById('score_team_one_round_five_bracket_one').value)
        totalScoreTeamTwo.innerHTML = parseInt(document.getElementById('score_team_two_round_one_bracket_one').value) + parseInt(document.getElementById('score_team_two_round_two_bracket_one').value) + parseInt(document.getElementById('score_team_two_round_three_bracket_one').value) + parseInt(document.getElementById('score_team_two_round_four_bracket_one').value) + parseInt(document.getElementById('score_team_two_round_five_bracket_one').value)
        totalScoreTeamThree.innerHTML = parseInt(document.getElementById('score_team_three_round_one_bracket_one').value) + parseInt(document.getElementById('score_team_three_round_two_bracket_one').value) + parseInt(document.getElementById('score_team_three_round_three_bracket_one').value) + parseInt(document.getElementById('score_team_three_round_four_bracket_one').value) + parseInt(document.getElementById('score_team_three_round_five_bracket_one').value)
        totalScoreTeamFour.innerHTML = parseInt(document.getElementById('score_team_four_round_one_bracket_one').value) + parseInt(document.getElementById('score_team_four_round_two_bracket_one').value) + parseInt(document.getElementById('score_team_four_round_three_bracket_one').value) + parseInt(document.getElementById('score_team_four_round_four_bracket_one').value) + parseInt(document.getElementById('score_team_four_round_five_bracket_one').value)
        totalScoreTeamFive.innerHTML = parseInt(document.getElementById('score_team_five_round_one_bracket_one').value) + parseInt(document.getElementById('score_team_five_round_two_bracket_one').value) + parseInt(document.getElementById('score_team_five_round_three_bracket_one').value) + parseInt(document.getElementById('score_team_five_round_four_bracket_one').value) + parseInt(document.getElementById('score_team_five_round_five_bracket_one').value)
        totalScoreTeamSix.innerHTML = parseInt(document.getElementById('score_team_six_round_one_bracket_one').value) + parseInt(document.getElementById('score_team_six_round_two_bracket_one').value) + parseInt(document.getElementById('score_team_six_round_three_bracket_one').value) + parseInt(document.getElementById('score_team_six_round_four_bracket_one').value) + parseInt(document.getElementById('score_team_six_round_five_bracket_one').value)
    }
}

export default OpeningBracketOneTable
