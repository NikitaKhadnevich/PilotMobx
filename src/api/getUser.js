/* eslint-disable no-shadow */
import axios from 'axios';

const endpoint = 'https://jsonplaceholder.typicode.com/users';
const errors = {
  getOneError: 'error on One User Fetch',
  deleteError: 'error on Delete User',
  updateError: 'error on Update User',
};

async function getUser(id) {
  try {
    const response = await axios.get(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.log(errors.getOneError);
    throw new Error(errors.getOneError);
  }
}

export default getUser;

export async function deleteUser(id) {
  try {
    return await axios.delete(`${endpoint}/${id}`);
  } catch (error) {
    console.log(errors.deleteError);
    throw new Error(errors.deleteError);
  }
}

export async function updateUser(id, info) {
  try {
    const response = await axios.patch(`${endpoint}/${id}`, info);
    return response.data;
  } catch (error) {
    console.log(errors.updateError);
    throw new Error(errors.updateError);
  }
}
