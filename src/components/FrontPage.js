import React from "react";
import "./FrontPage.css";
import FaceValue from "./FaceValue";
import { CardProvider } from "./CardContext";

const FrontPage = () => {
  return (
    <CardProvider>
      <div>
        <div className="container">
          <h1>Memory Game!</h1>
          <h3>Score: </h3>
          <FaceValue/>
        </div>
        <div className="cardsContainer">
        
        </div>
        
      </div>
    </CardProvider>
  );
};

export default FrontPage;
