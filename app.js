const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
var path = require('path');

const bcrypt = require("bcrypt");
const saltRounds = 10;
// require('dotenv').config({ path: './.env' })

const app = express();
const jwt = require('jsonwebtoken')

app.use(express.json());
app.use(
    cors({
        origin: ['https://brolan.damien-mathieu.fr'],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, './public')));

app.use(
    session({
        key: "exemple",
        secret: "YourSecretHere",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

const db = mysql.createConnection({
    user: 'admin',
    host: 'localhost',
    password: '',
    database: 'brolan',
});



// app.post("/register", (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     bcrypt.hash(password, saltRounds, (err, hash) => {
//         if (err) {
//             console.log(err);
//         }

//         db.query(
//             "INSERT INTO users (username, password) VALUES (?,?)",
//             [username, hash],
//             (err, result) => {
//                 console.log(err);
//             }
//         );
//     });
// });

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username=?;", username,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {
                        req.session.user = result;

                        const id = result[0].id
                        const token = jwt.sign({ id }, "JwtSecret", {
                            expiresIn: 43200,
                        })
                        req.session.user = result

                        res.json({ auth: true, token: token, result: result })

                    } else {
                        res.send({ auth: false, message: "Pseudo et/ou mot de passe incorrect(s)" });
                    }
                });
            } else {
                res.send({ auth: false, message: "Pseudo et/ou mot de passe incorrect(s)" });
            }
        }
    );
});

app.post('/check', (req, res) => {
    // const token = req.headers['token']
    const token = req.body.token

    if (!token) {
        res.json({ auth: false, message: 'Auth failed nul', token: token })
    } else {
        jwt.verify(token, "JwtSecret", (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: 'Auth failed', err: err })
            } else {
                req.userId = decoded.id
                res.json({ auth: true, message: 'Auth succeded!' })
            }
        })
    }
})

// General
app.get("/teams/get", (req, res) => {
    db.query('SELECT * FROM teams;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
    })
});

app.get("/games/get", (req, res) => {
    db.query('SELECT * FROM games;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
            // console.log(result);
        }
    })
});

function dbUpdateTeamName(teamName, id, bracketTeamName) {
    db.query("UPDATE " + bracketTeamName + " SET team=? WHERE id=?;",
        [teamName, id],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })
}

function dbUpdateScoreRoundOne(scoreRoundOne, id, bracket) {
    db.query("UPDATE " + bracket + " SET scoreRoundOne=? WHERE id=?;",
        [parseInt(scoreRoundOne), id],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })
}

function dbUpdateScoreRoundTwo(scoreRoundTwo, id, bracket) {
    db.query("UPDATE " + bracket + " SET scoreRoundTwo=? WHERE id=?;",
        [parseInt(scoreRoundTwo), id],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })
}

function dbUpdateScoreRoundThree(scoreRoundThree, id, bracket) {
    db.query("UPDATE " + bracket + " SET scoreRoundThree=? WHERE id=?;",
        [parseInt(scoreRoundThree), id],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })
}

function dbUpdateScoreRoundFour(scoreRoundFour, id, bracket) {
    db.query("UPDATE " + bracket + " SET scoreRoundFour=? WHERE id=?;",
        [parseInt(scoreRoundFour), id],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })
}

function dbUpdateScoreRoundFive(scoreRoundFive, id, bracket) {
    db.query("UPDATE " + bracket + " SET scoreRoundFive=? WHERE id=?;",
        [parseInt(scoreRoundFive), id],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })
}

function dbUpdateGameName(gameName, id, bracketGame) {
    db.query("UPDATE " + bracketGame + " SET game=? WHERE id=?;",
        [gameName, id],
        (err, result) => {
            if (err) {
                console.log(err)
            }
        })
}

