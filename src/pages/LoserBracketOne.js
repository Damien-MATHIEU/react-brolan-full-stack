import React from 'react'
import AdminBackButton from '../Admin/AdminBackButton'
import AdminLogoutButton from '../Admin/AdminLogoutButton'
import LoserBracketTableOne from '../Admin/LoserBracketTableOne'

function LoserBracketOne() {
    return (
        <>
            <div className="admin_buttons_container">
                <AdminLogoutButton />
                <AdminBackButton />
            </div>
            <LoserBracketTableOne />
        </>
    )
}

export default LoserBracketOne
