import React, { Component } from 'react';
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
  //NextJs exclusive method -- called when loading code on Next server
  //Ideal place for data loading info that will need to be displayed on the screen
  //static (req. by NextJs) allows Next to run the method without having to render the component
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  render() {
    return <div>{this.props.campaigns[0]}</div>
  }
}

export default CampaignIndex;
