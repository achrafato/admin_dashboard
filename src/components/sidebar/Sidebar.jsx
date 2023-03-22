import React from 'react'
import './sidebar.scss'
import {useRef} from 'react'

//mui
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

//context
import {useContext} from 'react'
import {DarkContext} from '../../context/darkModeContext'


const Sidebar = ({expand,setExpand}) => {
  
  const sideBar = useRef()

  const shrink = ()=>{
    sideBar.current.classList.toggle('expand')
    setExpand(!expand)
  }

  const {dispatch} = useContext(DarkContext)
  
  return (
    <div className='sideBar' ref={sideBar}>
        <div className="top">
          <span className='logo'>Logo</span>
          <span className='arrow'><KeyboardDoubleArrowRightIcon sx={{cursor:'pointer'}} onClick={shrink}/></span>
        </div>

        <div className="center">

          <ul>
          <h6>Main</h6>
            <li>
              <DashboardIcon className='icon'/>
              <span>Dashboard</span>
            </li>

          <h6>Lists</h6>
            <li>
              <PersonOutlineIcon className='icon'/>
              <span>Users</span>
            </li>
            <li>
              <StoreIcon className='icon'/>
              <span>Products</span>
            </li>
            <li>
              <CreditCardIcon className='icon'/>
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className='icon'/>
              <span>Delivery</span>
            </li>

            <h6>USEFUL</h6>
            <li>
              <InsertChartIcon className='icon'/>
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className='icon'/>
              <span>Notifications</span>
            </li>

            <h6>SERVICES</h6>
            <li>
              <SettingsIcon className='icon'/>
              <span>System Health</span>
            </li>
            <li>
              <SettingsIcon className='icon'/>
              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon className='icon'/>
              <span>Settings</span>
            </li>

            <h6>USER</h6>
            <li>
              <AccountBoxIcon className='icon'/>
              <span>Profile</span>
            </li>
            <li>
              <LogoutIcon className='icon'/>
              <span>Logout</span>
            </li>

          </ul>

        </div>
        
        <div className="bottom">
          <div className="colorOptions" onClick={()=>dispatch({type:'light'})}></div>
          <div className="colorOptions" onClick={()=>dispatch({type:'dark'})}></div>
        </div>
    </div>
  )
}


export default Sidebar