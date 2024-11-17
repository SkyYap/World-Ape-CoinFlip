const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    worldchain: {
      provider: () =>
        new HDWalletProvider(
          process.env.PRIVATE_KEY,
          process.env.WORLDCHAIN_SEPOLIA_RPC_URL,
        ),
      network_id: 4801, // Replace with Worldchain's network ID
    },
  },
  compilers: {
    solc: {
      version: "0.8.20", // Adjust to your contract's Solidity version
    },
  },
};
