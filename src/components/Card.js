import React from 'react';
import './Card.css';

let Card = ({display,id,checkSame,key}) =>{
       
    return(
       
     <div className = 'card' id = {id} onClick={(e) => checkSame(e)}>
          {display} 
         </div> 
     
    )
}

export default Card;