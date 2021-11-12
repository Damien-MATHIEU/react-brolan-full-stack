import React from 'react'
import AdminBackButton from '../Admin/AdminBackButton'
import AdminLogoutButton from '../Admin/AdminLogoutButton'
import OpeningBracketTwoTable from '../Admin/OpeningBracketTwoTable'

function OpeningBracketTwo() {
    return (
        <>
            <div className="admin_buttons_container">
                <AdminLogoutButton />
                <AdminBackButton />
            </div>
            <OpeningBracketTwoTable />
        </>
    )
}

export default OpeningBracketTwo
