//SDPX-License-Identifier:MIT

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

pragma solidity ^0.8.0;

contract LogicV3 is Initializable, OwnableUpgradeable{
    uint public count;
    
    function initialize(uint _count) public initializer{
        count = _count;
    }

    function add(uint _value) public{
        count += _value;
    }

    function sub(uint _value) public{
        count -= _value;
    }

    function mul(uint _value) public{
        count *= _value;
    }

    function div(uint _value) public{
        count /= _value;
    }
}