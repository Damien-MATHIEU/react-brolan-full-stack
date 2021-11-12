import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Button.css'

function AdminLogoutButton() {

    let history = useHistory()
    function redirectToLogin(history) {
        localStorage.removeItem("token")
        history.push('/login')
    }

    return (
        <button
            className={`btn btn--outline--red`}
            onClick={() => { redirectToLogin(history) }}>
            Se déconnecter
        </button>
    )
}



export default AdminLogoutButton
