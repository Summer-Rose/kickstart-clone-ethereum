pragma solidity >=0.4.22 <0.6.0;

contract CampaignFactory {
  address[] public deployedCampaigns;

  function createCampaign(string title, string description, uint goal, uint minimum) public {
    address newCampaign = new Campaign(title, description, goal, minimum, msg.sender);
    deployedCampaigns.push(newCampaign);
  }

  function getDeployedCampaigns() public view returns(address[]) {
    return deployedCampaigns;
  }
}

contract Campaign {
  struct Request {
    string briefDescription;
    string detailedDescription;
    uint value;
    address recipient;
    bool complete;
    uint approvalCount;
    mapping(address => bool) approvals;
  }

  Request[] public requests;
  address public manager;
  string public title;
  string public description;
  uint public goal;
  uint public minimumContribution;
  uint public totalRequestsAmount;
  //array search - linear time
  //mapping search - 'constant' time
  //mappings are NOT iterable
  mapping(address => bool) public approvers;
  uint public approversCount;

  modifier restricted() {
    require(msg.sender == manager, "You must be the project manager to perform this action.");
    _;
  }

  constructor(string enteredTitle, string enteredDescription,
    uint enteredGoal, uint minimum, address creator) public {
    manager = creator;
    minimumContribution = minimum;
    title = enteredTitle;
    description = enteredDescription;
    goal = enteredGoal;
    totalRequestsAmount = 0;
  }

  function contribute() public payable {
    require(msg.value > 0, "You must send more than 0 Ether to contribute!");
    if (msg.value >= minimumContribution && !approvers[msg.sender]) {
      approvers[msg.sender] = true;
      approversCount++;
    }
  }

  function createRequest(string briefDescription, string detailedDescription, uint value, address recipient)
    public restricted {
      require(address(this).balance > 0, "Not enough funds");
      require(totalRequestsAmount + value <= address(this).balance, "Not enough funds");
      require(recipient != manager, "You cannot be the recipient");
      totalRequestsAmount += value;
    //storage keyword - data stored in storage
    //memory keyword - data stored in memory, memory gets dumped everytime function exits
    Request memory newRequest = Request({
      briefDescription: briefDescription,
      detailedDescription: detailedDescription,
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
    require(approvers[msg.sender], "You are not elligible to approve");
    Request storage request = requests[index];
    require(!request.approvals[msg.sender], "You have already approved this request.");

    request.approvals[msg.sender] = true;
    request.approvalCount++;
  }

  function finalizeRequest(uint index) public restricted {
    Request storage request = requests[index];
    require(!request.complete, "This request is already completed.");
    require(request.approvalCount > (approversCount / 2), "Not enough people have approved this request yet.");
    request.recipient.transfer(request.value);
    request.complete = true;
    totalRequestsAmount -= request.value;
  }

  function getSummary() public view returns (
    string, string, uint, uint, uint, uint, uint, address, uint
  ) {
    return  (
      title,
      description,
      goal,
      minimumContribution,
      address(this).balance,
      requests.length,
      approversCount,
      manager,
      totalRequestsAmount
    );
  }

  function getRequestsCount() public view returns (uint) {
    return requests.length;
  }
}
