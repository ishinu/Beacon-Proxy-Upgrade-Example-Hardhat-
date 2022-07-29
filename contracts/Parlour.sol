// SPDX-License-Identifier: UNLICENSED

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

pragma solidity ^0.8.10;

contract Parlour is Initializable{
    mapping(address=>uint256) public howmany;
    string public parlourName;
    function initialize(string memory _name) public initializer{
        parlourName = _name;
    }

    function buyOne(uint256 _value) public payable{
        howmany[msg.sender] += _value;
    }

    function eatOne() public payable{
        require(howmany[msg.sender]>0,'You would love anyone though they love all from different choices available through buyOne()...');
        howmany[msg.sender] --;
    }
    
}
