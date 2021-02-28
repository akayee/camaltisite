import { CardHeader } from '@material-ui/core';
import React from 'react';

import { lightGreen } from '@material-ui/core/colors';


const Discount = props=>{

    return <div style={{position:"absolute",backgroundColor:lightGreen[900],width:"50px",height:"50px",top:"5%",right:"3%",fontSize:20,borderRadius:50}}>
        <p style={{color:'white',textAlign:"center",margin:4}}>%{props.item.discount}</p>

    </div>
}

export default Discount;