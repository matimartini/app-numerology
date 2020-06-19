import React from 'react'

import './styles/TablesDeficiencies.css'

class TablesDeficiencies extends React.Component {
    render() {
        return (
            <div className="TablesDeficiencies">
                <table className="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">1</th>
                        <th scope="col">2</th>
                        <th scope="col">3</th>
                        <th scope="col">4</th>
                        <th scope="col">5</th>
                        <th scope="col">6</th>
                        <th scope="col">7</th>
                        <th scope="col">8</th>
                        <th scope="col">9</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Si</th>
                            <td>No</td>
                            <td>Si</td>
                            <td>No</td>
                            <td>No</td>
                            <td>No</td>
                            <td>No</td>
                            <td>No</td>
                            <td>No</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TablesDeficiencies