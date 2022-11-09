const { ethers } = require("hardhat");
async function main() {
  const QuickNode = await ethers.getContractFactory("WebThree");
  const deployedContract = await QuickNode.deploy();
  await deployedContract.deployed();
  console.log("Contract Address:", deployedContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });