import React from 'react'
import './App.css';
import FrontPage from "./components/FrontPage"
import { CardProvider } from "./components/CardContext";


function App() {
  return (
    <CardProvider>
    <div className="App">
     <FrontPage/>
    </div>
    </CardProvider>
    
  );
}

export default App;
