import React, { Component } from 'react';
import { Form, Input, Message, Button, Container } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });
      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: ''})
  }

  render() {
    return (
      <Container>
        <h2>Ready to contribute to this project?</h2>
        <p>You can pledge any amount you want, but in order to become a sponsor you must donate the minimum contribution specified by the manager. Remember, only sponsors are allowed to approve spending requests.</p>
        <h5>To gain 'Sponsor' status on this project contriubte {this.props.minimumContribution} wei ({web3.utils.fromWei(this.props.minimumContribution, 'ether')} ETH)</h5>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>I'd like to Contribute:</label>
            <Input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
              label="ether"
              type="number"
              labelPosition="right"/>
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button
            primary
            disabled={this.state.loading}
            loading={this.state.loading}>Contribute</Button>
        </Form>
      </Container>
    )
  }
}

export default ContributeForm;
