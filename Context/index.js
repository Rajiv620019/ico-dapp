import { useState, useEffect, createContext, useContext } from "react";
import { ethers } from "ethers";

import {
  isWalletConnected,
  connectWallet,
  connectingTokenContract,
  getBalance,
  connectingTokenSaleContract,
} from "../Utils/index";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const Token_Ico = "Token Sale Dapp";
  return (
    <StateContext.Provider value={{ Token_Ico }}>
      {" "}
      {children}{" "}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
