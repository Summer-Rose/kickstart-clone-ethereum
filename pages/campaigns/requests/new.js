import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
  state = {
    briefDescription: '',
    detailedDescription: '',
    value: '',
    recipient: '',
    loading: false,
    errorMessage: ''
  };

  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  onSubmit = async event => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    const { briefDescription, detailedDescription, value, recipient } = this.state;
    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(
        briefDescription,
        detailedDescription,
        web3.utils.toWei(value, 'ether'),
        recipient
      ).send({ from: accounts[0] });
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  }
  render() {
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>Back</a>
        </Link>
        <h3>Create a Request</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>What is this request for?</label>
            <Input
              value={this.state.briefDescription}
              onChange={event => this.setState({ briefDescription: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Give a little more information about this spending request</label>
            <Input
              value={this.state.detailedDescription}
              onChange={event => this.setState({ detailedDescription: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Value in Ether</label>
            <Input
              type="number"
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Recipient</label>
            <Input
              value={this.state.recipient}
              onChange={event => this.setState({ recipient: event.target.value })}
             />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button
            primary
            loading={this.state.loading}
            disabled={this.state.loading}>Submit</Button>
        </Form>
      </Layout>
    )
  }
}

export default RequestNew;
