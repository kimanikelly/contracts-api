import { Token__factory } from "@kimanikelly/core-contracts";

import express from "express";

const app = express();

const port = process.env.PORT || 3001;

app.get("/tokenContract", (req, res) => {
  res.json({
    abi: Token__factory.abi,
    bytecode: Token__factory.bytecode,
  });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
