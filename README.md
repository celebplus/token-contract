# token-contract

Token smart contract for Celeb Plus platform

## Deployment - Ethereum
1. First uncomment the deployer function corresponds to the contract you want to deploy and comment out all the others in `migrations/2_celebplustoken.js` file.
2. If the project folder includes `build` folder, first delete it
3. Compile the corresponding contract as follows;
`truffle compile`
4. Make a '.env' file
```
  // Set mnemonic words for deployer
  MNEMONICS=
  // Set your infura project secret key
  INFURA_API_KEY=
```
5. Finally deploy the contract on the network you desire
`NETWORK=<network_name> npm run deploy`

## Test
* In order to run the whole tests
`truffle test`
* In order to run only specific test file