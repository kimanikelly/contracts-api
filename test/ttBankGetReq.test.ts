// Imports Ethers.js
import { ethers } from "ethers";

// Import Chai and the expect libary
import { expect } from "chai";

// Imports the Typechain bindings for Token.sol
import { TTBank__factory, TTBank } from "@kimanikelly/core-contracts";

// Imports the Goerli addresses
import goerliAddress from "@kimanikelly/core-contracts/dist/addresses/5.json";

// Returns the contract response data based on the endpoint passed in as an argument
import { fetchContractData } from "./utils";

describe("/ttBank GET Request", () => {
  let contract: any;
  let provider: any;

  before(async () => {
    // TTBank JSON response
    contract = await fetchContractData("ttBank");

    // Instantiates the Infura provider targeting the Goerli testnet
    provider = new ethers.providers.JsonRpcProvider(
      "https://goerli.infura.io/v3/b312d7cb723144e2b9741c7462c23b2d"
    );
  });

  describe("#response-data", () => {
    it("Should get the address for TTBank.sol", async () => {
      // The /ttBank endpoint should return the same address packaged in @kimanikelly/core-contracts
      expect(contract.addresses.goerli).to.equal(goerliAddress.ttBank);
    });

    it("Should get the ABI for TTBank.sol", async () => {
      // The /ttBank endpoint should return the same ABI packaged in @kimanikelly/core-contracts
      expect(contract.abi).to.eql(TTBank__factory.abi);
    });

    it("Should get the bytecode for TTBank.sol", async () => {
      // The /ttBank endpoint should return the same bytecode pacakged in @kimanikelly/core-contracts
      expect(contract.bytecode).to.equal(TTBank__factory.bytecode);
    });
  });

  describe("#contract-instances", () => {
    it("Should be able to create a TTBank.sol contract instance with the Typechain bindings", async () => {
      // Creates a TTBank.sol contract instance with the Typechain bindings returned from @kimanikelly/core-contracts
      const ttBank: TTBank = TTBank__factory.connect(
        contract.addresses.goerli,
        provider
      );

      // Verifies the TTBank contract was properly instantiated
      expect(await ttBank.token()).to.equal(goerliAddress.token);
    });

    it("Should be able to create a TTBank.sol instance with the address and ABI", async () => {
      // Creates a TTBank.sol contract instance directly with Ethers.js
      const ttBank: TTBank = new ethers.Contract(
        contract.addresses.goerli,
        contract.abi,
        provider
      );

      // Verifies the TTBank contract was properly instantiated
      expect(await ttBank.token()).to.equal(goerliAddress.token);
    });
  });
});
