pragma solidity ^0.4.17;

contract Campaign {
  address public manager;
  uint public minimumContribution;
  address[] public approvers;

  function Campaign(uint minimum) public {
    manager = msg.sender;
    minimumContribution = minimum;
  }

  function contribute() public payable {
    require(msg.value > minimumContribution);
    approvers.push(msg.sender);
  }
}
