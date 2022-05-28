# contracts-api

[![Heroku Deploy](https://github.com/kimanikelly/contracts-api/actions/workflows/heroku-deploy.yml/badge.svg)](https://github.com/kimanikelly/contracts-api/actions/workflows/heroku-deploy.yml) [![Node.js CI](https://github.com/kimanikelly/contracts-api/actions/workflows/node.js.yml/badge.svg)](https://github.com/kimanikelly/contracts-api/actions/workflows/node.js.yml)

## Summary

The goal of this API was to bring modularity to the existing codebase and improve scalability between [contracts](https://github.com/kimanikelly/contracts), [@kimanikelly/core-contracts](https://www.npmjs.com/package/@kimanikelly/core-contracts), and future projects by returning the addresses, ABI, and Bytecode of the[Smart Contracts](https://github.com/kimanikelly/contracts/tree/main/contracts).

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

to begin the unit tests for `http://localhost:3001/tokenContract` and `http://localhost:3001/ttBank` .

## Examples

- [JavaScript GET Request](docs/javascript.md)

- [Python GET Request](docs/python.md)

- [Golang GET Request](docs/golang.md)
