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

  // Deploying the tokenSale contract
  async function main() {
    const _tokenPrice = token(0.01);

    const TokenSale = await hre.ethers.getContractFactory("TokenSale");

    const tokenSale = await TokenSale.deploy(token.address, _tokenPrice);

    await tokenSale.deployed();
    console.log(`TokenSale deployed to: ${tokenSale.address}`);
  }
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
