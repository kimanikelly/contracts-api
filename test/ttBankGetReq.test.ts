// Imports the Axios package and will be used to perform GET requests to the /tokenContract endpoint
import axios from "axios";

// Imports Ethers.js
import { ethers, Signer } from "ethers";

// Import Chai and the expect libary
import { expect } from "chai";

// Imports the Typechain bindings for Token.sol
import { TTBank__factory, TTBank } from "@kimanikelly/core-contracts";

// Imports the Rinkeby Token.sol address
import rinkebyAddress from "@kimanikelly/core-contracts/dist/addresses/4.json";

import { fetchContractData } from "./utils";

describe("/ttBank GET Request", () => {
  let contract: any;
  let provider: any;
  let signer: Signer;

  before(async () => {
    contract = await fetchContractData("ttBank");

    // Instantiates the Infura provider targeting the Rinkeby testnet
    provider = new ethers.providers.JsonRpcProvider(
      "https://rinkeby.infura.io/v3/b312d7cb723144e2b9741c7462c23b2d"
    );

    signer = ethers.Wallet.createRandom();
  });

  describe.only("#response-data", () => {
    it("Should get the address for TTBank.sol", async () => {
      // The /ttBank endpoint should return the same address packaged in @kimanikelly/core-contracts
      expect(contract.addresses.rinkeby).to.equal(rinkebyAddress.ttBank);
    });

    it("Should get the ABI for TTBank.sol", async () => {
      // The /ttBank endpoint should return the same ABI packaged in @kimanikelly/core-contracts
      expect(contract.abi).to.eql(TTBank__factory.abi);
    });

    // it("Should get the bytecode for Token.sol", async () => {
    //   // The /tokenContract endpoint should return the same bytecode pacakged in @kimanikelly/core-contracts
    //   expect(contract.bytecode).to.equal(Token__factory.bytecode);
    // });
  });
});
