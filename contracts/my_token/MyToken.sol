// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "NULL/MyToken") {
        uint256 initialSupply = 21000000;

        _mint(msg.sender, initialSupply);
    }
}
