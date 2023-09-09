// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MyToken.sol";

contract TokenSale {

    address admin;
    MyToken public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;

    event Sell(address _buyer, uint256 _amount);

    constructor(MyToken _tokenContract, uint256 _tokenPrice) {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }
}