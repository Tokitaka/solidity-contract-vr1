//Testing Contract by using Mocha
// assertions of code 
import assert from 'assert';
// generate local ethereum network
import pkg from 'ganache';
const { provider } = pkg;
// Web3 constructor function, should be capitalized
import Web3 from 'web3';
// Web3 instance + network provider 
const web3 = new Web3(provider());

let accounts;
beforeEach(async () => { 
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();
    // Use one of those accounts to deploy

});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts);
    });
});