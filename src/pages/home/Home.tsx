import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import styles from './Home.scss';

const cx = classnames.bind(styles);

class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <section className={cx('section-1')}>
          <Link to="/posts">Go to Posts</Link>
        </section>
        <section className={cx('section-2')}>
          <Link to="/counter">Go to Counter test</Link>
        </section>
      </>
    );
  }
}

export default Home;
