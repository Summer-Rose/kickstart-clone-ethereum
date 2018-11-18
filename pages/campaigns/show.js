import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button, Segment, Header, Container, Progress } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    //get campaign address from url
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    const percent = Math.floor(((summary[4] / web3.utils.toWei(summary[2], 'ether')) * 100));
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
        header: web3.utils.fromWei(balance, 'ether') + ' eth',
        meta: 'Current Amount Funded',
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
        <Segment>
          <Header as='h1'>
            {this.props.title}
          </Header>
          <p>{this.props.description}</p>
          <h5>Project Progress:</h5>
          <Progress style={{marginTop: -5}} percent={this.props.percent} color="teal" progress />
          <Grid columns="two">
            <Grid.Row>
              <Grid.Column>
                <h5 style={{marginBottom: 2}}>This project is managed by:</h5>
                <p>{this.props.manager}</p>
              </Grid.Column>
              <Grid.Column>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                  <a>
                  <Button floated="right" primary>View Requests</Button>
                  </a>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
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
