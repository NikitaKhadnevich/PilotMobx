/* eslint-disable no-plusplus */
import { observable, action, makeObservable, configure } from 'mobx';

class Store {
  constructor() {
    makeObservable(this, {
      count: observable,
      handleIncrement: action.bound,
      handleDecrement: action.bound,
    });
  }

  count = 0;

  handleIncrement() {
    this.count++;
  }

  handleDecrement() {
    this.count--;
  }
}

configure({ enforceActions: `observed` });

const store = new Store();
export default store;
