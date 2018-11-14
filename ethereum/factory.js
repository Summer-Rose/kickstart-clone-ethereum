import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x7bbd3eFcce2829247bc4Ceb4a607FD22c4Ff6683'
);

export default instance;
