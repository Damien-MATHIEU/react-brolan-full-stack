import React from 'react'
import AdminBackButton from '../Admin/AdminBackButton'
import AdminLogoutButton from '../Admin/AdminLogoutButton'
import SmallFinalTable from '../Admin/SmallFinaleTable'

function SmallFinal() {
    return (
        <>
            <div className="admin_buttons_container">
                <AdminLogoutButton />
                <AdminBackButton />
            </div>
            <SmallFinalTable />
        </>
    )
}

export default SmallFinal
