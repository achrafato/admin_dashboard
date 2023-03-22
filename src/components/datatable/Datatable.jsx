import React, {useState} from 'react'
import './datatable.scss'
import { DataGrid} from '@mui/x-data-grid';
import {userColumns,userRows} from '../../datatablesource'


//list of users
const Datatable = () => {
    const [data,setData] = useState(userRows)

    const handleDelte = (id)=>{
        setData(data.filter((d)=>(d.id !== id) ))
    }

    //adding new action column
    const actionColumn = [
        {field:"action",headerName:"Action",width:200,
            renderCell:(params)=>{
                return(
                    <div className='cellAction'>
                        <div className="viewButton">View</div>
                        <div className="deleteButton" onClick={()=>handleDelte(params.row.id)}>Delete</div>
                    </div>
                )
            }}
    ]
    return (
        <div className='dataTable'>
            <div className="container">
                <div style={{ height: 400, width: '100%', margin:'auto'}}>
                    <DataGrid
                        rows={data}
                        columns={userColumns.concat(actionColumn)}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        className='tableContainer'/>
                </div>
            </div>
        </div>

    )
}

export default Datatable


