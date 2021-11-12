import React from 'react'
import AdminBackButton from '../Admin/AdminBackButton'
import AdminLogoutButton from '../Admin/AdminLogoutButton'
import LoserBracketTableTwo from '../Admin/LoserBracketTableTwo'


function LoserBracketTwo() {
    return (
        <>
            <div className="admin_buttons_container">
                <AdminLogoutButton />
                <AdminBackButton />
            </div>
            <LoserBracketTableTwo />
        </>
    )
}

export default LoserBracketTwo
