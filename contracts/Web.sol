// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract WebThree is ERC721 {
    constructor() ERC721("WebThree", "Awesome") {
        _mint(msg.sender, 1);
    }
}