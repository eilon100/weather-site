import React, { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [Location, setLocation] = useState("Israel");

  return (
    <StateContext.Provider value={{ Location, setLocation }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
