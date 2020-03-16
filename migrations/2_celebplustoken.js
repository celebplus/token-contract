const CelebPlusToken = artifacts.require("./CelebPlusToken.sol");
const CelebPlusCrowdsale = artifacts.require("./CelebPlusCrowdsale.sol");
const CelebPlusAirdrop = artifacts.require("./CelebPlusAirdrop.sol");

const name = "Celeb Plus";
const symbol = "CELEBPLUS";
const decimals = 18;
const initialSupply = 1075000000;

/************* CELEBPLUS Token deployed information ***************/

// Mainnet - Ethereum
// @see https://etherscan.io/token/0x
const CELEBPLUS_TOKEN_ADDRESS_MAINNET = '';

// Rinkeby - Ethereum
// @see https://ropsten.etherscan.io/token/0x
const CELEBPLUS_TOKEN_ADDRESS_ROPSTEN = '';

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
// const rate = 
// const totalSaleCap = 
// const wallet = process.env.FUND_COLLECTOR_ADDRESS;

// Mainnet - Ethereum
// @see https://etherscan.io/0x
// const CELEBPLUS_CROWDSALE_ADDRESS = '';

// Rinkeby - Ethereum
// @see https://ropsten.etherscan.io/0x
// const CELEBPLUS_CROWDSALE_ADDRESS = '';

// Ropsten - Ethereum
// @see https://rinkeby.etherscan.io/0x
// const CELEBPLUS_CROWDSALE_ADDRESS = '';

// Deployer
// const SaleContractDeployer = (deployer, network) => {
//   deployer.deploy(CelebPlusCrowdsale, rate, wallet, getTokenAddress(network), totalSaleCap)
//     .then( _ => console.log(`CELEBPLUS Crowdsale contract has been deployed successfully on ${network}.`));
// };

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
// const AirdropContractDeployer = (deployer, network) => {
//   deployer.deploy(CelebPlusAirdrop, getTokenAddress(network))
//     .then( _ => console.log(`CELEBPLUS Airdrop contract has been deployed successfully on ${network}.`));
// };



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
