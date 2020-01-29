import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage, NextPageContext } from 'next';
import { Container, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { TopNav } from '../components/TopVav';
import { Haozhao } from '../components/section/TransHaozhao';
const IndexPage: NextPage = () => {
  return (
    <Layout title="代码已经就位，等你来填充内容">
      <Container>
        <TopNav />
        <Haozhao />
      </Container>
    </Layout>
  );
};

export default IndexPage;
