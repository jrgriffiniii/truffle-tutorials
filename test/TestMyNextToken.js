const {
  expectEvent,
  singletons,
  constants,
} = require("@openzeppelin/test-helpers");
const { ZERO_ADDRESS } = constants;

const MyNextToken = artifacts.require("MyNextToken");

contract("MyNextToken", function ([_, registryFunder, deployer, operator]) {
  beforeEach(async function () {
    this.erc1820 = await singletons.ERC1820Registry(registryFunder);
    this.token = await MyNextToken.new([operator], { from: deployer });
  });

  it("has a name", async function () {
    assert.equal(
      await this.token.name(),
      "MyNextToken",
      "The name should be MyNextToken"
    );
  });

  it("has a symbol", async function () {
    assert.equal(
      await this.token.symbol(),
      "NULL/MyNextToken",
      "The name should be NULL/MyNextToken"
    );
  });

  it("mints a total supply of 100 tokens", async function () {
    const totalSupply = await this.token.totalSupply();
    assert.equal(
      totalSupply.toString(),
      "100",
      "The total supply of 100 MyNextTokens is minted"
    );
  });

  it("transfers the total supply of tokens to the peer deploying the contract", async function () {
    const deployerBalance = await this.token.balanceOf(deployer);
    assert.equal(
      deployerBalance.toString(),
      "100",
      "The total supply of 100 MyNextTokens is transferred to the contract deployer"
    );
  });

  it("transfers no tokens to the contract operators", async function () {
    const operatorBalance = await this.token.balanceOf(operator);
    assert.equal(
      operatorBalance.toString(),
      "0",
      "No MyNextTokens are transferred to the contract operators"
    );
  });
});
