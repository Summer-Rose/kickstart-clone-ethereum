import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3959f1dbc3cB2958378964916bD75EA55C29eAC6'
);

export default instance;
