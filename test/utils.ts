// Imports the Axios package and will be used to perform GET requests
import axios from "axios";

export const fetchContractData = async (endpoint: string) => {
  // Returns the contract response based on the endpoint
  return (await axios.get(`http://localhost:3001/${endpoint}`)).data;
};
