import React,{useState} from 'react';
import './Card.css';

let Card = ({faceValue="",id,checkSame}) =>{
     

    return(
        // let y  = x>y?x:y;
        // <div className = 'card' id = {id} onClick={(e) => checkSame(e)}>
        //     {faceValue}
        // </div>
     <div className = 'card' id = {id} onClick={(e) => checkSame(e)}>
          {faceValue}  {id}
         </div> 
     
    )
}

export default Card;