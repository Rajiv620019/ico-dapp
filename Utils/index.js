import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {
  MY_TOKEN_ADDRESS,
  MY_TOKEN_ABI,
  TOKEN_SALE_ADDRESS,
  TOKEN_SALE_ABI,
} from "../Context/constants";

// Check is wallet is connected
export const isWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Wallet not found");

    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    const firstAccount = accounts[0];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

// Connect Wallet
export const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("Wallet not found");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const firstAccount = accounts[0];
    window.location.reload();
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};
