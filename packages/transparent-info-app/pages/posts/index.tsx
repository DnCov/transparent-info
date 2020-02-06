import React from 'react';
import { PostList } from '../../components/post/PostList';

import { posts } from '../../gen/posts';
import Layout from '../../components/Layout';

export default () => {
  return (
    <Layout title="文章列表|收集整理  请带着脑子阅读，不确保完全真实">
      <PostList posts={posts} />
    </Layout>
  );
};
