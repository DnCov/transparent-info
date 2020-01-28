import * as React from 'react';
// import Link from "next/link";
import Layout from '../components/Layout';
import { NextPage, NextPageContext } from 'next';
import { Container, ListItem } from '@material-ui/core';
import { postsList } from './posts/index';
import Link from '../src/Link';
import { baseUrl } from '../components/ipfs/Env';

export default () => {
  return (
    <Layout>
      <Container>
        {postsList.map((e, i) => (
          <ListItem>
            <Link href={`${baseUrl}${e.href}`}> {e.title}</Link>
          </ListItem>
        ))}
      </Container>
    </Layout>
  );
};
