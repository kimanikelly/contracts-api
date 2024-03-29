// Imports the Typechain bindings for Token.sol
import { Token__factory, TTBank__factory } from "@kimanikelly/core-contracts";

// Imports the Rinkeby addresses for Token.sol and TTBank.sol
import rinkebyAddress from "@kimanikelly/core-contracts/dist/addresses/4.json";

import goerliAddress from "@kimanikelly/core-contracts/dist/addresses/5.json";
("");

// Imports Express
import express from "express";

// Initializes Express
const app = express();

// Defines the port the Express server will serve on
const port = process.env.PORT || 3001;

// The home endpoint returns the endpoints for /token and /ttBank
app.get("/", (req, res) => {
  res.status(200).json({
    tokenEndpoint: "/token",
    ttBankEndpoint: "/ttBank",
  });
});

// GET request to return the address, abi, and bytecode of Token.sol
app.get("/token", (req, res) => {
  res.status(200).json({
    addresses: {
      rinkeby: rinkebyAddress.token,
      goerli: goerliAddress.token,
    },
    abi: Token__factory.abi,
    bytecode: Token__factory.bytecode,
  });
});

// GET request to return the address, abi, and bytecode of TTBank.sol
app.get("/ttBank", (req, res) => {
  res.status(200).json({
    addresses: {
      rinkeby: rinkebyAddress.ttBank,
      goerli: goerliAddress.ttBank,
    },
    abi: TTBank__factory.abi,
    bytecode: TTBank__factory.bytecode,
  });
});

// Starts the Express server
app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`);
});
