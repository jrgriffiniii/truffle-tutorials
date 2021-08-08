module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*", // Match any network id
      gas: 5000000,
    },
    test: {
      host: "0.0.0.0",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.6",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
  mocha: {
    reporter: "eth-gas-reporter",
    reporterOptions: {
      excludeContracts: ["Migrations"],
    },
  },
  plugins: ["solidity-coverage"],
};
