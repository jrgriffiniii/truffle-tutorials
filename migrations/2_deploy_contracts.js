const ConvertLib = artifacts.require("ConvertLib");
const MyCoin = artifacts.require("MyCoin");
const MyToken = artifacts.require("MyToken");
const MyNextToken = artifacts.require("MyNextToken");

require("@openzeppelin/test-helpers/configure")({ web3 });
const { singletons } = require("@openzeppelin/test-helpers");

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(ConvertLib);
  await deployer.link(ConvertLib, MyCoin);
  await deployer.deploy(MyCoin);

  await deployer.deploy(MyToken);

  const [registryFunder, operator] = accounts;
  await singletons.ERC1820Registry(registryFunder);

  await deployer.deploy(MyNextToken, [operator]);
};
