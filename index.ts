// Imports the Typechain bindings for Token.sol
import { Token__factory } from "@kimanikelly/core-contracts";

// Imports the Rinkeby Token.sol address
import rinkebyAddress from "@kimanikelly/core-contracts/dist/addresses/4.json";

// Imports Express
import express from "express";

// Initializes Express
const app = express();

// Defines the port the Express server will serve on
const port = process.env.PORT || 3001;

// GET request to return the address, abi, and bytecode of Token.sol
app.get("/tokenContract", (req, res) => {
  res.json({
    addresses: {
      rinkeby: rinkebyAddress.token,
    },
    abi: Token__factory.abi,
    bytecode: Token__factory.bytecode,
  });
});

// Starts the Express server
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
