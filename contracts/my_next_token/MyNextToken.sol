// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract MyNextToken is ERC777 {
    /**
     * For cases where empty addresses are passed, the following could be used instead:
     *     constructor() ERC777("MyNextToken", "NULL/MyNextToken", new address[](0)) {
     */
    constructor(address[] memory defaultOperators)
        ERC777("MyNextToken", "NULL/MyNextToken", defaultOperators)
    {
        _mint(msg.sender, 100, "", "");
    }

    /**
     * Mints a mining reward for peers mining this token.
     * (To be implemented)
     */
    function _mintMinerReward() internal {
        require(
            block.coinbase != address(0),
            "NULL/MyNextToken: mint to the zero address"
        );

        _mint(block.coinbase, 1, "", "");
    }

    /**
     * Implements the {ERC777-_beforeTokenTransfer} hook.
     * (To be implemented)
     */
    function _beforeTokenTransfer(
        address operator,
        address from,
        address to,
        uint256 value
    ) internal override {
        super._beforeTokenTransfer(operator, from, to, value);

        if (from != address(0)) {
            _mintMinerReward();
        }
    }
}
