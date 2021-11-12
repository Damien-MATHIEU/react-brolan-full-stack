import axios from 'axios';
import React, { Fragment } from 'react'
import { useHistory, withRouter } from 'react-router-dom';

function AdminOnly({ children }) {
    let history = useHistory()

    const serverURL = "https://brolan.damien-mathieu.fr"
    const adminPages = ["/admin/dashboard", "/admin/bracket/opening-one", "/admin/bracket/opening-two", "/admin/bracket/second-chance/one", "/admin/bracket/second-chance/two", "/admin/bracket/winner", "/admin/bracket/loser", "/admin/bracket/final"]

    if (localStorage.getItem('token')) {
        axios.post( serverURL + '/check', {
            token: localStorage.getItem('token')
        }).then((response) => {
            // console.log(response);
            if (response.data.auth === true) {
            } else {
                // console.log(window.location.pathname);
                if (adminPages.includes(window.location.pathname)) {
                    history.push('/login')
                } else {
                    history.push('/')
                }
            }
        })
    } else {
        if (adminPages.includes(window.location.pathname)) {
            history.push('/login')
        } else {
            history.push('/')
        }
    }
    return <Fragment>{children}</Fragment>;
}

export default withRouter(AdminOnly)
