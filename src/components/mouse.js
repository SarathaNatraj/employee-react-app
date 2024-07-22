import React, { useEffect, useState} from "react";

import { MouseEvent } from 'react';

const Mouse = ({render}) =>{
    const[position,setPosition] = useState({x:0, y:0});

    const handleMouseMove = (event) =>{
        console.log(event.clientX);
        setPosition({x:event.clientX, y:event.clientY});
    }

    useEffect(()=>{
        console.log('useEffect',window);


      //  window.addEventListener('')
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };


        
    },[])

    
    

    return (
        <>
        {render(position)} 
        </>
    )
}

export default Mouse;