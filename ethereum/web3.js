import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //Running in the browser with metamask
  web3 = new Web3(window.web3.currentProvider);
} else {
  //Running on the server OR on a browser WITHOUT metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/dd28ee51497f4c66a1653b71189273c0'
  );
  web3 = new Web3(provider);
}

export default web3;
