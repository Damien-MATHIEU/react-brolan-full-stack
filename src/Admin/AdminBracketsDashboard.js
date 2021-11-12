import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/AdminBracketsDashboard.css'

function AdminBracketsDashboard() {
    let history = useHistory()
    return ( 

        <div className="admin_brackets_dashboard_container">
            <h1>Dashboard</h1>
            <input type="button" className="btn btn--outline--dark" value="Poule 1" onClick={() => {history.push('/admin/bracket/opening-one')}} />
            <input type="button" className="btn btn--outline--dark" value="Poule 2" onClick={() => {history.push('/admin/bracket/opening-two')}} />
            
            <input type="button" className="btn btn--outline--dark" value="Repêchage 1" onClick={() => {history.push('/admin/bracket/second-chance/one')}} />
            <input type="button" className="btn btn--outline--dark" value="Repêchage 2" onClick={() => {history.push('/admin/bracket/second-chance/two')}} />
            
            <input type="button" className="btn btn--outline--dark" value="Loser bracket 1" onClick={() => {history.push('/admin/bracket/loser/one')}} />
            <input type="button" className="btn btn--outline--dark" value="Loser bracket 2" onClick={() => {history.push('/admin/bracket/loser/two')}} />
            
            <input type="button" className="btn btn--outline--dark" value="Winner bracket 1" onClick={() => {history.push('/admin/bracket/winner/one')}} />
            <input type="button" className="btn btn--outline--dark" value="Winner bracket 2" onClick={() => {history.push('/admin/bracket/winner/two')}} />

            <input type="button" className="btn btn--outline--dark" value="Petite finale 1" onClick={() => {history.push('/admin/bracket/small-final')}} />
            <input type="button" className="btn btn--outline--dark" value="Petite finale 2" onClick={() => {history.push('/admin/bracket/small-final/two')}} />

            <input type="button" className="btn btn--outline--dark" value="Finale" onClick={() => {history.push('/admin/bracket/final')}} />
        </div>
    )
}

export default AdminBracketsDashboard
