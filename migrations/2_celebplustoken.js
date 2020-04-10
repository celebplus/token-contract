const CelebPlusToken = artifacts.require("./CelebPlusToken.sol");
const CelebPlusCrowdsale = artifacts.require("./CelebPlusCrowdsale.sol");
const CelebPlusAirdrop = artifacts.require("./CelebPlusAirdrop.sol");

const dotenv = require('dotenv');
dotenv.config();

const name = "Celeb Plus";
const symbol = "CELEB";
const decimals = 18;
const initialSupply = 1000000000;

/************* CELEBPLUS Token deployed information ***************/

// Mainnet - Ethereum
// @see https://etherscan.io/token/0x
const CELEBPLUS_TOKEN_ADDRESS_MAINNET = '';

// Rinkeby - Ethereum
// @see https://ropsten.etherscan.io/token/0x
const CELEBPLUS_TOKEN_ADDRESS_ROPSTEN = '0x2720503fb77BcDeA88Ef4A0D535565720742C2E7';

// Ropsten - Ethereum
// @see https://rinkeby.etherscan.io/token/0x
const CELEBPLUS_TOKEN_ADDRESS_RINKEBY = '';


// Deployer
const TokenContractDeployer = (deployer, network) => {
  if (network === 'ropsten' || network === 'rinkeby' || network === 'mainnet') {                                              
    deployer.deploy(CelebPlusToken, name, symbol, decimals, initialSupply)
      .then( _ => console.log('CELEBPLUS Token contract has been deployed successfully.'));
  } else {
    throw new Error('Unknown network!');
  }
};

/*************************************************************/


/************* CELEBPLUS Crowdsale deployed information ***************/

// TODO: Change this parameters in mainnet deployment
const rate = 10000  // 1 ETH = 10,000.9375 token
const totalSaleCap = 1000 * Math.pow(10, 18); // 1000.36463 ETH
const wallet = process.env.FUND_COLLECTOR_ADDRESS;

// Deployer
const SaleContractDeployer = (deployer, network) => {
  deployer.deploy(CelebPlusCrowdsale, rate, wallet, getTokenAddress(network), totalSaleCap)
    .then( _ => console.log(`CELEBPLUS Crowdsale contract has been deployed successfully on ${network}.`));
};

function getTokenAddress(network) {
  switch (network) {
    case 'mainnet':
      return CELEBPLUS_TOKEN_ADDRESS_MAINNET;
    case 'ropsten':
      return CELEBPLUS_TOKEN_ADDRESS_ROPSTEN;
    case 'rinkeby':
      return CELEBPLUS_TOKEN_ADDRESS_RINKEBY;
    default:
      throw new Error('Unknown network!');
  }
}


/************* CELEBPLUS Airdrop deployed information ***************/

// Deployer
const AirdropContractDeployer = (deployer, network) => {
  deployer.deploy(CelebPlusAirdrop, getTokenAddress(network))
    .then( _ => console.log(`CELEBPLUS Airdrop contract has been deployed successfully on ${network}.`));
};



/*****************************************************************/

module.exports = (deployer, network) => {
  /**
   * Token contract deploy.
   */
  TokenContractDeployer(deployer, network);

  /**
   * Sale contract deploy.
   */
  // SaleContractDeployer(deployer, network);

  /**
   * Sale contract deploy.
   */
  // AirdropContractDeployer(deployer, network);
}
