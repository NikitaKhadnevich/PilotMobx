/* eslint-disable no-shadow */
import axios from 'axios';

const endpoint = 'https://jsonplaceholder.typicode.com/users';

async function getData() {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.log('error on Users Fetch');
    return error;
  }
}

export default getData;
