import React from 'react';
import '../Dashboard/Dashboard.scss'

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="dashboard_container">
                <table className='dashboard_table'>
                    <thead>
                        <tr >
                            <th>#</th>
                            <th className='dashboard_name'>Name</th>
                            <th>Floor price</th>
                            <th>24 FP</th>
                            <th>7 FP</th>
                            <th>Volume All</th>
                            <th>Volume 24</th>
                            <th>Volume 7</th>
                            <th>MarketCap</th>
                            <th>Listed/Supply</th>
                            <th>Holders</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className='dashboard_name'>Jotun Labs</td>
                            <td>200</td>
                            <td>10</td>
                            <td>20</td>
                            <td>40000</td>
                            <td>1000</td>
                            <td>4000</td>
                            <td>1000000</td>
                            <td>200/5000</td>
                            <td>7000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td className='dashboard_name'>Jotun Labs</td>
                            <td>200</td>
                            <td>10</td>
                            <td>20</td>
                            <td>40000</td>
                            <td>1000</td>
                            <td>4000</td>
                            <td>1000000</td>
                            <td>200/5000</td>
                            <td>7000</td>
                        </tr>

                        <tr>
                            <td>1</td>
                            <td className='dashboard_name'>Jotun Labs</td>
                            <td>200</td>
                            <td>10</td>
                            <td>20</td>
                            <td>40000</td>
                            <td>1000</td>
                            <td>4000</td>
                            <td>1000000</td>
                            <td>200/5000</td>
                            <td>7000</td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Dashboard;
