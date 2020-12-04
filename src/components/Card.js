import React,{useContext,useState} from 'react';
import './Card.css';
import {CardContext} from './CardContext';

let Card = ({id,checkSame}) =>{
     const temp = useContext(CardContext)
    const faceValue = temp.faceValue;
    
    return(
       
     <div className = 'card' id = {id} onClick={(e) => checkSame(e)}>
          {faceValue}  {id}
         </div> 
     
    )
}

export default Card;