import React, {useState} from 'react';
export const CarrelloContext = React.createContext();
export const IContext = React.createContext();

export function CarrelloProvider({children}){
  const [shop, setShop] = useState([]);
return(
    <>
    <CarrelloContext.Provider value={{shop, setShop}} children={children}/>
    </>
  );
}