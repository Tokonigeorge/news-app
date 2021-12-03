import React, { createContext, useReducer, useContext } from "react";

export const DataContextUse = createContext();

export const DataContext = ({ reducer, initialState, children }) => {
  return (
    <DataContextUse.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContextUse.Provider>
  );
};

export const useDataContextVal = () => useContext(DataContextUse);
