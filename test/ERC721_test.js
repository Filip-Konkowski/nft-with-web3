const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("KryptoBird", function () {
  it("Should return the new greeting once it's changed", async function () {
    const ERC721 = await ethers.getContractFactory("ERC721");
    const erc721 = await ERC721.deploy();
    await erc721.deployed();

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await kryptoBird.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await erc721Enumerable.greet()).to.equal("Hola, mundo!");
  });
});
