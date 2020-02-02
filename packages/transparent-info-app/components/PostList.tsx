import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage, NextPageContext } from 'next';
import { Container, ListItem, List } from '@material-ui/core';
import { postsList } from '../pages/posts/index';
import Link from '../src/Link';
import { baseUrl } from '../components/ipfs/Env';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';

interface Post {
  href: string;
  title?: string;
}

interface Props {
  posts: Post[];
}

export const PostList: FunctionComponent<Props> = ({ posts }) => {
  const router = useRouter();
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <List>
      {posts.map((e, i) => (
        <ListItem key={i}>
          <Link
            passHref={false}
            onClick={(evt: React.MouseEvent) => handleLinkClick(evt, e.href)}
            href={e.href}
          >
            {e.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
