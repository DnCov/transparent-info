import { PostList } from './PostList';
import { postsList } from '../pages/posts/index';

export const Posts = () => {
  return <PostList posts={postsList} />;
};
