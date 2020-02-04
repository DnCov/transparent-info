import React from 'react';
import { PostList } from '../../components/post/PostList';

import { posts } from '../../gen/posts';
import Layout from '../../components/Layout';

export default () => {
  return (
    <Layout title="文章列表">
      <PostList posts={posts} />
    </Layout>
  );
};
