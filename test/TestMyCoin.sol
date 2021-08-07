// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/my_coin/MyCoin.sol";

contract TestMyCoin {
    function testInitialBalanceUsingDeployedContract() public {
        address deployed = DeployedAddresses.MyCoin();
        MyCoin newCoin = MyCoin(deployed);

        uint256 expected = 10000;
        uint256 balance = newCoin.getBalance(tx.origin);
        Assert.equal(
            balance,
            expected,
            "Owner should have 10000 MetaCoin initially"
        );
    }

    function testInitialBalanceWithNewMetaCoin() public {
        MyCoin newCoin = new MyCoin();

        uint256 expected = 10000;
        uint256 balance = newCoin.getBalance(tx.origin);

        Assert.equal(
            balance,
            expected,
            "Owner should have 10000 MetaCoin initially"
        );
    }
}
