import React from 'react'
import {Link} from 'react-router-dom'

function About() {
    return (
        <div>
            <h4 style={{textAlign:'center'}}> Maintained by Dax Patel</h4>
            <h6 style={{textAlign:'center'}}>Student of DA-IICT.</h6>
            <Link style ={{ display: 'block' , textAlign : 'center'}} to='/'>Go back</Link>
        </div> 
    )
}

export default About
