import React, { useEffect } from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Nav from '../../components/nav/Nav'
import Widgets from '../../components/widgets/Widgets'
import Charts from '../../components/charts/Charts'
import TableUi from '../../components/table/Table'


import {useState,useRef} from 'react'



const Home = () => {
  const [expand,setExpand] = useState(false);
  const container = useRef()

  useEffect(()=>{
    if(!expand){
      container.current.classList.remove('expand')
    }else{
      container.current.classList.add('expand')
    }
  },[expand])


  return (
    <div className='home'>
        <Sidebar expand={expand} setExpand={setExpand}/>

        <div className="home_container" ref={container}>
        <Nav/>

        <Widgets/>

        <Charts/>

        <TableUi/>
        </div>
    </div>
  )
}

export default Home