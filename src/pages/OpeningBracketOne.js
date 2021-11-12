import React from 'react'
import OpeningBracketOneTable from '../Admin/OpeningBracketOneTable'
import '../styles/Button.css'
import AdminLogoutButton from '../Admin/AdminLogoutButton'
import AdminBackButton from '../Admin/AdminBackButton'


function OpeningBracketOne() {
    return (
        <>
            <div className="admin_buttons_container">
                <AdminLogoutButton />
                <AdminBackButton />
            </div>
            <OpeningBracketOneTable />
        </>
    )
}

export default OpeningBracketOne
