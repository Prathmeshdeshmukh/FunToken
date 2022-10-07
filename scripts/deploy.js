
const hre = require("hardhat");

async function main() {
  

  const FunToken = await hre.ethers.getContractFactory("Lock");
  const funToken = await FunToken.deploy();

  await lock.deployed();

  console.log(
    `funToken with 1 ETH and unlock timestamp ${unlockTime} deployed to ${funToken.address}`
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
