// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SmartWallet {
    address public owner;

    event Deposit(address indexed sender, uint amount);
    event Transfer(address indexed recipient, uint amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function deposit() public payable {
        emit Deposit(msg.sender, msg.value);
    }

    function transfer(address payable _to, uint _amount) public onlyOwner {
        require(address(this).balance >= _amount, "Insufficient balance");
        _to.transfer(_amount);
        emit Transfer(_to, _amount);
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}
