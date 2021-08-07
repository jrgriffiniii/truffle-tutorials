# Truffle Contract Demonstrations
A set of demonstration contracts for Ethereum implemented using Solidity and Truffle.

## Development

* Node.js (14.17.4 or the latest LTS Fermium release)
* Yarn (1.22.11 or the latest 1.22.z release)

### Initializing the Development Network

```bash
$ yarn run truffle develop --log
```

### Linting the Source Code Files

```bash
$ yarn lint
```

### Executing the Test Suites

#### Initializing the Test Network

```bash
$ yarn run ganache-cli
```

#### Running the Test Suites

```bash
$ yarn test
```

#### Running only the Truffle Test Suites for Solidity Contracts

```bash
$ yarn test:truffle
```

#### Running only the JavaScript Test Suites

```bash
$ yarn test:jest
```
