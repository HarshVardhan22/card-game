import React from 'react';
import './Card.css';

const Card = ({faceValue}) =>{
    return(
        <div className = 'card'>
            {faceValue}
        </div>
    )
}

export default Card;