import React from 'react'
import AdminBackButton from '../Admin/AdminBackButton'
import AdminLogoutButton from '../Admin/AdminLogoutButton'
import SecondChanceBracketOneTable from '../Admin/SecondChanceBracketOneTable'

function SecondChanceBracketOne() {
    return (
        <div>
            <div className="admin_buttons_container">
                <AdminLogoutButton />
                <AdminBackButton />
            </div>
            <SecondChanceBracketOneTable />
        </div>
    )
}

export default SecondChanceBracketOne
