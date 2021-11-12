import React from 'react'
import AdminBackButton from '../Admin/AdminBackButton'
import AdminLogoutButton from '../Admin/AdminLogoutButton'
import SecondChanceBracketTwoTable from '../Admin/SecondChanceBracketTwoTable'

function SecondChanceBracketTwo() {
    return (
        <>
            <div className="admin_buttons_container">
                <AdminLogoutButton />
                <AdminBackButton />
            </div>
            <SecondChanceBracketTwoTable />
        </>
    )
}

export default SecondChanceBracketTwo
