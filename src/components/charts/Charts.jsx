import React from 'react'
import './charts.scss'

import Featured from './featured/Featured'
import Chart from './chart/Chart'

const Charts = () => {
    return (
        <div className='Charts'>
            <div className="container">
                <Featured/>
                <Chart title='Last 6 Month (revenue)' aspect={2 / 1}/>
            </div>
        </div>
    )
}

export default Charts