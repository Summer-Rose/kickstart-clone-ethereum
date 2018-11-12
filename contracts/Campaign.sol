pragma solidity ^0.4.17;

contract Campaign {
  struct Request {
    string description;
    uint value;
    address recipient;
    bool complete;
  }

  Request[] public requests;
  address public manager;
  uint public minimumContribution;
  //array search - linear time
  //mapping search - 'constant' time
  //mappings are NOT iterable
  mapping(address => bool) public approvers;

  modifier restricted() {
    require(msg.sender == manager);
    _;
  }

  function Campaign(uint minimum) public {
    manager = msg.sender;
    minimumContribution = minimum;
  }

  function contribute() public payable {
    require(msg.value > minimumContribution);
    approvers[msg.sender] = true;
  }

  function createRequest(string description, uint value, address recipient)
    public restricted {
    //storage keyword - data stored in storage
    //memory keyword - data stored in memory, memory gets dumped everytime function exits
    Request memory newRequest = Request({
      description: description,
      value: value,
      recipient: recipient,
      complete: false
    });

    //alternative struct instantiation -- not recommended:
    //Request(description, value, recipient, false);
    requests.push(newRequest);
  }
}
