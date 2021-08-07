pragma solidity >=0.4.22 <0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MyCoin.sol";

contract TestMyCoin {

  function testInitialBalanceUsingDeployedContract() public {
    address deployed = DeployedAddresses.MyCoin();
    MyCoin newCoin = MyCoin(deployed);

    uint expected = 10000;
    uint balance = newCoin.getBalance(tx.origin);
    Assert.equal(balance, expected, "Owner should have 10000 MetaCoin initially");
  }

  function testInitialBalanceWithNewMetaCoin() public {
    MyCoin newCoin = new MyCoin();

    uint expected = 10000;
    uint balance = newCoin.getBalance(tx.origin);

    Assert.equal(balance, expected, "Owner should have 10000 MetaCoin initially");
  }
}
