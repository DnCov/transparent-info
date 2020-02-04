import * as React from 'react';
import Layout from '../Layout';
import { NextPage, NextPageContext } from 'next';
import { Container, ListItem, List } from '@material-ui/core';
import Link from '../../src/Link';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import withExtra, { WithExtra } from './PostWrap';

interface Props {
  posts: WithExtra[];
}

export const PostList: FunctionComponent<Props> = ({ posts }) => {
  const router = useRouter();
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <List>
      {posts.map(([Item, extra], i) => (
        <ListItem key={i}>
          <Link
            passHref={false}
            onClick={(evt: React.MouseEvent) => handleLinkClick(evt, extra.href as string)}
            href={extra.href as string}
          >
            {extra.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
