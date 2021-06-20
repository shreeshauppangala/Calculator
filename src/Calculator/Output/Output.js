import React from 'react';
import './Output.css'

const Output = (props) => {

    return (
        <div className='Display'>
            <p>{props.result}</p>
        </div>
    )
        ;
}


export default Output;