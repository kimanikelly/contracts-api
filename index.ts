import { Token__factory } from "@kimanikelly/core-contracts";

import rinkebyAddress from "@kimanikelly/core-contracts/dist/addresses/4.json";

import express from "express";

const app = express();

const port = process.env.PORT || 3001;

app.get("/tokenContract", (req, res) => {
  res.json({
    addresses: {
      rinkeby: rinkebyAddress.token,
    },
    abi: Token__factory.abi,
    bytecode: Token__factory.bytecode,
  });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
