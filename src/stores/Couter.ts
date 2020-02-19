import { observable, action } from 'mobx';

import { IRootStore } from 'stores/interfaces/store';

export default class CounterStore {
  root: IRootStore;
  @observable
  public counter: number;

  constructor(root) {
    this.root = root;
    this.counter = 0;
  }

  @action
  increase = (): void => {
    this.counter++;
  };

  @action
  decrease = (): void => {
    this.counter--;
  };
}
