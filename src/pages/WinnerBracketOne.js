import React from 'react'
import AdminBackButton from '../Admin/AdminBackButton'
import AdminLogoutButton from '../Admin/AdminLogoutButton'
import WinnerBracketTableOne from '../Admin/WinnerBracketTableOne'

function WinnerBracketOne() {
    return (
        <>
            <div className="admin_buttons_container">
                <AdminLogoutButton />
                <AdminBackButton />
            </div>
            <WinnerBracketTableOne />
        </>
    )
}

export default WinnerBracketOne
