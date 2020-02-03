import React from 'react';
import PostList from '../postlist';
import * as sample from './section.mdx';
import * as post2 from './post2.mdx';
import * as basic from './basic.mdx';

export const postsList = [basic, sample, post2];

export default () => <PostList />;
