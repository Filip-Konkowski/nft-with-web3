const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("KryptoBird", function () {
  it("Should return the new greeting once it's changed", async function () {
    const KryptoBird = await ethers.getContractFactory("KryptoBird");
    const kryptoBird = await KryptoBird.deploy();
    await kryptoBird.deployed();

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await kryptoBird.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await erc721Enumerable.greet()).to.equal("Hola, mundo!");
  });
});
