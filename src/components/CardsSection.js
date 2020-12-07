import React, { useContext, useState, useEffect} from "react";
import { CardContext } from "./CardContext";
import Card from "./Card";
import "./CardsSection.css";

let CardSection = () => {
  const temp = useContext(CardContext);
  const cardNumber = temp.cardNumber;
  const setCardNumber = temp.setCardNumber;
  const score = temp.score;
  const setScore = temp.setScore;
  const life = temp.life;
  const setLife = temp.setLife;
  const setFaceValue = temp.setFaceValue;
  const faceValue = temp.faceValue;

  const [cardValue, setCardValue] = useState(0);

  const [lost, setLost] = useState(0);

  const [win, setWin] = useState(0);

  function checkSame(e) {
    //if the user has clciked on a card for the first time

    if (cardValue === 0) {
      setCardValue(parseInt(e.target.id));
    }

    //checks if the user has clicked on the card of same value
    else if ((parseInt(e.target.id) === cardValue)) {
      
      let tempArray = cardNumber;

      for (let i = 0; i < cardNumber.length; i++) {

        if (cardNumber[i] === cardValue)
          tempArray[i] = cardValue * 99;
   
        }
      setCardNumber(tempArray);
      

      // let filteredArray = (cardNumber.filter((cards) => cards !== parseInt(cardValue)));
      // setCardNumber(filteredArray);
      setCardValue(0);
      setScore(score + 10);
    }

    //if the user clicks on the wrong card
    else {
      setCardValue(0);
      setLife(life - 1);
    }
  }


  useEffect(() => {
    
    if (life < 1)
      setLost(1);
    
    if (score >= 60) 
      setWin(1);

  }, [life, score]);


  let cardArray = cardNumber.map((value, index) => {
    if (value % 99 === 0) {
      return <div className="blank">{value / 99}</div>;
    } else {
      return (
        <Card id={value} display={faceValue[index]} checkSame={checkSame} />
      );
    }
  });

  //To change the faceValue of cards to blank after "n" seconds of loading the page

  setTimeout(() => {
    setFaceValue(["", "", "", "", "", "", "", "", "", "", "", ""]);
  }, 5000);

  return (
    
    <div>
     {(!win&&!lost) ? <div className="cardsContainer">{cardArray}</div>:null}

      {win ? (
        <div className="win">
          <h2>Congratulation! You Won</h2>
          <h3>Play Again?</h3>
          <div className="btn">
            <button>              
              <a href="/">Yes!</a>
            </button>
          </div>
        </div>
      ):null}
      {lost ? (
        <div className="lost">
          <h3>Try again?</h3>
          <div className="btn">
            <button>
              <a href="/">Yes!</a>
            </button>
          </div>
        </div>
      ):null}
    </div>
  );
};

export default CardSection;
