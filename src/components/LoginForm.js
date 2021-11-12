import React, { useEffect, useState } from 'react'
import '../styles/LoginForm.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

function LoginForm() {
    // const [usernameReg, setUsernameReg] = useState("");
    // const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // eslint-disable-next-line
    const [loginStatus, setLoginStatus] = useState(false);

    axios.defaults.withCredentials = true;

    const serverUrl = "https://brolan.damien-mathieu.fr"
    // const register = () => {
    //     axios.post("http://localhost:3001/register", {
    //         username: usernameReg,
    //         password: passwordReg,
    //     }).then((response) => {
    //         console.log(response);
    //     });
    // };

    const login = () => {
        axios.post(serverUrl + "/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (!response.data.auth) {
                // setLoginStatus(false);
                // console.log('---');
                // console.log(response.data);
                document.getElementById('login_form_invalid').innerHTML = response.data.message
            } else {
                // console.log(response.data.token);
                localStorage.setItem("token", response.data.token)
                // setLoginStatus(true);
                // setTimeout(() => {
                redirectToAdminDashboard(history)

                // }, 100);
            }
        });
    };

    
    if (localStorage.getItem('token')) {
        axios.post(serverUrl + '/check', {
            token: localStorage.getItem('token')
        }).then((response) => {
            // console.log(response);
            if (response.data.auth === true) {
                redirectToAdminDashboard(history)
            } else {
                // history.push('/login')
            }
        })
    } else {
        // console.log('Ca passe pas');
        // history.push('/login')
    }

    useEffect(() => {
        axios.get (serverUrl + "/login").then((response) => {
            if (response.data.loggedIn === true) {
                // setLoginStatus(true);
            }
        });
        // userAuthenticated()
    }, []);



    // const userAuthenticated = () => {
    //     axios.get('http://localhost:3001/isUserAuth', {
    //         headers: {
    //             "x-access-token": localStorage.getItem("token")
    //         }
    //     }).then((response) => {
    //         // console.log(response);
    //     })
    // }

    let history = useHistory()

    function redirectToAdminDashboard(history) {
        history.push('/admin/dashboard')
    }

    return (
        <div className="login_form_container">
            {/* <div className="registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setUsernameReg(e.target.value);
                    }}
                />
                <br />
                <label>Password</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}
                />
                <br />
                <button onClick={register}> Register </button>
            </div> */}

            <h1 className="login_form_title">Login</h1>
            <form className="login_form_form" method="POST" onSubmit={(e) => { e.preventDefault() }}>
                <input
                    type="text"
                    placeholder="Pseudo..."
                    name="username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    required
                />
                <br />
                <input
                    type="password"
                    placeholder="Mot de passe..."
                    name="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required
                />
                <br />
                <input type="submit" onClick={login} value="Se connecter" />
            </form>
            <p id="login_form_invalid" className="login_form_invalid"></p>
            {loginStatus &&
                <p>{redirectToAdminDashboard(history)}</p>
            }
        </div>
    );
}

export default LoginForm
