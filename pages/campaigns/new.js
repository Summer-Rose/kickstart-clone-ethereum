import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message, Icon } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router, Link } from '../../routes';

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
        <Link route={`/`}>
          <a><Icon disabled name='arrow left' />Back</a>
        </Link>
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
          <Form.TextArea
            onChange={event => this.setState({description: event.target.value })}
            value={this.state.description}
            placeholder="Describe your project"
            label="Give us some more information about this project" />
          <Form.Group>
            <Form.Input
              fluid
              width={8}
              type="number"
              action={{labelPosition: 'right', icon: 'ethereum', content: 'ETH'}}
              value={this.state.goal}
              onChange={event =>
                this.setState({goal: event.target.value })}
              placeholder='Goal'
              label="How much Ether are you hoping to raise for your project?" />
          </Form.Group>
          <Form.Group>
            <Form.Input
              fluid
              width={8}
              type="number"
              action={{labelPosition: 'right', icon: 'ethereum', content: 'wei'}}
              value={this.state.minimumContribution}
              onChange={event =>
                this.setState({minimumContribution: event.target.value })}
              placeholder='Minimum contribution'
              label="What minimum contribution are you asking from contributers to gain 'Sponsor' status?"/>
          </Form.Group>
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
