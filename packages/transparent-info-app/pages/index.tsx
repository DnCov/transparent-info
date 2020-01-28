import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage, NextPageContext } from 'next';
import { Container } from '@material-ui/core';
import { useEffect } from 'react';

const IndexPage: NextPage = () => {
  useEffect(() => {
    console.log('did mount');
  }, []);
  console.log('im index');
  return (
    <Layout>
      <Container></Container>
    </Layout>
  );
};

export default IndexPage;
