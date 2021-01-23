import React from 'react'

function Buttons(props) {
    return (
        <div>
             <div style={{backgroundColor : props.color }} className = 'btn' onClick= {props.onClick}>{props.text}</div>
        </div>
    )
}

export default Buttons
