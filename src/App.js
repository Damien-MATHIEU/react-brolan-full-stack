import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home'
import Games from './pages/Games'
import Game from './pages/Game'
import Scores from './pages/Scores'
import Prizes from './pages/Prizes'
import ScrollToTop from './components/ScrollToTop'
import Contact from './pages/Contact'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import AdminOnly from './Admin/AdminOnly'
import OpeningBracketOne from './pages/OpeningBracketOne'
import OpeningBracketTwo from './pages/OpeningBracketTwo'
import FinalBracket from './pages/FinalBracket'
import SecondChanceBracketOne from './pages/SecondChanceBracketOne'
import SecondChanceBracketTwo from './pages/SecondChanceBracketTwo'
import LeagueOfLegends from './GamesPages/LeagueOfLegends'
import RocketLeague from './GamesPages/RocketLeague'
import CSGO from './GamesPages/CSGO'
import Valorant from './GamesPages/Valorant'
import HeroesOfTheStorm from './GamesPages/HeroesOfTheStorm'
import Haxball from './GamesPages/Haxball'
import Slapshot from './GamesPages/Slapshot'
import Chess from './GamesPages/Chess'
import Battlerite from './GamesPages/Battlerite'
import Slappyball from './GamesPages/Slappyball'
import LoserBracketOne from './pages/LoserBracketOne'
import WinnerBracketTwo from './pages/WinnerBracketTwo'
import LoserBracketTwo from './pages/LoserBracketTwo'
import WinnerBracketOne from './pages/WinnerBracketOne'
import SmallFinal from './pages/SmallFinal'
import SmallFinalTwo from './pages/SmallFinalTwo'

function App() {
    return (
        <>
            <Router>
                <ScrollToTop>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/games" exact component={Games} />
                        <Route path="/game" exact component={Game} />
                        <Route path="/scores" exact component={Scores} />
                        <Route path="/prizes" exact component={Prizes} />
                        <Route path="/contact" exact component={Contact} />

                        <Route path="/game/league-of-legends" exact component={LeagueOfLegends} />
                        <Route path="/game/rocket-league" exact component={RocketLeague} />
                        <Route path="/game/cs-go" exact component={CSGO} />
                        <Route path="/game/valorant" exact component={Valorant} />
                        <Route path="/game/heroes-of-the-storm" exact component={HeroesOfTheStorm} />
                        <Route path="/game/haxball" exact component={Haxball} />
                        <Route path="/game/slapshot" exact component={Slapshot} />
                        <Route path="/game/chess" exact component={Chess} />
                        <Route path="/game/battlerite" exact component={Battlerite} />
                        <Route path="/game/slappyball" exact component={Slappyball} />

                        <Route path="/login" exact component={Login} />

                        <AdminOnly>
                            <Route path="/admin/dashboard" exact component={AdminDashboard} />
                            
                            <Route path="/admin/bracket/opening-one" exact component={OpeningBracketOne} />
                            <Route path="/admin/bracket/opening-two" exact component={OpeningBracketTwo} />
                            
                            <Route path="/admin/bracket/second-chance/one" exact component={SecondChanceBracketOne} />
                            <Route path="/admin/bracket/second-chance/two" exact component={SecondChanceBracketTwo} />

                            <Route path="/admin/bracket/loser/one" exact component={LoserBracketOne} />
                            <Route path="/admin/bracket/loser/two" exact component={LoserBracketTwo} />

                            <Route path="/admin/bracket/winner/one" exact component={WinnerBracketOne} />
                            <Route path="/admin/bracket/winner/two" exact component={WinnerBracketTwo} />

                            <Route path="/admin/bracket/small-final" exact component={SmallFinal} />
                            <Route path="/admin/bracket/small-final/two" exact component={SmallFinalTwo} />
                            
                            <Route path="/admin/bracket/final" exact component={FinalBracket} />
                        </AdminOnly>
                    </Switch>
                </ScrollToTop>
            </Router>
        </>
    );
}

export default App;
