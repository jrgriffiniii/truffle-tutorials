// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "../ConvertLib.sol";

contract MyCoin {
    mapping(address => uint256) balances;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor() {
        balances[tx.origin] = 10000;
    }

    function sendCoin(address receiver, uint256 amount)
        public
        returns (bool sufficient)
    {
        if (balances[msg.sender] < amount) return false;

        balances[msg.sender] -= amount;
        balances[receiver] += amount;

        emit Transfer(msg.sender, receiver, amount);

        return true;
    }

    function getBalance(address addr) public view returns (uint256) {
        return balances[addr];
    }

    function getBalanceInEth(address addr) public view returns (uint256) {
        uint256 currentBalance = getBalance(addr);

        return ConvertLib.convert(currentBalance, 2);
    }
}
