import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    //get campaign address from url
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      title: summary[0],
      description: summary[1],
      goal: summary[2],
      minimumContribution: summary[3],
      balance: summary[4],
      requestsCount: summary[5],
      approversCount:summary[6],
      manager: summary[7],
      totalRequestsAmount: [8],
      address: props.query.address
    };
  }

  renderCards() {
    const {
      title,
      description,
      goal,
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount,
      totalRequestsAmount
    } = this.props;

    const items = [
      {
        header: goal,
        meta: 'Fundraising goal',
        description: 'This is the amount the manager hopes to raise for their project',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute at least this much way to become an approver',
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract. Requests must be approved by the approvers'
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already contributed to this campaign'
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description: 'The balance is how much money this campaign has left to spend'
      }
    ];
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>This is where info about a campaign will go</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={11}>
              {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={5}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    )

  }
}

export default CampaignShow;
