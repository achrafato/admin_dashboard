import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';



const Widget = ({type}) => {

    //inserted info depend on the type
    let data = {}

    switch(type){
        case 'user':
            data = {
                title:'USERS',
                isMoney: false,
                link:'Se all users',
                icon : <PersonOutlineIcon sx={{background:'#f74c4c',padding: '4px',borderRadius: '5px',}}/>
            }
            break;

        case 'order':
            data={
                title:'ORDERS',
                isMoney:false,
                link:'View all orders',
                icon: <LocalGroceryStoreOutlinedIcon sx={{background:'#4c81f7',padding: '4px',borderRadius: '5px',}}/>
            }
            break;

        case 'earning':
            data={
                title:'EARNINGS',
                isMoney:true,
                link:'view net earning',
                icon: <AttachMoneyOutlinedIcon sx={{background:'#008f04',padding: '4px',borderRadius: '5px',}}/>
            }
            break;

        case 'balance':
            data={
                title:'MY BALANCE',
                isMoney:true,
                link:'See details',
                icon: <AccountBalanceWalletOutlinedIcon sx={{background:'#95457c',padding: '4px',borderRadius: '5px',}}/>
            }
            break;
            

        default: break;

    }
    return (
        <div className="widget">
            
            <div className="left">
                <span className='user'>{data.title}</span>
                <span className='number'>{data.isMoney ? "$" : ""} 720</span>
                <span className='users'>{data.link}</span>
            </div>

            <div className="right">
                <span className='percentage positive'><KeyboardArrowUpIcon/> +5%</span>
                <div className='icon'>{data.icon}</div>
            </div>
        </div>
    )
}

export default Widget