import "dotenv/config";
import axios from "axios";

import ethers from "ethers";

import { expect } from "chai";

import { Token__factory } from "@kimanikelly/core-contracts";
import rinkebyAddress from "@kimanikelly/core-contracts/dist/addresses/4.json";
import { SigningKey } from "ethers/lib/utils";
import { Provider } from "@ethersproject/abstract-provider";

const fetchContractData = async () => {
  return (await axios.get("http://localhost:3001/tokenContract")).data;
};

describe("/tokenContract GET Request", () => {
  let contract: any;
  let provider: any;

  beforeEach(async () => {
    contract = await fetchContractData();
  });

  it("Should get the addresses for Token.sol", async () => {
    expect(contract.addresses.rinkeby).to.equal(rinkebyAddress.token);
  });

  it("Should get the bytecode for Token.sol", async () => {
    expect(contract.bytecode).to.equal(Token__factory.bytecode);
  });

  it("Should be able to create a Token.sol contract instance with the Typechain bindings", async () => {
    const testnetUrl = process.env.RINKEBY_URL;

    const provider = new ethers.providers.JsonRpcProvider(testnetUrl, 4);

    console.log(provider);

    // const token = Token__factory.connect(contract.addresses.rinkeby, signer);
    // console.log(token);
  });
});
