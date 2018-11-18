import React, { Component } from 'react';
import { Button, Segment, Header, Progress, Grid } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import { Link } from '../routes';

class CampaignDetail extends Component {
  renderShowRequestsButton(show) {
    if (show) {
      return (
        <Grid.Column>
          <Link route={`/campaigns/${this.props.address}/requests`}>
            <a>
              <Button floated="right" primary>View Requests</Button>
            </a>
          </Link>
        </Grid.Column>
      );
    } else {
      return;
    }
  }

  render() {
    const { title, description, percent, manager, address, showRequestsButton } = this.props;
    return (
      <Segment>
        <Header as='h1'>
          {title}
        </Header>
        <p>{description}</p>
        <h5>Project Progress:</h5>
        <Progress style={{marginTop: -5}} percent={percent} color="teal" progress />
        <Grid columns="two">
          <Grid.Row>
            <Grid.Column>
              <h5 style={{marginBottom: 2}}>This project is managed by:</h5>
              <p>{manager}</p>
            </Grid.Column>
            {this.renderShowRequestsButton(showRequestsButton)}
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default CampaignDetail;
