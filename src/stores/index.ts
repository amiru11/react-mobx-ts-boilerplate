import CounterStore from './Couter';
import PostStore from './Posts';

class RootStore {
  counterStore: CounterStore;
  postStore: PostStore;

  constructor() {
    this.counterStore = new CounterStore(this);
    this.postStore = new PostStore(this);
  }
}

export default RootStore;
