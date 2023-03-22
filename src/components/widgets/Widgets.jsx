import React from 'react'
import './widget.scss'
import Widget from './Widget'

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="container">
                <Widget type='user'/>
                <Widget type='order'/>
                <Widget type='earning'/>
                <Widget type='balance'/>
            </div>

        </div>
    )
}

export default Widgets