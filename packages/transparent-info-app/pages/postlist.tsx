import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage, NextPageContext } from 'next';
import { Container, ListItem, List } from '@material-ui/core';
import Link from '../src/Link';
import { Posts } from '../components/Posts';
// import Link from 'next/link';

export default () => {
  return (
    <Layout title="文章列表">
      <Container>
        <Posts />
      </Container>
    </Layout>
  );
};
