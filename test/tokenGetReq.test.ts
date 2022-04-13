// Imports the dotenv package and initializes it to allow reading of environment variables
import "dotenv/config";

// Imports the Axios package and will be used to perform GET requests to the /tokenContract endpoint
import axios from "axios";

// Imports Ethers.js
import { ethers, Signer } from "ethers";

// Import Chai and the expect libary
import { expect } from "chai";

// Imports the Typechain bindings for Token.sol
import { Token__factory, Token } from "@kimanikelly/core-contracts";

// Imports the Rinkeby Token.sol address
import rinkebyAddress from "@kimanikelly/core-contracts/dist/addresses/4.json";

// Imports the SigningKey type from Ethers.js
import { SigningKey } from "ethers/lib/utils";

const fetchContractData = async () => {
  // Returns the response from the Axios /tokenContract GET request
  return (await axios.get("http://localhost:3001/tokenContract")).data;
};

describe("/tokenContract GET Request", () => {
  let contract: any;
  let provider: any;
  let signer: any;

  before(async () => {
    contract = await fetchContractData();

    // Instantiates the Infura provider targeting the Rinkeby testnet
    provider = new ethers.providers.JsonRpcProvider(
      "https://rinkeby.infura.io/v3/b312d7cb723144e2b9741c7462c23b2d"
    );

    signer = ethers.Wallet.createRandom();
  });

  describe("#response-data", () => {
    it("Should get the addresses for Token.sol", async () => {
      // The /tokenContract endpoint should return the same address packaged in @kimanikelly/core-contracts
      expect(contract.addresses.rinkeby).to.equal(rinkebyAddress.token);
    });

    it("Should get the abi for Token.sol", async () => {
      // The /tokenContract endpoint should return the same abi packaged in @kimanikelly/core-contracts
      expect(contract.abi).to.eql(Token__factory.abi);
    });

    it("Should get the bytecode for Token.sol", async () => {
      // The /tokenContract endpoint should return the same bytecode pacakged in @kimanikelly/core-contracts
      expect(contract.bytecode).to.equal(Token__factory.bytecode);
    });
  });

  describe("#contract-instances", () => {
    it("Should be able to create a Token.sol contract instance with the Typechain bindings", async () => {
      //   Creates a Token.sol contract instance with the Typechain bindings returned from @kimanikelly/core-contracts
      const token: Token = Token__factory.connect(
        contract.addresses.rinkeby,
        provider
      );

      // Verifies the Token contract was properly instantiated
      expect(await token.name()).to.equal("Test Token");
      expect(await token.symbol()).to.equal("TT");
    });

    it("Should be able to create a Token.sol instance with the address and ABI", async () => {
      //   Creates a Token.sol contract instance directly with Ethers.js
      const token: Token = new ethers.Contract(
        contract.addresses.rinkeby,
        contract.abi,
        provider
      );

      // Verifies the Token contract was properly instantiated
      expect(await token.name()).to.equal("Test Token");
      expect(await token.symbol()).to.equal("TT");
    });
  });
});
