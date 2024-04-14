// compile code will go here

// path module : generate path to Inbox.sol
const path = require('path');
// fs module : read contents of files
const fs = require('fs');
// solc : solidity compiler
const solc = require('solc');

// 1. generate path
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// 2. read source code 
const source = fs.readFileSync(inboxPath, 'utf8');

console.log(inboxPath);
console.log(source);

// 3. compile source code / numbers of contracts
module.exports = solc.compile(source, 1).contracts[':Inbox'];