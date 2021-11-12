import React from 'react'
import '../styles/TeamsTable.css'

function TeamsTable() {
    return (
        <div className="teams_table_container">
            <table>
                <thead>
                    <tr>
                        <th>Equipe</th>
                        <th>Participants</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>BROS AU MAQUEREAU</td>
                        <td>Rémi<br />Guillaume</td>
                    </tr>
                    <tr>
                        <td>makost et un bg</td>
                        <td>Bastien<br />Mathieu L.</td>
                    </tr>
                    <tr>
                        <td>BLOP BLOP</td>
                        <td>Baptiste<br />Charly</td>
                    </tr>
                    <tr>
                        <td>Pastis Olive</td>
                        <td>Lorenzo<br />Lucas</td>
                    </tr>
                    <tr>
                        <td>TOP1OURIEN</td>
                        <td>Benoît S.<br />Damien</td>
                    </tr>
                    <tr>
                        <td>Le permis à Nicolas</td>
                        <td>Mathieu H.<br />Mathéo</td>
                    </tr>
                    <tr>
                        <td>xXxPro_Team_84xXx</td>
                        <td>Thim<br />Theo Q.</td>
                    </tr>
                    <tr>
                        <td>La dream team</td>
                        <td>Bruno<br />Lucy</td>
                    </tr>
                    <tr>
                        <td>Les Doomers</td>
                        <td>Angelo<br />Axel</td>
                    </tr>
                    <tr>
                        <td>Pipi Partout</td>
                        <td>Arthur<br />Théo P.</td>
                    </tr>
                    <tr>
                        <td>MirroirBrillant</td>
                        <td>Kevin<br />Antoine</td>
                    </tr>
                    <tr>
                        <td>LesWarzoneur</td>
                        <td>Benoît P.<br />Joël</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TeamsTable
