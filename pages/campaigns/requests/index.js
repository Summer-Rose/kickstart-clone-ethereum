import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Button, Table } from 'semantic-ui-react';
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
        showRequestsButton={false}
      />;
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <CampaignDetail
          title={this.props.title}
          description={this.props.description}
          percent={this.props.percent}
          manager={this.props.manager}
          address={this.props.address} />
        <h3>Request list</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{marginBottom:10}}>Add Request</Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRows()}
          </Body>
        </Table>
        <div>Found {this.props.requestCount} requests.</div>
      </Layout>
    );
  }
}

export default RequestIndex;
