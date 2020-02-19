import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import { IPostStore } from 'stores/interfaces/store';

import classnames from 'classnames/bind';
import styles from './PostsDetail.scss';

const cx = classnames.bind(styles);

interface IPostsProps {
  postStore?: IPostStore;
}

interface IMatchParams {
  id: string;
}

@inject('postStore')
@observer
class PostsDetail extends Component<
  RouteComponentProps<IMatchParams> & IPostsProps
> {
  async componentDidMount() {
    const { loadPostById } = this.props.postStore;
    const { params } = this.props.match;
    await loadPostById(Number(params.id));
  }

  render() {
    const { getPost: post, isLoading } = this.props.postStore;

    return !isLoading && post.id ? (
      <div className={cx('detail-container')}>
        <h2 className={cx('title')}>{post.title}</h2>
        <pre />
        <div
          className={cx('content')}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default PostsDetail;
