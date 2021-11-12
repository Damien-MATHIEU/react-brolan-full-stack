import React from 'react'
import AdminBracketsDashboard from '../Admin/AdminBracketsDashboard'
import AdminLogoutButton from '../Admin/AdminLogoutButton'

function AdminDashboard() {
    return (
        <>
            <div className="admin_buttons_container">
                <AdminLogoutButton />
            </div>
            <AdminBracketsDashboard />
        </>
    )
}

export default AdminDashboard
