import React,{useState} from 'react';
import './Card.css';

const Card = ({faceValue="",id,checkSame}) =>{
    // let toShow = faceValue;
    // setTimeout(()=>{
    // toShow = '';
    // },3000)

    return(
        <div className = 'card' id = {id} onClick={(e) => checkSame(e)}>
            {toShow}
        </div>
    )
}

export default Card;