import React from 'react'
import { useHistory } from 'react-router-dom'

function AdminBackButton() {

    let history = useHistory()
    function redirectToPreviousPage(history) {
        history.push('/admin/dashboard')
    }

    return (
        <button
            className={`btn btn--outline--dark`}
            onClick={() => { redirectToPreviousPage(history) }}>
            Dashboard
        </button>
    )
}

export default AdminBackButton
