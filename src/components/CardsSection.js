import React,{useContext,useState} from 'react';
import {CardContext} from './CardContext';
import Card from './Card'
import "./CardsSection.css"

const CardSection = () =>{

    const temp = useContext(CardContext);
    const cardNumber = temp.cardNumber;
    const setCardNumber = temp.setCardNumber;
    const score = temp.score;
    const setScore = temp.setScore;
    const life = temp.life;
    const setLife = temp.setLife;
    
    const cardArray = cardNumber.map((value)=>(<Card faceValue = {value} checkSame = {checkSame}/>))

    // console.log(cardArray[0].props.faceValue)
    // console.log(cardArray)
 
    
    

    const [cardValue,setCardValue] = useState(0)

    function checkSame(e){    
     
    //if the user has clciked on a card for the first time
       if(cardValue===0){ 
            setCardValue(parseInt(e.target.innerHTML));
            // console.log(cardValue);       
        }
    //checks if the user has clicked on the card of same value    
       else if(parseInt(e.target.innerHTML) === cardValue){         
                
                const  filteredArray = cardNumber.filter(cards => cards!==cardValue);
                setCardNumber(filteredArray);
                setCardValue(0);
                setScore(score+10)
                // e.target.classList.remove("card");
                // e.target.classList.add("sameCard");

            }
    //if the user clicks on the wrong card
       else{
            setCardValue(0);
            setLife(life-1);
            if(life<=1)
            alert('You lost! Want to restart');
        }  
    }

    

    return(
        <div className = "cardsContainer">
        {cardArray}
            {/* <Card faceValue = {cardNumber[0]} id = {0} checkSame={checkSame}/>
            <Card faceValue = {cardNumber[1]} id = {1} checkSame={checkSame}/>
            <Card faceValue = {cardNumber[2]} id = {2} checkSame={checkSame}/>
            <Card faceValue = {cardNumber[3]} id = {3} checkSame={checkSame}/>
            <Card faceValue = {cardNumber[4]} id = {4} checkSame={checkSame}/>
            <Card faceValue = {cardNumber[5]} id = {5} checkSame={checkSame}/>
            <Card faceValue = {cardNumber[6]} id = {6} checkSame={checkSame}/>
            <Card faceValue = {cardNumber[7]} id = {7} checkSame={checkSame}/>
            <Card faceValue = {cardNumber[8]} id = {8} checkSame={checkSame}/>
            <Card faceValue = {cardNumber[9]} id = {9} checkSame={checkSame}/>
            <Card faceValue = {cardNumber[10]} id = {10} checkSame={checkSame}/>
            <Card faceValue = {cardNumber[11]} id = {11} checkSame={checkSame}/> */}

        </div>
    );
    };
export default CardSection;