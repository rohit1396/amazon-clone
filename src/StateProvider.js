// we need to create a data layer to pass through the components

import React, { createContext, useContext, useReducer } from "react";

// this is the data layer
const StateContext = createContext();

// this is stateProvider
export const StateProvider = ({ reducer, initialstate, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialstate)}>
    {children}
  </StateContext.Provider>
);

// this need to be pass into the components
export const useStateValue = () => useContext(StateContext);
