import React from 'react'
import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Featured = () => {
    return (
        <div className='featured'>

            <div className='top'>
                <span>Total Revenue</span>
                <MoreVertOutlinedIcon/>
            </div>


            <div className="center">
                <div className="progress">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={2}/>
                </div>
                <p className='total'>Total sales made today</p>
                <span className='Total_amount'>$420</span>
                <p className='notice'>Previous transaction processing. last payments may not be included</p>
            </div>


            <div className="bottom">
                <div className="target">
                    <span>Target</span>
                    <span className="amount negative"><KeyboardArrowDownIcon/> $12.3</span>
                </div>
                <div className="last_week">
                    <span>Last Week</span>
                    <span className="amount positive"><KeyboardArrowUpIcon/> $550</span>
                </div>
                <div className="last_month">
                <span>Last Month</span>
                <span className="amount positive"><KeyboardArrowUpIcon/> $34</span>
                </div>
            </div>

        </div>
    )
}

export default Featured

