import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button, Segment, Header, Container, Icon, Progress } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';
import CampaignDetail from '../../components/CampaignDetail';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    //get campaign address from url
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    const percent = Math.floor(((summary[4] + summary[9] / web3.utils.toWei(summary[2], 'ether')) * 100));
    return {
      title: summary[0],
      description: summary[1],
      goal: summary[2],
      minimumContribution: summary[3],
      balance: summary[4],
      requestsCount: summary[5],
      approversCount:summary[6],
      manager: summary[7],
      totalRequestsAmount: summary[8],
      totalSpentFunds: summary[9],
      address: props.query.address,
      percent: percent
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
      totalRequestsAmount,
      totalSpentFunds,
      percent
    } = this.props;

    const items = [
      {
        header: goal + ' eth',
        meta: 'Fundraising goal',
        description: 'This is the amount the manager hopes to raise for their project',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: web3.utils.fromWei(totalSpentFunds + balance, 'ether') + ' eth',
        meta: 'Amount Earned',
        description: 'This is how much money this project has raised so far'
      },
      {
        header: web3.utils.fromWei(balance, 'ether') + ' eth',
        meta: 'Current Balance',
        description: 'The balance is how much money this campaign has left to spend'
      },
      {
        header: web3.utils.fromWei(totalSpentFunds, 'ether') + ' eth',
        meta: 'Spent Funds',
        description: 'The balance is how much money this campaign has left to spend'
      },
      {
        header: minimumContribution + ' wei',
        meta: 'Minimum Sponsor Contribution',
        description: 'To gain \'Sponsor\' status you must contribute at least this much',
      },
      {
        header: approversCount,
        meta: 'Number of Sponsors',
        description: 'Number of contributers with \'Sponsor\' status.'
      },
      {
        header: requestsCount,
        meta: 'Number of Spending Requests',
        extra: (
          <Link route={`/campaigns/${this.props.address}/requests`}>
            <a>
            <Button primary>View Requests</Button>
            </a>
          </Link>
        ),
        description: 'A manager can create a request to withdraw money from the contract balance. Requests must be approved by the Sponsors'
      }
    ];
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <Link route="/">
          <a><Icon disabled name='arrow left' /> Back</a>
        </Link>
        <CampaignDetail
          title={this.props.title}
          description={this.props.description}
          percent={this.props.percent}
          manager={this.props.manager}
          address={this.props.address}
          showRequestsButton={true} />
        <Grid>
          <Grid.Row>
            <Grid.Column width={11}>
              {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={5}>
              <Segment>
                <ContributeForm address={this.props.address} minimumContribution={this.props.minimumContribution} />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    )

  }
}

export default CampaignShow;
