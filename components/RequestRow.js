import React, { Component } from 'react';
import { Button, Card, Header, Grid, Divider, Statistic, Message } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {
  static async getInitialProps(props) {
    console.log('HII');
    const accounts = await web3.eth.getAccounts();
    const campaign = Campaign(this.props.address);
    const manager = await campaign.methods.manager().call();
    console.log("ACCOUNTS ", accounts);
    return { account: accounts[0], manager: manager }
  }

  onApprove = async () => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    });
  };

  onFinalize = async() => {
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods.finalizeRequest(this.props.id).send({
      from: accounts[0]
    });
  };

  renderButtons(complete) {
    if (complete) {
      return (
        <Message>Request complete</Message>
    );
    } else {
      return (
        <Button.Group size='large'>
          <Button color="green" basic onClick={this.onApprove}>Approve</Button>
          <Button.Or />
          <Button color="red" basic onClick={this.onFinalize}>Finalize</Button>
        </Button.Group>
      );
    }
  }

  render() {
    const { id, request, approversCount, manager } = this.props;
    const readyToFinalize = request.approvalCount > approversCount / 2;

    return (
      <Card fluid raised>
        <Card.Content>
          <Statistic size='mini' floated="right">
            <Statistic.Value>{web3.utils.fromWei(request.value, 'ether')} ETH</Statistic.Value>
            <Statistic.Label>Requested Amount</Statistic.Label>
          </Statistic>
          <Card.Header style={{marginTop: 25}}>{request.briefDescription}</Card.Header>
          <Card.Description>
            <p>{request.detailedDescription}</p>
            <Header as='h5' style={{marginTop: 5}}>Recipient: {request.recipient}</Header>
          </Card.Description>
          <Divider/>
          <Grid columns='two'>
            <Grid.Row>
              <Grid.Column style={{paddingLeft: 40}}>
                <Statistic size='mini'>
                  <Statistic.Value>{request.approvalCount}/{approversCount}</Statistic.Value>
                  <Statistic.Label>Approvals</Statistic.Label>
                </Statistic>
              </Grid.Column>
              <Grid.Column floated="right">
                {this.renderButtons(request.complete)}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );

    //// ID
    //BUTTONS

    // return (
    //   <Row disabled={request.complete} positive={readyToFinalize && !request.complete}>
    //     <Cell>{id}</Cell>
    //     <Cell>{request.briefDescription}</Cell>
    //     <Cell>{request.detailedDescription}</Cell>
    //     <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
    //     <Cell>{request.recipient}</Cell>
    //     <Cell>{request.approvalCount}/{approversCount}</Cell>
    //     <Cell>
          {request.complete ? null : (
            <Button color="green" basic onClick={this.onApprove}>Approve</Button>
          )}
    //     </Cell>
    //     <Cell>
          {request.complete ? null : (
            <Button color="teal" basic onClick={this.onFinalize}>Finalize</Button>
          )}
    //     </Cell>
    //   </Row>
    // );
  }
}

export default RequestRow;
