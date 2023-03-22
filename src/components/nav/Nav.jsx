import React from 'react'
import './nav.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import {Avatar, Stack,Badge}  from "@mui/material"
import {Link} from 'react-router-dom'

import { useContext } from 'react';
import {DarkContext} from '../../context/darkModeContext'

const Nav = () => {
  const {dispatch} = useContext(DarkContext)




  return (
    <div className="nav">
      <div className="container">

        <div className="searchContainer">
          <div className="search">
            <input type='text' placeholder='Search ....'/>
            <SearchIcon className="icon"/>
          </div>
        </div>

        <div className="nav-menu">
          <ul>
            <Link to='/' style={{color:'inherit',textDecoration:'none'}}>
            <li>
                <LanguageIcon className="nav_icon"/> English
            </li>
            </Link>

            <li onClick={()=>dispatch({type:'toggle'})}>
              <DarkModeOutlinedIcon/>
            </li>
            <li>
              <FullscreenExitIcon/>
            </li>
            <li>
              <Badge badgeContent={2} color='error'>
                <NotificationsNoneIcon/>
              </Badge>
              
            </li>
            <li>
            <Badge badgeContent={2} color='error'>
                <ChatBubbleOutlineOutlinedIcon/>
              </Badge>
            </li>
            <li>
              <ListOutlinedIcon/>
            </li>
            
              <li>
                  <Stack>
                    <Avatar src='https://randomuser.me/api/portraits/women/70.jpg' alt='user'/>
                  </Stack>
              </li>
        

            <li>
              <SettingsIcon/>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav