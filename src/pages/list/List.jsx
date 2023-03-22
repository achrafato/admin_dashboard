import React from 'react'
import './list.scss'
import Nav from '../../components/nav/Nav'
import Sidebar from '../../components/sidebar/Sidebar'
import Datatable from '../../components/datatable/Datatable'

import {useState,useEffect,useRef} from 'react'

//list of users
const List = () => {
  const [expand,setExpand] = useState(false)
  const ref=useRef()

  useEffect(()=>{
    expand ? ref.current.classList.add('expand') : ref.current.classList.remove('expand')
  },[expand])

  return (
    <div className="list">
      <Sidebar expand={expand} setExpand={setExpand}/>

      <div className="list_container" ref={ref}>
        <Nav/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List