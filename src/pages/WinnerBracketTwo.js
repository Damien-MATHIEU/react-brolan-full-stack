import React from 'react'
import AdminBackButton from '../Admin/AdminBackButton'
import AdminLogoutButton from '../Admin/AdminLogoutButton'
import WinnerBracketTableTwo from '../Admin/WinnerBracketTableTwo'

function WinnerBracketTwo() {
    return (
        <>
            <div className="admin_buttons_container">
                <AdminLogoutButton />
                <AdminBackButton />
            </div>
            <WinnerBracketTableTwo />
        </>
    )
}

export default WinnerBracketTwo
