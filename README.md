## JetPack ![logo](https://github.com/Summer-Rose/kickstart-clone-ethereum/blob/master/images/logo.png)

#### By [Summer Brochtrup](https://www.linkedin.com/in/summerbrochtrup) (2018)

---

### Description

---

JetPack is a clone of the popular crowd sourcing website, 'Kickstarter', but built on the Ethereum Blockchain and deployed to the Rinkeby Test Network. The foundation of this project was created along with the instruction from Udemy's ['Ethereum and Solidity: The Complete Developer's Guide'](https://www.udemy.com/ethereum-and-solidity-the-complete-developers-guide/) course by Stephen Grider. This course dives into the Ethereum world and covers everything from what a blockchain is to how to create, test, and deploy an Ethereum Dapp. I highly recommend it for anyone looking to explore smart contract and dapp development.

After completing the foundational course project I modified the UI and added on a few additional features:

Sponsor Requirements -
*Contributors only gain 'Sponsor' status after contributing the minimum amount specified by the Manager
*Sponsors can only approve a spending request one time
*Sponsors are only added to the Sponsor list on their first qualifying contribution

Manager Limitations -
*Manager cannot spend funds before they are earned

Fund Tracking -
*Track funds earned so far
*Track funds spent via 'Spending Requests'

<img src="https://camo.githubusercontent.com/summer-rose/kickstart-clone-ethereum/master/images/index.png" width="200" />
<img src="https://camo.githubusercontent.com/summer-rose/kickstart-clone-ethereum/master/images/campaign_summary.png" width="200" />
<img src="https://camo.githubusercontent.com/summer-rose/kickstart-clone-ethereum/master/images/requests_list.png" width="200" />
---

### Setup & Requirements

---

To view this project clone this repository:
```
$ cd ~/Desktop
$ git clone https://github.com/Summer-Rose/kickstart-clone-ethereum.git
$ cd kickstart-clone-ethereum/
```
Run the project locally:
```
$ npm run dev
```
Open your web browser and navigate to http://localhost:3000/

*REQUIREMENT:* You must have MetaMask installed in your browser and be logged into an account on the Rinkbey Test Network

Download MetaMask: LINK


---

### Technologies Used
*Solidity
*Web3
*React
*Semantic UI React
*Next.js
*Mocha

---

### License

---

This software is licensed under the MIT license.

Copyright (c) 2016 Summer Brochtrup

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