// Opening bracket one
app.get('/admin/brackets/opening-one/games', (req, res) => {
    db.query('SELECT game FROM opening_bracket_one_games;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/opening-one/teams', (req, res) => {
    db.query('SELECT team FROM opening_bracket_one;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/opening-one/scores', (req, res) => {
    db.query('SELECT id, scoreRoundOne, scoreRoundTwo, scoreRoundThree, scoreRoundFour, scoreRoundFive FROM opening_bracket_one;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
            // console.log(result); 
        }
    })
})

// Opening 1 & 2
app.post("/admin/brackets/opening/post", (req, res) => {
    const bracket = req.body.bracket
    const bracketGame = req.body.bracketGame

    const gameNameRoundOne = req.body.gameNameRoundOne
    const gameNameRoundTwo = req.body.gameNameRoundTwo
    const gameNameRoundThree = req.body.gameNameRoundThree
    const gameNameRoundFour = req.body.gameNameRoundFour
    const gameNameRoundFive = req.body.gameNameRoundFive

    const teamNameOne = req.body.teamNameOne
    const teamNameTwo = req.body.teamNameTwo
    const teamNameThree = req.body.teamNameThree
    const teamNameFour = req.body.teamNameFour
    const teamNameFive = req.body.teamNameFive
    const teamNameSix = req.body.teamNameSix

    const scoreTeamOneRoundOne = req.body.scoreTeamOneRoundOne
    const scoreTeamOneRoundTwo = req.body.scoreTeamOneRoundTwo
    const scoreTeamOneRoundThree = req.body.scoreTeamOneRoundThree
    const scoreTeamOneRoundFour = req.body.scoreTeamOneRoundFour
    const scoreTeamOneRoundFive = req.body.scoreTeamOneRoundFive

    const scoreTeamTwoRoundOne = req.body.scoreTeamTwoRoundOne
    const scoreTeamTwoRoundTwo = req.body.scoreTeamTwoRoundTwo
    const scoreTeamTwoRoundThree = req.body.scoreTeamTwoRoundThree
    const scoreTeamTwoRoundFour = req.body.scoreTeamTwoRoundFour
    const scoreTeamTwoRoundFive = req.body.scoreTeamTwoRoundFive

    const scoreTeamThreeRoundOne = req.body.scoreTeamThreeRoundOne
    const scoreTeamThreeRoundTwo = req.body.scoreTeamThreeRoundTwo
    const scoreTeamThreeRoundThree = req.body.scoreTeamThreeRoundThree
    const scoreTeamThreeRoundFour = req.body.scoreTeamThreeRoundFour
    const scoreTeamThreeRoundFive = req.body.scoreTeamThreeRoundFive

    const scoreTeamFourRoundOne = req.body.scoreTeamFourRoundOne
    const scoreTeamFourRoundTwo = req.body.scoreTeamFourRoundTwo
    const scoreTeamFourRoundThree = req.body.scoreTeamFourRoundThree
    const scoreTeamFourRoundFour = req.body.scoreTeamFourRoundFour
    const scoreTeamFourRoundFive = req.body.scoreTeamFourRoundFive

    const scoreTeamFiveRoundOne = req.body.scoreTeamFiveRoundOne
    const scoreTeamFiveRoundTwo = req.body.scoreTeamFiveRoundTwo
    const scoreTeamFiveRoundThree = req.body.scoreTeamFiveRoundThree
    const scoreTeamFiveRoundFour = req.body.scoreTeamFiveRoundFour
    const scoreTeamFiveRoundFive = req.body.scoreTeamFiveRoundFive

    const scoreTeamSixRoundOne = req.body.scoreTeamSixRoundOne
    const scoreTeamSixRoundTwo = req.body.scoreTeamSixRoundTwo
    const scoreTeamSixRoundThree = req.body.scoreTeamSixRoundThree
    const scoreTeamSixRoundFour = req.body.scoreTeamSixRoundFour
    const scoreTeamSixRoundFive = req.body.scoreTeamSixRoundFive

    // Game name
    if (gameNameRoundOne !== undefined) {
        dbUpdateGameName(gameNameRoundOne, 1, bracketGame)
    }
    if (gameNameRoundTwo !== undefined) {
        dbUpdateGameName(gameNameRoundTwo, 2, bracketGame)
    }
    if (gameNameRoundThree !== undefined) {
        dbUpdateGameName(gameNameRoundThree, 3, bracketGame)
    }
    if (gameNameRoundFour !== undefined) {
        dbUpdateGameName(gameNameRoundFour, 4, bracketGame)
    }
    if (gameNameRoundFive !== undefined) {
        dbUpdateGameName(gameNameRoundFive, 5, bracketGame)
    }

    // Team Name
    if (teamNameOne !== undefined) {
        dbUpdateTeamName(teamNameOne, 1, bracket)
    }
    if (teamNameTwo !== undefined) {
        dbUpdateTeamName(teamNameTwo, 2, bracket)
    }
    if (teamNameThree !== undefined) {
        dbUpdateTeamName(teamNameThree, 3, bracket)
    }
    if (teamNameFour !== undefined) {
        dbUpdateTeamName(teamNameFour, 4, bracket)
    }
    if (teamNameFive !== undefined) {
        dbUpdateTeamName(teamNameFive, 5, bracket)
    }
    if (teamNameSix !== undefined) {
        dbUpdateTeamName(teamNameSix, 6, bracket)
    }

    // Score round 1
    if (scoreTeamOneRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamOneRoundOne, 1, bracket)
    }
    if (scoreTeamTwoRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamTwoRoundOne, 2, bracket)
    }
    if (scoreTeamThreeRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamThreeRoundOne, 3, bracket)
    }
    if (scoreTeamFourRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamFourRoundOne, 4, bracket)
    }
    if (scoreTeamFiveRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamFiveRoundOne, 5, bracket)
    }
    if (scoreTeamSixRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamSixRoundOne, 6, bracket)
    }

    // Score round 2
    if (scoreTeamOneRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamOneRoundTwo, 1, bracket)
    }
    if (scoreTeamTwoRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamTwoRoundTwo, 2, bracket)
    }
    if (scoreTeamThreeRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamThreeRoundTwo, 3, bracket)
    }
    if (scoreTeamFourRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamFourRoundTwo, 4, bracket)
    }
    if (scoreTeamFiveRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamFiveRoundTwo, 5, bracket)
    }
    if (scoreTeamSixRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamSixRoundTwo, 6, bracket)
    }

    // Score round 3
    if (scoreTeamOneRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamOneRoundThree, 1, bracket)
    }
    if (scoreTeamTwoRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamTwoRoundThree, 2, bracket)
    }
    if (scoreTeamThreeRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamThreeRoundThree, 3, bracket)
    }
    if (scoreTeamFourRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamFourRoundThree, 4, bracket)
    }
    if (scoreTeamFiveRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamFiveRoundThree, 5, bracket)
    }
    if (scoreTeamSixRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamSixRoundThree, 6, bracket)
    }

    // Score round 4
    if (scoreTeamOneRoundFour !== undefined) {
        dbUpdateScoreRoundFour(scoreTeamOneRoundFour, 1, bracket)
    }
    if (scoreTeamTwoRoundFour !== undefined) {
        dbUpdateScoreRoundFour(scoreTeamTwoRoundFour, 2, bracket)
    }
    if (scoreTeamThreeRoundFour !== undefined) {
        dbUpdateScoreRoundFour(scoreTeamThreeRoundFour, 3, bracket)
    }
    if (scoreTeamFourRoundFour !== undefined) {
        dbUpdateScoreRoundFour(scoreTeamFourRoundFour, 4, bracket)
    }
    if (scoreTeamFiveRoundFour !== undefined) {
        dbUpdateScoreRoundFour(scoreTeamFiveRoundFour, 5, bracket)
    }
    if (scoreTeamSixRoundFour !== undefined) {
        dbUpdateScoreRoundFour(scoreTeamSixRoundFour, 6, bracket)
    }

    // Scores round 5
    if (scoreTeamOneRoundFive !== undefined) {
        dbUpdateScoreRoundFive(scoreTeamOneRoundFive, 1, bracket)
    }
    if (scoreTeamTwoRoundFive !== undefined) {
        dbUpdateScoreRoundFive(scoreTeamTwoRoundFive, 2, bracket)
    }
    if (scoreTeamThreeRoundFive !== undefined) {
        dbUpdateScoreRoundFive(scoreTeamThreeRoundFive, 3, bracket)
    }
    if (scoreTeamFourRoundFive !== undefined) {
        dbUpdateScoreRoundFive(scoreTeamFourRoundFive, 4, bracket)
    }
    if (scoreTeamFiveRoundFive !== undefined) {
        dbUpdateScoreRoundFive(scoreTeamFiveRoundFive, 5, bracket)
    }
    if (scoreTeamSixRoundFive !== undefined) {
        dbUpdateScoreRoundFive(scoreTeamSixRoundFive, 6, bracket)
    }

    res.send('Post done!')
});

