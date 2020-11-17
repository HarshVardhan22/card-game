import React from 'react';
import './FrontPage.css';
import Card from './Card';

const FrontPage = () => {
    return(
        <div>
            
            <div className="container">
                <h1>Memory Game!</h1>
                <h3>Score: </h3>
                <div className="cardsContainer">
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>    
                  
                </div>
            </div>
        </div>
    );
}

export default FrontPage