//Testing Contract by using Mocha
// assertions of code 
const assert = require('assert');
// generate local ethereum network
const ganache = require('ganache');
// Web3 constructor function, should be capitalized
const { Web3 } = require('web3');
// Web3 instance + network provider 
const web3 = new Web3(ganache.provider());
// import compiled code
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
beforeEach(async () => { 
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    // Use one of those accounts to deploy
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi im initial message'] })
    .send({ from: accounts[0], gas: '10000000' })
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    });
});