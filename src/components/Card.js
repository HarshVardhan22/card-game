import React,{useContext,useState} from 'react';
import './Card.css';
import {CardContext} from './CardContext';

let Card = ({faceValue="",id,checkSame}) =>{
     const temp = useContext(CardContext)
    const vanish = temp.vanish;
    
    return(
       
     <div className = 'card' id = {id} onClick={(e) => checkSame(e)}>
          {vanish}  {id}
         </div> 
     
    )
}

export default Card;