import "dotenv/config";
import axios from "axios";

import { ethers } from "ethers";

import { expect } from "chai";

import { Token__factory } from "@kimanikelly/core-contracts";
import rinkebyAddress from "@kimanikelly/core-contracts/dist/addresses/4.json";
import { SigningKey } from "ethers/lib/utils";

const fetchContractData = async () => {
  return (await axios.get("http://localhost:3001/tokenContract")).data;
};

describe("/tokenContract GET Request", () => {
  let contract: any;
  let provider: any;
  let signer: any;

  before(async () => {
    contract = await fetchContractData();
    provider = new ethers.providers.JsonRpcProvider(process.env.RINKEBY_URL);
    signer = new ethers.Wallet(
      process.env.PRIVATE_KEY as unknown as SigningKey,
      provider
    );
  });

  it("Should get the addresses for Token.sol", async () => {
    expect(contract.addresses.rinkeby).to.equal(rinkebyAddress.token);
  });

  it("Should get the bytecode for Token.sol", async () => {
    expect(contract.bytecode).to.equal(Token__factory.bytecode);
  });

  it("Should be able to create a Token.sol contract instance with the Typechain bindings", async () => {
    const token = Token__factory.connect(contract.addresses.rinkeby, signer);

    expect(await token.name()).to.equal("Test Token");
    expect(await token.symbol()).to.equal("TT");
  });

  it("Should be able to create a Token.sol instance with the address and ABI", async () => {
    const token = new ethers.Contract(
      contract.addresses.rinkeby,
      contract.abi,
      signer
    );
  });
});
