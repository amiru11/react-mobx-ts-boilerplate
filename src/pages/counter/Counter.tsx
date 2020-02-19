import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import classnames from 'classnames/bind';

import { ICounterStore } from 'stores/interfaces/store';

import styles from './Counter.scss';

const cx = classnames.bind(styles);

interface ICounterProps {
  counterStore?: ICounterStore;
}

@inject('counterStore')
@observer
class Counter extends Component<ICounterProps> {
  render() {
    const { counter, increase, decrease } = this.props.counterStore;
    return (
      <div className={cx('counter-container')}>
        <h2>{counter}</h2>
        <div>
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
