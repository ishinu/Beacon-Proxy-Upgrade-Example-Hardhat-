const { ethers, upgrades } = require("hardhat");

async function main() {
  const Parlour = await ethers.getContractFactory("Parlour");

  const beacon = await upgrades.deployBeacon(Parlour);
  await beacon.deployed();
  console.log("Beacon deployed to : ", beacon.address);

  const parlour = await upgrades.deployBeaconProxy(beacon, Parlour, [Sweet]);
  await parlour.deployed();
  console.log("Parlour deployed to : ", parlour.address);
}

main();
