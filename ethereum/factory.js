import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x28b1FfD3fFe9b71f368B3E8Ac36f7113B4Fd569F'
);

export default instance;
