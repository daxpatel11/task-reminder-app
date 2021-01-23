import React from 'react'
import Buttons from './Buttons';
import {useLocation}  from 'react-router-dom'
function Header({title , onadd,showadd}) {
    const location = useLocation();
   
    return (    
       
        <header className = 'header'>
            <h2>{title}</h2>
            {location.pathname === '/' && (
                <Buttons color={showadd ? 'red' : 'green'} text={showadd ? 'close' : 'Add'} onClick = {onadd}/>
            )}
           
        </header>
      
    )
}
Header.defaultProps = {
    title: 'dax patel'
}

export default Header
