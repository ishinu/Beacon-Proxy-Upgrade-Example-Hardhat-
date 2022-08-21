const { ethers, upgrades } = require("hardhat");

async function main(){
  const Logic = await ethers.getContractFactory("Logic");

  console.log("Deploying Beacon Upgradeable Proxy Pattern...");
  const beacon = await upgrades.deployBeacon(Logic);
  await beacon.deployed();
  console.log("Logic Upgradeable Beacon deployed at : ",beacon.address);

  const logic = await upgrades.deployBeaconProxy(beacon,Logic,[4],{initializer:'initialize'});
  await logic.deployed();
  console.log("Logic Beacon Proxy deployed at : ",logic.address);
  console.log("Logic Contract implementation address is : ",await upgrades.erc1967.getBeaconAddress(logic.address));  
}

main();   