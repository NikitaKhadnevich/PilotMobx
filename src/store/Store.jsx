/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-plusplus */
import { observable, action, makeObservable, configure } from 'mobx';
import getData from '../api/getData';
import getUser, { deleteUser, updateUser } from '../api/getUser';

class Store {
  constructor() {
    makeObservable(this, {
      count: observable,
      users: observable,
      currentUser: observable,
      handleIncrement: action.bound,
      handleDecrement: action.bound,
      getUsersData: action.bound,
      getCurrentUser: action.bound,
      deleteCurrentUser: action.bound,
      updateCurrentUser: action.bound,
    });
  }

  count = 0;

  users = [];

  currentUser = [];

  handleIncrement() {
    this.count++;
  }

  handleDecrement() {
    this.count--;
  }

  async getUsersData() {
    const data = await getData();
    if (data) {
      this.users = [...data];
    }
  }

  async getCurrentUser(id) {
    const data = await getUser(id);
    if (data) {
      this.currentUser = [data];
    }
  }

  async deleteCurrentUser(id) {
    const data = await deleteUser(id);
    const { status } = data;
    if (status === 200) {
      this.users = this.users.filter((elem) => elem.id !== id);
    }
  }

  async updateCurrentUser(id, newInfo) {
    const data = await updateUser(id, newInfo);
    if (data) {
      this.users = this.users.map((elem) =>
        elem.id === id ? { ...elem, name: newInfo.name } : elem
      );
    }
  }
}

configure({ enforceActions: `observed` });

const store = new Store();
export default store;
