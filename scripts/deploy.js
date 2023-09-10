const hre = require("hardhat");

// Deploying the token contract
const token = (nToken) => {
  return ethers.utils.parsedUnits(nToken.toString(), "ether");

  async function main() {
    const _initialSupply = token(500000000);

    const Token = await hre.ethers.getContractFactory("Token");

    const token = await Token.deploy(_initialSupply);

    await token.deployed();
    console.log(`Token deployed to: ${token.address}`);
  }
};
