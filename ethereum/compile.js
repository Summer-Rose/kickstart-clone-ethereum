const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

//delte build folder
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

//read in Campaign.sol file
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
//read in srouce code from campaignPath
const source = fs.readFileSync(campaignPath, 'utf8');
//use solidity compiler to compile source code for BOTH contracts
const output = solc.compile(source, 1).contracts;
//create build folder
fs.ensureDirSync(buildPath);
//loop through output and write each contract to seperate file inside of build directory
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
