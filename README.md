# contracts-api

## Summary

The goal of this API was to bring modularity to the existing codebase and improve scalability between [contracts](https://github.com/kimanikelly/contracts), [@kimanikelly/core-contracts](https://www.npmjs.com/package/@kimanikelly/core-contracts), and future projects by returning the addresses, ABI, and Bytecode of [Token.sol](https://github.com/kimanikelly/contracts/blob/main/contracts/Token.sol) through the [TypeChain Bindings](https://github.com/kimanikelly/contracts/blob/main/typechain/factories/Token__factory.ts).

## Installation

```
https://github.com/kimanikelly/contracts-api.git
```

## Install Dependencies

```
npm i
```

## Testing

Open one terminal and run the command

```
npm start
```

to start the local Express server on port 3001.

Open another terminal and run the command

```
npm test
```

to begin the unit tests for `http://localhost:3001/tokenContract`.

## Examples

- [API Response](docs/response.png)

- [JavaScript GET Request](docs/javascript.md)

- [Python GET Request](docs/python.md)

- [Golang GET Request](docs/golang.md)
