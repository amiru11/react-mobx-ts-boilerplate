import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import classnames from 'classnames/bind';

import { IPostStore } from 'stores/interfaces/store';

import PostItem from 'components/posts/PostItem';

import styles from './Posts.scss';

const cx = classnames.bind(styles);

interface IPostsProps {
  postStore?: IPostStore;
}

@inject('postStore')
@observer
class Posts extends Component<IPostsProps> {
  async componentDidMount() {
    const { loadPosts } = this.props.postStore;
    await loadPosts();
  }

  render() {
    const { getPosts: posts, isLoading } = this.props.postStore;
    return !isLoading && posts?.length ? (
      <div className={cx('posts-container')}>
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default Posts;
