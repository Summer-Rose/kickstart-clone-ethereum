import React, { Component } from 'react';
import factory from '../ethereum/factory';
import { Card, Button, Icon, Header, Progress, Container } from 'semantic-ui-react';
import Layout from '../components/Layout';
import { Link } from '../routes';
import Campaign from '../ethereum/campaign';

class CampaignIndex extends Component {
  //NextJs exclusive method -- called when loading code on Next server
  //Ideal place for data loading info that will need to be displayed on the screen
  //static (req. by NextJs) allows Next to run the method without having to render the component
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    const summaries = await Promise.all(
      campaigns.map(address => {
        const campaign = Campaign(address);
        return campaign.methods.getSummary().call();
      })
    );
    return { campaigns, summaries };
  }

  renderCampaigns() {
    const items = this.props.summaries.map((summary, index) => {
      const address = this.props.campaigns[index];
      return {
        header: (
         <Link route={`/campaigns/${address}`}>
            <a><h3>{summary[0]}</h3></a>
         </Link>
        ),
        description: (
          <Container>
            <div>
            <Progress style={{marginTop: 10}} value={summary[4]} total={summary[2]} progress='percent' color="teal" />
            <p style={{marginTop: -25}}>{summary[1]}</p>
            </div>
          </Container>
        ),
        meta: (
          <Container>
            <p>Goal: {summary[2]} ETH<Icon name='ethereum'/></p>
          </Container>
        ),
        extra: (
          <Link route={`/campaigns/${address}`}>
             <a>
              <Icon name='info circle' />
              Learn more
             </a>
          </Link>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <Header as='h2' icon textAlign='center' style={{marginTop: 50, marginBottom: 20}}>
            <Icon name='idea' circular/>
            <Header.Content>Current Projects</Header.Content>
          </Header>
          <Link route="/campaigns/new">
            <a>
              <Button
                style={{marginLeft: 20}}
                floated="right"
                primary>
                <Icon name='add'/>
                Start Project
              </Button>
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
