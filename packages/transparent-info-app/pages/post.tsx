import React from 'react';
import { NextPage } from 'next';

interface Props {
  title: string;
}
const Post: NextPage<Props> = ({ title }) => {
  return <span>{title}</span>;
};

Post.getInitialProps = async ({ query }) => {
  const { title } = query;
  return { title: title as string };
};

export default Post;
