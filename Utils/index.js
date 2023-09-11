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
    if (!window.ethereum) return console.log("Wallet not connected");
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

// MyToken contract
const fetchTokenContract = (signerOrProvider) =>
  new ethers.Contract(MY_TOKEN_ADDRESS, MY_TOKEN_ABI, signerOrProvider);

export const connectingTokenContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchTokenContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

// Get balance
export const getBalance = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    return signer.getBalance();
  } catch (error) {
    console.log(error);
  }
};

// Token Sale contract
const fetchTokenSaleContract = (signerOrProvider) =>
  new ethers.Contract(TOKEN_SALE_ADDRESS, TOKEN_SALE_ABI, signerOrProvider);

export const connectingTokenSaleContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchTokenSaleContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};
