import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Nav from '../../components/nav/Nav'
import Chart from '../../components/charts/chart/Chart'
import TableUi from '../../components/table/Table'

import {useState,useRef,useEffect} from 'react'

const Single = () => {
  const ref = useRef();
  const [expand,setExpand] = useState(false)

  useEffect(()=>{
    expand ? ref.current.classList.add('expand') : ref.current.classList.remove('expand')
  },[expand])


  return (
    <div className='single'>
      <Sidebar expand={expand} setExpand={setExpand}/>

      <div className="single_container" ref={ref}>
        <Nav/>
        
        <div className="top">
          <div className="container">
              
              <div className="left">
                
                <p className='title'>Information</p>
                <span>Edit</span>

                <div className="user_data">
                  <div className="img">
                    <img src="https://i.pravatar.cc/300" alt="" />
                  </div>

                  <div className="info">
                    <p className='name'>Jack </p>
                    <p> <span>Email: </span> jane@gmail.com</p>
                    <p> <span>Phone:</span>  +4543664</p>
                    <p> <span>Address: </span> Elton St. 234 Garden</p>
                    <p> <span>Country: </span> USA</p>
                  </div>

                </div>
              </div>

              <div className="right">
                <Chart title='User spending (last 6 month)' aspect={3 / 1}/>
              </div>
          </div>

        </div>

        <div className="bottom">
          <div className="container">
            <TableUi/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Single