import React, { useState } from 'react'
// import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Funcounter = () => {
    const[count,setCount]=useState(0)
    function increment()
    {
        setCount(
            count+1
        )
    }
    function decrement()
    {
        setCount(
            count-1
        )
    }
  return (
    <div>
        <h1>Count:{count}</h1>
        <Button variant='outlined' onClick={()=>increment()}>Increment</Button>
        <Button variant='outlined' onClick={()=>decrement()}>Decrement</Button>
    </div>
  )
}

export default Funcounter