import React from 'react'
import './new.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Nav from '../../components/nav/Nav'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import {v4 as uuid4} from 'uuid';
import {useState,useRef,useEffect} from 'react'

const New = ({inputs,title}) => {
  
  const [expand,setExpand] = useState(false)
  const ref = useRef() 

  useEffect(()=>{
    expand ? ref.current.classList.add('expand') : ref.current.classList.remove('expand')
  },[expand])

  const [pic,setPic] = useState('')

  const defaultPic = process.env.PUBLIC_URL+"/pic/default.png"; 

  // console.log(inputs.length > 0 ? inputs : 'nooo');

  return (
    <div className='new'>
      <Sidebar expand={expand} setExpand={setExpand} />

      <div className="container" ref={ref}>
        <Nav/>
        <div className="page_new">
          <div className="top">{title}</div>


          <div className="bottom">

              <div className="img">
                    <img src={pic ? URL.createObjectURL(pic) : defaultPic} alt="" />
              </div>

            <div className="data">
            <form>

                  <div className="input_form">
                    <label htmlFor='pic'><span>Image: </span><DriveFolderUploadIcon style={{cursor:'pointer'}}/></label>
                    <input type='file' id='pic' onChange={(e)=>setPic(e.target.files[0])}/>
                  </div>

                  {
                    inputs.map((data)=>(
                    <div className="input_form" key={uuid4()}>
                      <label className='input_name'>{data.label}</label>
                      <input type={data.type} placeholder={data.placeholder}/>
                    </div>
                    ))
                  }


                                      <button>send</button>
            </form>


            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default New