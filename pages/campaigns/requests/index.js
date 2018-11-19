import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Button, Card, Icon, Header, List } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';
import CampaignDetail from '../../../components/CampaignDetail';
import web3 from '../../../ethereum/web3';

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const approversCount = await campaign.methods.approversCount().call();
    const requestCount = await campaign.methods.getRequestsCount().call();
    const summary = await campaign.methods.getSummary().call();
    const percent = Math.floor(((summary[4] / web3.utils.toWei(summary[2], 'ether')) * 100));
    const requests = await Promise.all(
      Array(parseInt(requestCount)).fill().map((element, index) => {
        return campaign.methods.requests(index).call();
      })
    );

    return {
      address,
      requests,
      requestCount,
      approversCount,
      percent,
      title: summary[0],
      description: summary[1],
      manager: summary[7]
    };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return<RequestRow
        key={index}
        id={index}
        approversCount={this.props.approversCount}
        request={request}
        address={this.props.address}
      />;
    });
  }

  render() {
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/`}>
          <a><Icon disabled name='arrow left' /> Back</a>
        </Link>
        <CampaignDetail
          title={this.props.title}
          description={this.props.description}
          percent={this.props.percent}
          manager={this.props.manager}
          address={this.props.address} />
        <Header as="h2">Spending Requests</Header>
        <List items={[
          'Managers create spending requests to purhcase necessary products and servives to reach their goal.',
          'The amount specified in the request is only sent to the listed recipient if the spending request is approved',
          'Only Sponsors are able to approve spending requests',
          'Managers CANNOT send money to their own account',
          'The request can only be finalized once 51% or more of Sponsors approve the request']} />
        <div style={{marginBottom: 5, marginTop: 25}}>Found {this.props.requestCount} requests.</div>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{marginBottom:10}}>Add Request</Button>
          </a>
        </Link>
        <Card.Group>
          {this.renderRows()}
        </Card.Group>
      </Layout>
    );
  }
}

export default RequestIndex;
