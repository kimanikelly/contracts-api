// Imports Ethers.js
import { ethers } from "ethers";

// Import Chai and the expect libary
import { expect } from "chai";

// Imports the Typechain bindings for Token.sol
import { Token__factory, Token } from "@kimanikelly/core-contracts";

// Imports the Goerli addresses
import goerliAddress from "@kimanikelly/core-contracts/dist/addresses/5.json";

// Returns the contract response data based on the endpoint passed in as an argument
import { fetchContractData } from "./utils";

describe("/token GET Request", () => {
  let contract: any;
  let provider: any;

  before(async () => {
    // Token JSON response
    contract = await fetchContractData("token");

    // Instantiates the Infura provider targeting the Goerli testnet
    provider = new ethers.providers.JsonRpcProvider(
      "https://goerli.infura.io/v3/b312d7cb723144e2b9741c7462c23b2d"
    );
  });

  describe("#response-data", () => {
    it("Should get the addresses for Token.sol", async () => {
      /// The /token endpoint should return the same address packaged in @kimanikelly/core-contracts
      expect(contract.addresses.goerli).to.equal(goerliAddress.token);
    });

    it("Should get the abi for Token.sol", async () => {
      // The /token endpoint should return the same abi packaged in @kimanikelly/core-contracts
      expect(contract.abi).to.eql(Token__factory.abi);
    });

    it("Should get the bytecode for Token.sol", async () => {
      // The /token endpoint should return the same bytecode pacakged in @kimanikelly/core-contracts
      expect(contract.bytecode).to.equal(Token__factory.bytecode);
    });
  });

  describe("#contract-instances", () => {
    it("Should be able to create a Token.sol contract instance with the Typechain bindings", async () => {
      // Creates a Token.sol contract instance with the Typechain bindings returned from @kimanikelly/core-contracts
      const token: Token = Token__factory.connect(
        contract.addresses.goerli,
        provider
      );

      // Verifies the Token contract was properly instantiated
      expect(await token.name()).to.equal("Test Token");
      expect(await token.symbol()).to.equal("TT");
    });

    it("Should be able to create a Token.sol instance with the address and ABI", async () => {
      // Creates a Token.sol contract instance directly with Ethers.js
      const token: Token = new ethers.Contract(
        contract.addresses.goerli,
        contract.abi,
        provider
      );

      // Verifies the Token contract was properly instantiated
      expect(await token.name()).to.equal("Test Token");
      expect(await token.symbol()).to.equal("TT");
    });
  });
});
