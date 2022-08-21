const { ethers,upgrades } = require("hardhat");

var beaconAddress = "0x3af75cEFB043b1aBa25337F976c3cF8AA73CfBfA";

async function main(){
    const LogicV3 = await ethers.getContractFactory("LogicV3");
    
    console.log("Deploying LogicV3...");
    const beacon = await upgrades.upgradeBeacon(beaconAddress,LogicV3);
    await beacon.deployed();
    console.log("LogicV3 Upgradeable Beacon at : ",beacon.address);
    
    console.log("Deploying LogicV3.1 Proxy...");
    const logicv3_1 = await upgrades.deployBeaconProxy(beacon,LogicV3,[1],{initializer:'initialize'});
    await logicv3_1.deployed();
    console.log("Logic V3.1 Beacon Proxy deployed at : ",logicv3_1.address);

    console.log("Deploying LogicV3.2 Proxy...");
    const logicv3_2 = await upgrades.deployBeaconProxy(beacon,LogicV3,[2],{initializer:'initialize'});
    await logicv3_2.deployed();
    console.log("Logic V3.2 Beacon Proxy deployed at : ",logicv3_2.address);

    console.log("Deploying LogicV3.3 Proxy...");
    const logicv3_3 = await upgrades.deployBeaconProxy(beacon,LogicV3,[3],{initializer:'initialize'});
    await logicv3_3.deployed();
    console.log("Logic V3.3 Beacon Proxy deployed at : ",logicv3_3.address);
}

main();