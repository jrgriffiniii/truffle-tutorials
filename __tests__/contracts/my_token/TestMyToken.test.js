import { accounts, contract } from "@openzeppelin/test-environment";
import { expectEvent } from "@openzeppelin/test-helpers";
const MyToken = contract.fromArtifact("MyToken");

describe("MyToken", function () {
  const [deployer] = accounts;
  let token;

  beforeEach(async function () {
    token = await MyToken.new({ from: deployer });
  });

  it("mints a total supply of 21000000 tokens", async function () {
    const totalSupply = await token.totalSupply();

    expect(totalSupply.toString()).toEqual("21000000");
  });

  it("transfers the total supply of tokens to the peer deploying the contract", async function () {
    const deployerBalance = await token.balanceOf(deployer);

    expect(deployerBalance.toString()).toEqual("21000000");
  });
});
