import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x2468336ff077b641Ef3fB87B9c881550d0Ea9199'
);

export default instance;
