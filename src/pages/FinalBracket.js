import React from 'react'
import AdminBackButton from '../Admin/AdminBackButton'
import AdminLogoutButton from '../Admin/AdminLogoutButton'
import FinaleBracketTable from '../Admin/FinaleBracketTable'


function FinalBracket() {
    return (
        <>
            <div className="admin_buttons_container">
                <AdminLogoutButton />
                <AdminBackButton />
            </div>
            <FinaleBracketTable />
        </>
    )
}

export default FinalBracket
