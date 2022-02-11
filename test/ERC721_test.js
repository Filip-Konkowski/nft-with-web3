const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

describe("KryptoBird", function () {
  it("Should min one bird", async function () {
    const KryptoBird = await ethers.getContractFactory("KryptoBird");
    const kryptoBirdContract = await KryptoBird.deploy();
    await kryptoBirdContract.deployed();

    kryptoBirdContract.mint('bird1')
    const totalSupply = await kryptoBirdContract.totalSupply()

    assert.equal(totalSupply, 1)
  });

  it("Should min few birds and check values", async function () {
    const KryptoBird = await ethers.getContractFactory("KryptoBird");
    const kryptoBirdContract = await KryptoBird.deploy();
    await kryptoBirdContract.deployed();

    kryptoBirdContract.mint('bird1')
    kryptoBirdContract.mint('bird2')
    kryptoBirdContract.mint('bird3')

    const totalSupply = await kryptoBirdContract.totalSupply()
    assert.equal(totalSupply, 3)

    const [minter] = await ethers.getSigners()
    const firstOwner = await kryptoBirdContract.ownerOf(1)
    assert.equal(firstOwner, minter.address)
    
    const balance = await kryptoBirdContract.balanceOf(minter.address)
    assert.equal(balance, 3)
  });


});
