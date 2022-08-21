const { ethers,upgrades } = require("hardhat");

const beaconAddress = "0x3af75cEFB043b1aBa25337F976c3cF8AA73CfBfA";
const logicAddress = "0xd63dB92f6E51488862f515A437284815B52D1dce";

async function main(){
    const LogicV2 = await ethers.getContractFactory("LogicV2");
    
    console.log("Deploying LogicV2...");
    const beacon = await upgrades.upgradeBeacon(beaconAddress,LogicV2);
    await beacon.deployed();
    console.log("LogicV2 Upgradeable Beacon is deployed at : ",beacon.address);
    const upgraded = LogicV2.attach(logicAddress);
    console.log("Count is : ",await upgraded.count());
}

main();