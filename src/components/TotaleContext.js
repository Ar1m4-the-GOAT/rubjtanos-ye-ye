import React, {useState} from 'react';
export const TotaleContext = React.createContext();
export const IContext = React.createContext();

export function TotaleProvider({children}){
  const [totale, setTotale] = useState(0);
return(
        <TotaleContext.Provider value={{totale, setTotale}} children={children}/>
  );
}