// Opening bracket two
app.get('/admin/brackets/opening-two/teams', (req, res) => {
    db.query('SELECT team FROM opening_bracket_two;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/opening-two/games', (req, res) => {
    db.query('SELECT game FROM opening_bracket_two_games;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/opening-two/scores', (req, res) => {
    db.query('SELECT id, scoreRoundOne, scoreRoundTwo, scoreRoundThree, scoreRoundFour, scoreRoundFive FROM opening_bracket_two;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

// Winner bracket 1
app.get('/admin/brackets/winner/one/teams', (req, res) => {
    db.query('SELECT team FROM winner_bracket_one;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/winner/one/games', (req, res) => {
    db.query('SELECT game FROM winner_bracket_one_games;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/winner/one/scores', (req, res) => {
    db.query('SELECT id, scoreRoundOne, scoreRoundTwo, scoreRoundThree FROM winner_bracket_one;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.post("/admin/brackets/winner/one/post", (req, res) => {
    const bracket = req.body.bracket
    const bracketGame = req.body.bracketGame

    const gameNameRoundOne = req.body.gameNameRoundOne
    const gameNameRoundTwo = req.body.gameNameRoundTwo
    const gameNameRoundThree = req.body.gameNameRoundThree

    const teamNameOne = req.body.teamNameOne
    const teamNameTwo = req.body.teamNameTwo

    const scoreTeamOneRoundOne = req.body.scoreTeamOneRoundOne
    const scoreTeamOneRoundTwo = req.body.scoreTeamOneRoundTwo
    const scoreTeamOneRoundThree = req.body.scoreTeamOneRoundThree

    const scoreTeamTwoRoundOne = req.body.scoreTeamTwoRoundOne
    const scoreTeamTwoRoundTwo = req.body.scoreTeamTwoRoundTwo
    const scoreTeamTwoRoundThree = req.body.scoreTeamTwoRoundThree

    // Game name
    if (gameNameRoundOne !== undefined) {
        dbUpdateGameName(gameNameRoundOne, 1, bracketGame)
    }
    if (gameNameRoundTwo !== undefined) {
        dbUpdateGameName(gameNameRoundTwo, 2, bracketGame)
    }
    if (gameNameRoundThree !== undefined) {
        dbUpdateGameName(gameNameRoundThree, 3, bracketGame)
    }

    // Team Name
    if (teamNameOne !== undefined) {
        dbUpdateTeamName(teamNameOne, 1, bracket)
    }
    if (teamNameTwo !== undefined) {
        dbUpdateTeamName(teamNameTwo, 2, bracket)
    }

    // Score round 1
    if (scoreTeamOneRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamOneRoundOne, 1, bracket)
    }
    if (scoreTeamTwoRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamTwoRoundOne, 2, bracket)
    }

    // Score round 2
    if (scoreTeamOneRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamOneRoundTwo, 1, bracket)
    }
    if (scoreTeamTwoRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamTwoRoundTwo, 2, bracket)
    }

    // Score round 3
    if (scoreTeamOneRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamOneRoundThree, 1, bracket)
    }
    if (scoreTeamTwoRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamTwoRoundThree, 2, bracket)
    }

    res.send('Post done!')
});

// Winner bracket 2
app.get('/admin/brackets/winner/two/teams', (req, res) => {
    db.query('SELECT team FROM winner_bracket_two;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/winner/two/games', (req, res) => {
    db.query('SELECT game FROM winner_bracket_two_games;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/winner/two/scores', (req, res) => {
    db.query('SELECT id, scoreRoundOne, scoreRoundTwo, scoreRoundThree FROM winner_bracket_two;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.post("/admin/brackets/winner/two/post", (req, res) => {
    const bracket = req.body.bracket
    const bracketGame = req.body.bracketGame

    const gameNameRoundOne = req.body.gameNameRoundOne
    const gameNameRoundTwo = req.body.gameNameRoundTwo
    const gameNameRoundThree = req.body.gameNameRoundThree

    const teamNameOne = req.body.teamNameOne
    const teamNameTwo = req.body.teamNameTwo

    const scoreTeamOneRoundOne = req.body.scoreTeamOneRoundOne
    const scoreTeamOneRoundTwo = req.body.scoreTeamOneRoundTwo
    const scoreTeamOneRoundThree = req.body.scoreTeamOneRoundThree

    const scoreTeamTwoRoundOne = req.body.scoreTeamTwoRoundOne
    const scoreTeamTwoRoundTwo = req.body.scoreTeamTwoRoundTwo
    const scoreTeamTwoRoundThree = req.body.scoreTeamTwoRoundThree

    // Game name
    if (gameNameRoundOne !== undefined) {
        dbUpdateGameName(gameNameRoundOne, 1, bracketGame)
    }
    if (gameNameRoundTwo !== undefined) {
        dbUpdateGameName(gameNameRoundTwo, 2, bracketGame)
    }
    if (gameNameRoundThree !== undefined) {
        dbUpdateGameName(gameNameRoundThree, 3, bracketGame)
    }

    // Team Name
    if (teamNameOne !== undefined) {
        dbUpdateTeamName(teamNameOne, 1, bracket)
    }
    if (teamNameTwo !== undefined) {
        dbUpdateTeamName(teamNameTwo, 2, bracket)
    }

    // Score round 1
    if (scoreTeamOneRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamOneRoundOne, 1, bracket)
    }
    if (scoreTeamTwoRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamTwoRoundOne, 2, bracket)
    }

    // Score round 2
    if (scoreTeamOneRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamOneRoundTwo, 1, bracket)
    }
    if (scoreTeamTwoRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamTwoRoundTwo, 2, bracket)
    }

    // Score round 3
    if (scoreTeamOneRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamOneRoundThree, 1, bracket)
    }
    if (scoreTeamTwoRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamTwoRoundThree, 2, bracket)
    }

    res.send('Post done!')
});

// Loser bracket 1
app.get('/admin/brackets/loser/one/teams', (req, res) => {
    db.query('SELECT team FROM loser_bracket_one;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/loser/one/games', (req, res) => {
    db.query('SELECT game FROM loser_bracket_one_games;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/loser/one/scores', (req, res) => {
    db.query('SELECT id, scoreRoundOne, scoreRoundTwo, scoreRoundThree FROM loser_bracket_one;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.post("/admin/brackets/loser/one/post", (req, res) => {
    const bracket = req.body.bracket
    const bracketGame = req.body.bracketGame

    const gameNameRoundOne = req.body.gameNameRoundOne
    const gameNameRoundTwo = req.body.gameNameRoundTwo
    const gameNameRoundThree = req.body.gameNameRoundThree

    const teamNameOne = req.body.teamNameOne
    const teamNameTwo = req.body.teamNameTwo

    const scoreTeamOneRoundOne = req.body.scoreTeamOneRoundOne
    const scoreTeamOneRoundTwo = req.body.scoreTeamOneRoundTwo
    const scoreTeamOneRoundThree = req.body.scoreTeamOneRoundThree

    const scoreTeamTwoRoundOne = req.body.scoreTeamTwoRoundOne
    const scoreTeamTwoRoundTwo = req.body.scoreTeamTwoRoundTwo
    const scoreTeamTwoRoundThree = req.body.scoreTeamTwoRoundThree

    // Game name
    if (gameNameRoundOne !== undefined) {
        dbUpdateGameName(gameNameRoundOne, 1, bracketGame)
    }
    if (gameNameRoundTwo !== undefined) {
        dbUpdateGameName(gameNameRoundTwo, 2, bracketGame)
    }
    if (gameNameRoundThree !== undefined) {
        dbUpdateGameName(gameNameRoundThree, 3, bracketGame)
    }

    // Team Name
    if (teamNameOne !== undefined) {
        dbUpdateTeamName(teamNameOne, 1, bracket)
    }
    if (teamNameTwo !== undefined) {
        dbUpdateTeamName(teamNameTwo, 2, bracket)
    }

    // Score round 1
    if (scoreTeamOneRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamOneRoundOne, 1, bracket)
    }
    if (scoreTeamTwoRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamTwoRoundOne, 2, bracket)
    }

    // Score round 2
    if (scoreTeamOneRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamOneRoundTwo, 1, bracket)
    }
    if (scoreTeamTwoRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamTwoRoundTwo, 2, bracket)
    }

    // Score round 3
    if (scoreTeamOneRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamOneRoundThree, 1, bracket)
    }
    if (scoreTeamTwoRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamTwoRoundThree, 2, bracket)
    }

    res.send('Post done!')
});

// Loser bracket 2
app.get('/admin/brackets/loser/two/teams', (req, res) => {
    db.query('SELECT team FROM loser_bracket_two;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/loser/two/games', (req, res) => {
    db.query('SELECT game FROM loser_bracket_two_games;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/loser/two/scores', (req, res) => {
    db.query('SELECT id, scoreRoundOne, scoreRoundTwo, scoreRoundThree FROM loser_bracket_two;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.post("/admin/brackets/loser/two/post", (req, res) => {
    const bracket = req.body.bracket
    const bracketGame = req.body.bracketGame

    const gameNameRoundOne = req.body.gameNameRoundOne
    const gameNameRoundTwo = req.body.gameNameRoundTwo
    const gameNameRoundThree = req.body.gameNameRoundThree

    const teamNameOne = req.body.teamNameOne
    const teamNameTwo = req.body.teamNameTwo

    const scoreTeamOneRoundOne = req.body.scoreTeamOneRoundOne
    const scoreTeamOneRoundTwo = req.body.scoreTeamOneRoundTwo
    const scoreTeamOneRoundThree = req.body.scoreTeamOneRoundThree

    const scoreTeamTwoRoundOne = req.body.scoreTeamTwoRoundOne
    const scoreTeamTwoRoundTwo = req.body.scoreTeamTwoRoundTwo
    const scoreTeamTwoRoundThree = req.body.scoreTeamTwoRoundThree

    // Game name
    if (gameNameRoundOne !== undefined) {
        dbUpdateGameName(gameNameRoundOne, 1, bracketGame)
    }
    if (gameNameRoundTwo !== undefined) {
        dbUpdateGameName(gameNameRoundTwo, 2, bracketGame)
    }
    if (gameNameRoundThree !== undefined) {
        dbUpdateGameName(gameNameRoundThree, 3, bracketGame)
    }

    // Team Name
    if (teamNameOne !== undefined) {
        dbUpdateTeamName(teamNameOne, 1, bracket)
    }
    if (teamNameTwo !== undefined) {
        dbUpdateTeamName(teamNameTwo, 2, bracket)
    }

    // Score round 1
    if (scoreTeamOneRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamOneRoundOne, 1, bracket)
    }
    if (scoreTeamTwoRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamTwoRoundOne, 2, bracket)
    }

    // Score round 2
    if (scoreTeamOneRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamOneRoundTwo, 1, bracket)
    }
    if (scoreTeamTwoRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamTwoRoundTwo, 2, bracket)
    }

    // Score round 3
    if (scoreTeamOneRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamOneRoundThree, 1, bracket)
    }
    if (scoreTeamTwoRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamTwoRoundThree, 2, bracket)
    }

    res.send('Post done!')
});

// Small final 1
app.get('/admin/brackets/small-final/teams', (req, res) => {
    db.query('SELECT team FROM small_final;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/small-final/games', (req, res) => {
    db.query('SELECT game FROM small_final_games;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/small-final/scores', (req, res) => {
    db.query('SELECT id, scoreRoundOne, scoreRoundTwo, scoreRoundThree FROM small_final;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.post("/admin/brackets/small-final/post", (req, res) => {
    const bracket = req.body.bracket
    const bracketGame = req.body.bracketGame

    const gameNameRoundOne = req.body.gameNameRoundOne
    const gameNameRoundTwo = req.body.gameNameRoundTwo
    const gameNameRoundThree = req.body.gameNameRoundThree

    const teamNameOne = req.body.teamNameOne
    const teamNameTwo = req.body.teamNameTwo

    const scoreTeamOneRoundOne = req.body.scoreTeamOneRoundOne
    const scoreTeamOneRoundTwo = req.body.scoreTeamOneRoundTwo
    const scoreTeamOneRoundThree = req.body.scoreTeamOneRoundThree

    const scoreTeamTwoRoundOne = req.body.scoreTeamTwoRoundOne
    const scoreTeamTwoRoundTwo = req.body.scoreTeamTwoRoundTwo
    const scoreTeamTwoRoundThree = req.body.scoreTeamTwoRoundThree

    // Game name
    if (gameNameRoundOne !== undefined) {
        dbUpdateGameName(gameNameRoundOne, 1, bracketGame)
    }
    if (gameNameRoundTwo !== undefined) {
        dbUpdateGameName(gameNameRoundTwo, 2, bracketGame)
    }
    if (gameNameRoundThree !== undefined) {
        dbUpdateGameName(gameNameRoundThree, 3, bracketGame)
    }

    // Team Name
    if (teamNameOne !== undefined) {
        dbUpdateTeamName(teamNameOne, 1, bracket)
    }
    if (teamNameTwo !== undefined) {
        dbUpdateTeamName(teamNameTwo, 2, bracket)
    }

    // Score round 1
    if (scoreTeamOneRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamOneRoundOne, 1, bracket)
    }
    if (scoreTeamTwoRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamTwoRoundOne, 2, bracket)
    }

    // Score round 2
    if (scoreTeamOneRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamOneRoundTwo, 1, bracket)
    }
    if (scoreTeamTwoRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamTwoRoundTwo, 2, bracket)
    }

    // Score round 3
    if (scoreTeamOneRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamOneRoundThree, 1, bracket)
    }
    if (scoreTeamTwoRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamTwoRoundThree, 2, bracket)
    }

    res.send('Post done!')
});

// Small final 2
app.get('/admin/brackets/small-final/two/teams', (req, res) => {
    db.query('SELECT team FROM small_final_two;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/small-final/two/games', (req, res) => {
    db.query('SELECT game FROM small_final_two_games;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/small-final/two/scores', (req, res) => {
    db.query('SELECT id, scoreRoundOne, scoreRoundTwo, scoreRoundThree FROM small_final_two;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.post("/admin/brackets/small-final/two/post", (req, res) => {
    const bracket = req.body.bracket
    const bracketGame = req.body.bracketGame

    const gameNameRoundOne = req.body.gameNameRoundOne
    const gameNameRoundTwo = req.body.gameNameRoundTwo
    const gameNameRoundThree = req.body.gameNameRoundThree

    const teamNameOne = req.body.teamNameOne
    const teamNameTwo = req.body.teamNameTwo

    const scoreTeamOneRoundOne = req.body.scoreTeamOneRoundOne
    const scoreTeamOneRoundTwo = req.body.scoreTeamOneRoundTwo
    const scoreTeamOneRoundThree = req.body.scoreTeamOneRoundThree

    const scoreTeamTwoRoundOne = req.body.scoreTeamTwoRoundOne
    const scoreTeamTwoRoundTwo = req.body.scoreTeamTwoRoundTwo
    const scoreTeamTwoRoundThree = req.body.scoreTeamTwoRoundThree

    // Game name
    if (gameNameRoundOne !== undefined) {
        dbUpdateGameName(gameNameRoundOne, 1, bracketGame)
    }
    if (gameNameRoundTwo !== undefined) {
        dbUpdateGameName(gameNameRoundTwo, 2, bracketGame)
    }
    if (gameNameRoundThree !== undefined) {
        dbUpdateGameName(gameNameRoundThree, 3, bracketGame)
    }

    // Team Name
    if (teamNameOne !== undefined) {
        dbUpdateTeamName(teamNameOne, 1, bracket)
    }
    if (teamNameTwo !== undefined) {
        dbUpdateTeamName(teamNameTwo, 2, bracket)
    }

    // Score round 1
    if (scoreTeamOneRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamOneRoundOne, 1, bracket)
    }
    if (scoreTeamTwoRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamTwoRoundOne, 2, bracket)
    }

    // Score round 2
    if (scoreTeamOneRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamOneRoundTwo, 1, bracket)
    }
    if (scoreTeamTwoRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamTwoRoundTwo, 2, bracket)
    }

    // Score round 3
    if (scoreTeamOneRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamOneRoundThree, 1, bracket)
    }
    if (scoreTeamTwoRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamTwoRoundThree, 2, bracket)
    }

    res.send('Post done!')
});

// Finale
app.get('/admin/brackets/final/teams', (req, res) => {
    db.query('SELECT team FROM final_bracket;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/final/games', (req, res) => {
    db.query('SELECT game FROM final_bracket_games;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/final/scores', (req, res) => {
    db.query('SELECT id, scoreRoundOne, scoreRoundTwo, scoreRoundThree, scoreRoundFour, scoreRoundFive FROM final_bracket;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.post("/admin/brackets/final/post", (req, res) => {
    const bracket = req.body.bracket
    const bracketGame = req.body.bracketGame

    const gameNameRoundOne = req.body.gameNameRoundOne
    const gameNameRoundTwo = req.body.gameNameRoundTwo
    const gameNameRoundThree = req.body.gameNameRoundThree
    const gameNameRoundFour = req.body.gameNameRoundFour
    const gameNameRoundFive = req.body.gameNameRoundFive

    const teamNameOne = req.body.teamNameOne
    const teamNameTwo = req.body.teamNameTwo

    const scoreTeamOneRoundOne = req.body.scoreTeamOneRoundOne
    const scoreTeamOneRoundTwo = req.body.scoreTeamOneRoundTwo
    const scoreTeamOneRoundThree = req.body.scoreTeamOneRoundThree
    const scoreTeamOneRoundFour = req.body.scoreTeamOneRoundFour
    const scoreTeamOneRoundFive = req.body.scoreTeamOneRoundFive

    const scoreTeamTwoRoundOne = req.body.scoreTeamTwoRoundOne
    const scoreTeamTwoRoundTwo = req.body.scoreTeamTwoRoundTwo
    const scoreTeamTwoRoundThree = req.body.scoreTeamTwoRoundThree
    const scoreTeamTwoRoundFour = req.body.scoreTeamTwoRoundFour
    const scoreTeamTwoRoundFive = req.body.scoreTeamTwoRoundFive

    // Game name
    if (gameNameRoundOne !== undefined) {
        dbUpdateGameName(gameNameRoundOne, 1, bracketGame)
    }
    if (gameNameRoundTwo !== undefined) {
        dbUpdateGameName(gameNameRoundTwo, 2, bracketGame)
    }
    if (gameNameRoundThree !== undefined) {
        dbUpdateGameName(gameNameRoundThree, 3, bracketGame)
    }
    if (gameNameRoundFour !== undefined) {
        dbUpdateGameName(gameNameRoundFour, 4, bracketGame)
    }
    if (gameNameRoundFive !== undefined) {
        dbUpdateGameName(gameNameRoundFive, 5, bracketGame)
    }

    // Team Name
    if (teamNameOne !== undefined) {
        dbUpdateTeamName(teamNameOne, 1, bracket)
    }
    if (teamNameTwo !== undefined) {
        dbUpdateTeamName(teamNameTwo, 2, bracket)
    }

    // Score round 1
    if (scoreTeamOneRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamOneRoundOne, 1, bracket)
    }
    if (scoreTeamTwoRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamTwoRoundOne, 2, bracket)
    }

    // Score round 2
    if (scoreTeamOneRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamOneRoundTwo, 1, bracket)
    }
    if (scoreTeamTwoRoundTwo !== undefined) {
        dbUpdateScoreRoundTwo(scoreTeamTwoRoundTwo, 2, bracket)
    }

    // Score round 3
    if (scoreTeamOneRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamOneRoundThree, 1, bracket)
    }
    if (scoreTeamTwoRoundThree !== undefined) {
        dbUpdateScoreRoundThree(scoreTeamTwoRoundThree, 2, bracket)
    }

    // Score round 4
    if (scoreTeamOneRoundFour !== undefined) {
        dbUpdateScoreRoundFour(scoreTeamOneRoundFour, 1, bracket)
    }
    if (scoreTeamTwoRoundFour !== undefined) {
        dbUpdateScoreRoundFour(scoreTeamTwoRoundFour, 2, bracket)
    }

    // Scores round 5
    if (scoreTeamOneRoundFive !== undefined) {
        dbUpdateScoreRoundFive(scoreTeamOneRoundFive, 1, bracket)
    }
    if (scoreTeamTwoRoundFive !== undefined) {
        dbUpdateScoreRoundFive(scoreTeamTwoRoundFive, 2, bracket)
    }

    res.send('Post done!')
});

// Seconde chance bracket
app.get('/admin/brackets/second-chance/one/teams', (req, res) => {
    db.query('SELECT team FROM second_chance_bracket_one;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/second-chance/one/games', (req, res) => {
    db.query('SELECT game FROM second_chance_bracket_one_games;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/second-chance/one/scores', (req, res) => {
    db.query('SELECT id, scoreRoundOne FROM second_chance_bracket_one;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/second-chance/two/teams', (req, res) => {
    db.query('SELECT team FROM second_chance_bracket_two;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/second-chance/two/games', (req, res) => {
    db.query('SELECT game FROM second_chance_bracket_two_games;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.get('/admin/brackets/second-chance/two/scores', (req, res) => {
    db.query('SELECT id, scoreRoundOne FROM second_chance_bracket_two;', (err, result) => {
        if (err) {
            console.log(err)
        }
        if (result.length > 0) {
            res.json({ result })
        }
        // console.log(result);
    })
})

app.post("/admin/brackets/second-chance/one/post", (req, res) => {
    const bracket = req.body.bracket
    const bracketGame = req.body.bracketGame

    const gameNameRoundOne = req.body.gameNameRoundOne

    const teamNameOne = req.body.teamNameOne
    const teamNameTwo = req.body.teamNameTwo

    const scoreTeamOneRoundOne = req.body.scoreTeamOneRoundOne

    const scoreTeamTwoRoundOne = req.body.scoreTeamTwoRoundOne

    // Game name
    if (gameNameRoundOne !== undefined) {
        dbUpdateGameName(gameNameRoundOne, 1, bracketGame)
    }

    // Team Name
    if (teamNameOne !== undefined) {
        dbUpdateTeamName(teamNameOne, 1, bracket)
    }
    if (teamNameTwo !== undefined) {
        dbUpdateTeamName(teamNameTwo, 2, bracket)
    }

    // Score round 1
    if (scoreTeamOneRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamOneRoundOne, 1, bracket)
    }
    if (scoreTeamTwoRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamTwoRoundOne, 2, bracket)
    }

    res.send('Post done!')
});

app.post("/admin/brackets/second-chance/two/post", (req, res) => {
    const bracket = req.body.bracket
    const bracketGame = req.body.bracketGame

    const gameNameRoundOne = req.body.gameNameRoundOne

    const teamNameOne = req.body.teamNameOne
    const teamNameTwo = req.body.teamNameTwo

    const scoreTeamOneRoundOne = req.body.scoreTeamOneRoundOne

    const scoreTeamTwoRoundOne = req.body.scoreTeamTwoRoundOne

    // Game name
    if (gameNameRoundOne !== undefined) {
        dbUpdateGameName(gameNameRoundOne, 1, bracketGame)
    }

    // Team Name
    if (teamNameOne !== undefined) {
        dbUpdateTeamName(teamNameOne, 1, bracket)
    }
    if (teamNameTwo !== undefined) {
        dbUpdateTeamName(teamNameTwo, 2, bracket)
    }

    // Score round 1
    if (scoreTeamOneRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamOneRoundOne, 1, bracket)
    }
    if (scoreTeamTwoRoundOne !== undefined) {
        dbUpdateScoreRoundOne(scoreTeamTwoRoundOne, 2, bracket)
    }

    res.send('Post done!')
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })

app.listen(8080, () => {
    console.log("running server");
});