import React,{useContext,useState} from 'react';
import {CardContext} from './CardContext';
import Card from './Card'
import "./CardsSection.css"

let CardSection = () =>{

    const temp = useContext(CardContext);
    const cardNumber = temp.cardNumber;
    const setCardNumber = temp.setCardNumber;
    const score = temp.score;
    const setScore = temp.setScore;
    const life = temp.life;
    const setLife = temp.setLife;

    
    const [cardValue,setCardValue] = useState(0);
    const checkSame =(e)=> {   
   
        //if the user has clciked on a card for the first time
    
            if(cardValue===0)
                    setCardValue(parseInt(e.target.id));
                
                
            //checks if the user has clicked on the card of same value   
    
            else if(parseInt(e.target.id) === cardValue){         
                        
                    const  filteredArray = cardNumber.filter(cards => cards!==cardValue);
                    setCardNumber(filteredArray);
                    //setCardArray(cardNumber.map((value)=>(<Card faceValue = "" id = {value} checkSame = {checkSame}/>)))
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

    //let [cardArray,setCardArray] = useState()
   let  cardArray = cardNumber.map((value)=>(<Card faceValue = {value} id = {value} checkSame = {checkSame}/>))
        
      //let vanish ;
    //   clearTimeout(vanish)
    //   vanish =  setTimeout(()=>{
    //         console.log("gayab hu mai");
          
    //         setCardArray(cardNumber.map((value)=>(<Card faceValue = "" id = {value} checkSame = {checkSame}/>)))
    //     },2000);
    
    console.log(cardArray);
    

    return(
        <div className = "cardsContainer">
             {cardArray}          
        </div>
    );
    };

export default CardSection;