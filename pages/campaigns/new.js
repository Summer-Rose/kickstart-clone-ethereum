import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    title: '',
    description: '',
    goal: '',
    minimumContribution: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
      .createCampaign(this.state.title, this.state.description,
        this.state.goal, this.state.minimumContribution)
      .send({
        from: accounts[0]
      });
      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return(
      <Layout>
        <h3>Create a campaign</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>What is your project called?</label>
            <Input
              value={this.state.title}
              placeholder='Project title'
              onChange={event =>
                this.setState({title: event.target.value })} />
          </Form.Field>
          <Form.Field>
            <label>Describe your project</label>
            <Input
              value={this.state.description}
              placeholder='Project description'
              onChange={event =>
                this.setState({description: event.target.value })} />
          </Form.Field>
          <Form.Field>
            <label>How much Ether are you hoping to raise for your project?</label>
            <Input
              value={this.state.goal}
              placeholder='Goal'
              onChange={event =>
                this.setState({goal: event.target.value })}
              label="Ether"
              labelPosition="right"
              type="number"/>
          </Form.Field>
          <Form.Field>
            <label>What's the least amount of money someone can contribute to become one of your Approvers?</label>
            <Input
              value={this.state.minimumContribution}
              placeholder='Minimum contribution to gain approver status'
              onChange={event =>
                this.setState({minimumContribution: event.target.value })}
              label="Wei"
              labelPosition="right"
              type="number"/>
          </Form.Field>
          <Message
            error
            header="Oops!"
            content={this.state.errorMessage}
          />
          <Button
            disabled={this.state.loading}
            loading={this.state.loading} primary>Create</Button>
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
