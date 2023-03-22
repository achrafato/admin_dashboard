import React from 'react'
import './table.scss'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {useContext} from 'react'
import {DarkContext} from '../../context/darkModeContext'

const TableUi = () => {

    const {darkMode} = useContext(DarkContext)
    const colorTable = darkMode ? 'white' : '#1b1b1b'
    const colorBackground = darkMode ? '#1b1b1b' : 'white'

    const rows = [
            {
            id: 1143155,
            product: "Acer Nitro 5",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
            },
            {
            id: 2235235,
            product: "Playstation 5",
            img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Michael Doe",
            date: "1 March",
            amount: 900,
            method: "Online Payment",
            status: "Pending",
            },
            {
            id: 2342353,
            product: "Redragon S101",
            img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 35,
            method: "Cash on Delivery",
            status: "Pending",
            },
            {
            id: 2357741,
            product: "Razer Blade 15",
            img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Jane Smith",
            date: "1 March",
            amount: 920,
            method: "Online",
            status: "Approved",
            },
            {
            id: 2342355,
            product: "ASUS ROG Strix",
            img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
            customer: "Harold Carol",
            date: "1 March",
            amount: 2000,
            method: "Online",
            status: "Pending",
            },
    ];

    //table of products purchased by each a single user
    return (
<div className='tableui'>
    <div className="container">
        <div className="title">Last Transactions</div>
        <TableContainer component={Paper} sx={{background:colorBackground}}>
            <Table aria-label="simple table" >
                <TableHead >
                    <TableRow sx={{'th,td':{color:colorTable}}}>
                        <TableCell className='titles'>Id</TableCell>
                        <TableCell className='titles'>Product</TableCell>
                        <TableCell className='titles'>Customer</TableCell>
                        <TableCell className='titles'>Date</TableCell>
                        <TableCell className='titles'>Amount</TableCell>
                        <TableCell className='titles'>Method</TableCell>
                        <TableCell className='titles'>Status</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id} sx={{'th,td':{color:colorTable}}}>

                        <TableCell component="th" scope="row">{row.id}</TableCell>
                        <TableCell className='product_cell' align="right">
                            <img className="product_pic" src={row.img} alt="pic" />
                            {row.product}
                        </TableCell>
                        <TableCell align="left">{row.customer}</TableCell>
                        <TableCell align="left">{row.date}</TableCell>
                        <TableCell align="left">{row.amount}</TableCell>
                        <TableCell align="left">{row.method}</TableCell>
                        <TableCell align="left" className={`status_cell ${row.status}`}>
                            <span>{row.status}</span>
                        </TableCell>

                    </TableRow>
                ))}
                </TableBody>

            </Table>
    </TableContainer>
    </div>
</div>
    )
}

export default TableUi