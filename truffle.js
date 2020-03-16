const HDWalletProvider = require('truffle-hdwallet-provider');
const dotenv = require('dotenv');
dotenv.config();

const providerFactory4Ethereum = network => new HDWalletProvider(
  process.env.MNEMONICS || '',                                  // Mnemonic of the deployer
  `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`  // Provider URL => web3.HttpProvider
);

module.exports = {
  networks: {
    /**
     * Ethereum Network
     */
    'mainnet': {
      provider: providerFactory4Ethereum('mainnet'),
      network_id: 1,
      gas: 7000000,
      gasPrice: 50000000000 // 100 Gwei, Change this value according to price average of the deployment time
    },
    'ropsten': {
      provider: providerFactory4Ethereum('ropsten'),
      network_id: 3,
      gas: 6000000,
      gasPrice: 50000000000 // 50 Gwei
    },
    'rinkeby': {
      provider: providerFactory4Ethereum('rinkeby'),
      network_id: 4,
      gas: 6000000,
      gasPrice: 50000000000 // 50 Gwei
    }
  },
  compilers: {
    solc: {
      version: "0.4.24",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
  mocha: {
    useColors: true,
    reporter: 'eth-gas-reporter',
    reporterOptions : {
      currency: 'USD',
      gasPrice: 21
    }
  }
};
