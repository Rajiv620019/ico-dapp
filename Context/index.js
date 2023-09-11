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
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [nativeTokenBalance, setNativeTokenBalance] = useState("");
  const [tokenHolders, setTokenHolders] = useState([]);
  const [tokenSale, setTokenSale] = useState("");
  const [currentHolder, setCurrentHolder] = useState("");

  // Fetch initial data
  const fetchInitialData = async () => {
    try {
      // Check if wallet is connected and get address
      const account = await isWalletConnected();

      // Get balance of connected wallet
      const balance = await getBalance();
      setBalance(ethers.utils.formatEther(balance.toString()));
      setAddress(account);
    } catch (error) {
      console.log(error);
    }
  };

  const Token_Ico = "Token Sale Dapp";
  return (
    <StateContext.Provider value={{ Token_Ico }}>
      {" "}
      {children}{" "}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
