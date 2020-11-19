import React,{useContext} from "react";
import {CardContext} from './CardContext';
import "./CardsSection.css";
import CardsSection from "./CardsSection";


const FrontPage = () => {
  const temp = useContext(CardContext);
  // let string  = parseInt(score)
  return (
   
      <div>
        <div className="container">
          <h1>Memory Game!</h1>
          <h3>Score: {temp.score}</h3>
          <h3>Lives Remaining: {temp.life}</h3>
          <CardsSection/>
        </div>       
      </div>
    
  );
};

export default FrontPage;
