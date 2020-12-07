import React,{useContext} from "react";
import {CardContext} from './CardContext';
import "./CardsSection.css";
import CardsSection from "./CardsSection";


const FrontPage = () => {
  const temp = useContext(CardContext);
 
  return (
      
      <div>
        <div className="container">
          <h1>Memory Game!</h1>
          <h2>Score: {temp.score}</h2>
          <h2>Lives Remaining: {temp.life}</h2>
          <CardsSection/>
        </div>       
      </div>
    
  );
};

export default FrontPage;
 