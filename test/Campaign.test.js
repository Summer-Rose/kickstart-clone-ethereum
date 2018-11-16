const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async() => {
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '2500000' });
  await factory.methods.createCampaign('Title', 'Description','1000000', '100')
    .send({ from: accounts[0], gas: '2500000' });
   //[] notation sets campaignAddress to the first item in the returned array
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress //adding address returns already deployed contract
  );
});

describe('Campaigns', () => {
  it('deploys a factory and a campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });

  it('marks caller as the campaign manager', async() => {
    const manager = await campaign.methods.manager().call();
    assert.equal(accounts[0], manager);
  });

  it('adds approvers to list when they contribute any amount equal to or exceeding the minimumContribution', async() => {
    await campaign.methods.contribute().send( {
      value: '200',
      from: accounts[1]
    });
    const isContributer = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributer);
  });

  it('does not add approvers to list when they contribute any amount less than the minimumContribution', async() => {
    await campaign.methods.contribute().send( {
      value: '10',
      from: accounts[1]
    });
    const isContributer = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributer == false);
  });

  it('only adds approvers address to list on first qualifying contribution', async() => {
    const approverCountBefore = await campaign.methods.approversCount().call();
    await campaign.methods.contribute().send( {
      value: '200',
      from: accounts[1]
    });
    const approverCountBetween = await campaign.methods.approversCount().call();
    await campaign.methods.contribute().send( {
      value: '200',
      from: accounts[1]
    });
    const approverCountAfter = await campaign.methods.approversCount().call();
    assert(approverCountBefore < approverCountAfter);
    assert(approverCountBetween == approverCountAfter);
  });

  it('requires a contribution above 0 wei', async() => {
    try {
      await campaign.methods.contribute().send({
        value: '0',
        from: accounts[1]
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('allows a manager to make a payment request', async () => {
    await campaign.methods.contribute().send( {
      value: 250,
      from: accounts[1]
    });
    await campaign.methods
      .createRequest('Buy batteries', 'More information about request', 200, accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    const request = await campaign.methods.requests(0).call();
    assert.equal('Buy batteries', request.briefDescription);
  });

  it('allows a manger to make a payment request with a value less than or equal to balance minus value amount of all existing requests', async () => {
    await campaign.methods.contribute().send( {
      value: '250',
      from: accounts[1]
    });
    const desiredRequestValue = '200';
    const balance = await web3.eth.getBalance(campaign.options.address);
    const totalRequestsAmountBefore = await campaign.methods.totalRequestsAmount().call();
    assert(balance >= totalRequestsAmountBefore + desiredRequestValue);
    await campaign.methods
      .createRequest('Buy batteries', 'More information about request', desiredRequestValue, accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    const totalRequestsAmountAfter = await campaign.methods.totalRequestsAmount().call();
    assert(totalRequestsAmountAfter == parseInt(totalRequestsAmountBefore) + parseInt(desiredRequestValue));
    assert(balance - parseInt(totalRequestsAmountAfter) >= 0)

  });

  it('does not allow a manger to make a payment request if desired value is greater than the remaining balance', async () => {
    await campaign.methods.contribute().send( {
      value: '250',
      from: accounts[1]
    });
    const desiredRequestValue = '500';
    const balance = await web3.eth.getBalance(campaign.options.address);
    assert(desiredRequestValue >= balance);
    try {
      await campaign.methods
      .createRequest('Buy batteries', 'More information about request', desiredRequestValue, accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('does not allow a manger to make a payment request if contract balance is zero', async () => {
    try {
      await campaign.methods
      .createRequest('Buy batteries', 'More information about request', desiredRequestValue, accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('does not allow a manger to add thier own address as the recipient of a payment request', async () => {
    try {
      await campaign.methods
      .createRequest('Buy batteries', 'More information about request', desiredRequestValue, accounts[1])
      .send({
        from: accounts[1],
        gas: '1000000'
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('processes requests', async() => {
    const balanceBefore = parseFloat(web3.utils.fromWei(await web3.eth.getBalance(accounts[1]), 'ether'));
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });
    await campaign.methods
      .createRequest('Buy batteries', 'More information about request', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });
    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });
    const balanceAfter = parseFloat(web3.utils.fromWei(await web3.eth.getBalance(accounts[1]), 'ether'));
    assert(balanceAfter > balanceBefore);
  });

  it('allows only users on the approvers list to approve a spending request', async () => {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: web3.utils.toWei('10', 'ether')
    });
    await campaign.methods
      .createRequest('Buy batteries', 'More information about request', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    const isContributer = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributer);
    const requestBefore = await campaign.methods.requests(0).call();
    const approvalCountBefore = requestBefore.approvalCount;
    await campaign.methods.approveRequest(0).send({
      from: accounts[1],
      gas: '1000000'
    });
    const requestAfter = await campaign.methods.requests(0).call();
    const approvalCountAfter = requestAfter.approvalCount;
    assert(approvalCountAfter > approvalCountBefore);
  });

  it('does not approve requests if sender is not on the approvers list', async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });
    await campaign.methods
      .createRequest('Buy batteries', 'More information about request', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    try {
      await campaign.methods.approveRequest(0).send({
        from: accounts[1],
        gas: '1000000'
      });
      assert(false);
    } catch(err) {
      assert(err);
    }
  });

  it('does not allow an approver to approve multiple times', async () => {
    await campaign.methods.contribute().send({
      from: accounts[1],
      value: web3.utils.toWei('10', 'ether')
    });
    await campaign.methods
      .createRequest('Buy batteries', 'More information about request', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    const isContributer = await campaign.methods.approvers(accounts[1]).call();
    assert(isContributer);
    await campaign.methods.approveRequest(0).send({
      from: accounts[1],
      gas: '1000000'
    });
    try {
      await campaign.methods.approveRequest(0).send({
        from: accounts[1],
        gas: '1000000'
      });
      assert(false);
    } catch(err) {
      assert(err);
    }
  });

  it('does not allow a manager to finalize an already completed request', async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });
    await campaign.methods
      .createRequest('Buy batteries', 'More information about request', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });
    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });
    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: '1000000'
    });
    try {
      await campaign.methods.finalizeRequest(0).send({
        from: accounts[0],
        gas: '1000000'
      });
      assert(false);
    } catch(err) {
      assert(err);
    }
  });
});
