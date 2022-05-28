// Imports the Axios package and will be used to perform GET requests to the /tokenContract endpoint
import axios from "axios";

export const fetchContractData = async (endpoint: string) => {
  // Returns the response from the Axios
  return (await axios.get(`http://localhost:3001/${endpoint}`)).data;
};
