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
    
    
   // const [cardArray,setCardArray] = useState(cardNumber.map((value)=>(<Card faceValue = {value} id = {value} checkSame = {checkSame}/>)));
    
    const [cardValue,setCardValue] = useState(0)

    cardArray =  cardNumber.map((value)=>(<Card faceValue = {value} id = {value} checkSame = {checkSame}/>))
    
    // let count  = 0;
    // setInterval((count)=>{
    //     count++;
    //     if(count===3)
    //     setCardArray( cardNumber.map((value)=>(<Card faceValue = {56} id = {value} checkSame = {checkSame}/>)))
    //     console.log(cardArray)
    // }, 1000) ;  


    

    function checkSame(e){    
     
    //if the user has clciked on a card for the first time

        if(cardValue===0)
                setCardValue(parseInt(e.target.id));
            
            
        //checks if the user has clicked on the card of same value   

        else if(parseInt(e.target.id) === cardValue){         
                    
                const  filteredArray = cardNumber.filter(cards => cards!==cardValue);
                setCardNumber(filteredArray);
                
                setCardValue(0);
                setScore(score+10)        

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
        </div>
    );
    };

export default CardSection;