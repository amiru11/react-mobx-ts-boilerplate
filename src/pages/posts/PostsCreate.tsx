import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import classnames from 'classnames/bind';

import { IPostStore } from 'stores/interfaces/store';

import Input from 'components/common/Input';
import TextArea from 'components/common/TextArea';

import styles from './PostsDetail.scss';

const cx = classnames.bind(styles);

interface IPostsProps {
  postStore?: IPostStore;
}

@inject('postStore')
@observer
class PostsCreate extends Component<RouteComponentProps & IPostsProps> {
  create = async () => {
    const { createPost } = this.props.postStore;
    const { history } = this.props;
    try {
      await createPost();
      alert('Success to create Post.');
      history.push('/posts');
    } catch (err) {
      console.error('err', err);
      alert('Fail to create Post.');
    }
  };

  render() {
    const {
      post,
      handleChange,
      handleChangeForTextArea,
    } = this.props.postStore;

    return (
      <div className={cx('create-container')}>
        <label htmlFor="title">Title</label>
        <Input
          type="text"
          id="title"
          name="title"
          value={post?.title ?? ''}
          onChange={handleChange}
        />
        <pre />
        <TextArea
          id="body"
          name="body"
          value={post?.body ?? ''}
          onChange={handleChangeForTextArea}
        />
        <pre />
        <button onClick={this.create}>Create</button>
      </div>
    );
  }
}

export default PostsCreate;
