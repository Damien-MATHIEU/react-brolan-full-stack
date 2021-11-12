import React from 'react'
import AdminBackButton from '../Admin/AdminBackButton'
import AdminLogoutButton from '../Admin/AdminLogoutButton'
import SmallFinalTwoTable from '../Admin/SmallFinalTwoTable'

function SmallFinalTwo() {
    return (
        <>
            <div className="admin_buttons_container">
                <AdminLogoutButton />
                <AdminBackButton />
            </div>
            <SmallFinalTwoTable />
        </>
    )
}

export default SmallFinalTwo
