import React from 'react';
import './Card.css';

const Card = ({faceValue,id,checkSame}) =>{

    
    return(
        <div className = 'card' id = {id} onClick={(e) => checkSame(e)} >
            {faceValue}
        </div>
    )
}

export default Card;