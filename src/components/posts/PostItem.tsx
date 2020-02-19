import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from './PostItem.scss';

const cx = classnames.bind(styles);

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostItem {
  post: IPost;
}

class PostItemComponent extends Component<IPostItem> {
  render() {
    const { post } = this.props;
    return (
      <div className={cx('item-wrap')}>
        <Link to={`/posts/${post.id}`}>
          <h3 className={cx('item-title')}>{`${post.id}. ${post.title}`}</h3>
        </Link>
      </div>
    );
  }
}

export default PostItemComponent;
