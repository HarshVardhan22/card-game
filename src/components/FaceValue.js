import React,{useContext} from 'react';
import {CardContext} from './CardContext';
import Card from './Card'
import "./FrontPage.css"
const FaceValue = () =>{
    const [cardNumber,setCardNumber] = useContext(CardContext);
    return(
        <div className = "cardsContainer">
            {cardNumber.map(value => (<Card faceValue = {value}/>))}
        </div>
    )
}

export default FaceValue;