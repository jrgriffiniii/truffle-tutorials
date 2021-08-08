import { setupLoader } from "@openzeppelin/contract-loader";

/**
 * This ensures that a custom network can be used for running the test suite
 */
import Web3 from "web3";
const customW3 = new Web3("http://localhost:8545");

/**
 * For the ganache-cli, the default gasPrice is 20000000000, and the default gasLimit is 6721975.
 */
const loader = setupLoader({
  provider: customW3,
  defaultGas: 6000000,
  defaultGasPrice: 20000000000,
});

import { expectEvent, singletons } from "@openzeppelin/test-helpers";
const MyNextToken = loader.truffle.fromArtifact("MyNextToken");

describe("MyNextToken", function () {
  let token;
  let accounts;
  let registryFunder;
  let operator;
  let deployer;

  beforeAll(async () => {
    accounts = await loader.web3.web3.eth.getAccounts();
    [registryFunder, operator, deployer] = accounts;
  });

  beforeEach(async function () {
    const erc1820 = await singletons.ERC1820Registry(registryFunder);

    token = await MyNextToken.new([operator], { from: deployer });
  });

  it("mints a total supply of 100 tokens", async function () {
    const totalSupply = await token.totalSupply();

    expect(totalSupply.toString()).toEqual("100");
  });

  it("transfers the total supply of tokens to the peer deploying the contract", async function () {
    const deployerBalance = await token.balanceOf(deployer);

    expect(deployerBalance.toString()).toEqual("100");
  });

  it("transfers no tokens to the contract operators", async function () {
    const operatorBalance = await token.balanceOf(operator);

    expect(operatorBalance.toString()).toEqual("0");
  });
});
