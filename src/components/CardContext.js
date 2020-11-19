import React, {useState,createContext} from 'react';

export const CardContext = createContext();

export const CardProvider = (props) =>{
    
    let arr = [1,2,3,4,5,6,1,2,3,4,5,6];
    for(let i =0;i<6;i++){
        let random =Math.floor(Math.random()*12);
        let random2 = Math.floor(Math.random()*12);
        while(random===random2)
        random2 = Math.floor(Math.random()*12);
        let temp = arr[random];
        arr[random] = arr[random2];
        arr[random2] = temp;
    }
    const[cardNumber,setCardNumber] = useState(arr);

    const [life,setLife] = useState(3);

    const [score,setScore] = useState(0);

    
    return(
        <CardContext.Provider value={{cardNumber,setCardNumber,life,setLife,score,setScore}}>
            {props.children}
        </CardContext.Provider>
    );
}
