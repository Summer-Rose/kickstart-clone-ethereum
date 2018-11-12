pragma solidity ^0.4.17;

contract CampaignFactory {
  address[] public deployedCampaigns;

  function createCampaign(uint minimum) {
    address newCampaign = new Campaign(minimum, msg.sender);
    deployedCampaigns.push(newCampaign);
  }

  function getDeployedCampaigns() public view returns(address[]) {
    return deployedCampaigns;
  }
}

contract Campaign {
  struct Request {
    string description;
    uint value;
    address recipient;
    bool complete;
    uint approvalCount;
    mapping(address => bool) approvals;
  }

  Request[] public requests;
  address public manager;
  uint public minimumContribution;
  //array search - linear time
  //mapping search - 'constant' time
  //mappings are NOT iterable
  mapping(address => bool) public approvers;
  uint public approversCount;

  modifier restricted() {
    require(msg.sender == manager);
    _;
  }

  function Campaign(uint minimum, address creator) public {
    manager = creator;
    minimumContribution = minimum;
  }

  function contribute() public payable {
    require(msg.value > minimumContribution);
    approvers[msg.sender] = true;
    approversCount++;
  }

  function createRequest(string description, uint value, address recipient)
    public restricted {
    //storage keyword - data stored in storage
    //memory keyword - data stored in memory, memory gets dumped everytime function exits
    Request memory newRequest = Request({
      description: description,
      value: value,
      recipient: recipient,
      complete: false,
      approvalCount: 0
      //mapping is a 'reference' type - we don't need to initialize reference types
      //string, uint, etc. are value types and must be initialized
    });

    //alternative struct instantiation -- not recommended:
    //Request(description, value, recipient, false);
    requests.push(newRequest);
  }

  function approveRequest(uint index) public {
    require(approvers[msg.sender]);
    Request storage request = requests[index];
    require(!request.approvals[msg.sender]);

    request.approvals[msg.sender] = true;
    request.approvalCount++;
  }

  function finalizeRequest(uint index) public restricted {
    Request storage request = requests[index];
    require(!request.complete);
    require(request.approvalCount > (approversCount / 2));
    request.recipient.transfer(request.value);
    request.complete = true;
  }
}
