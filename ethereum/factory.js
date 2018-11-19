import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x510EB3D902110082D995A6d2968170E63f8c7827'
);

export default instance;
