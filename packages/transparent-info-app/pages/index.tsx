import * as React from 'react';
// import Link from "next/link";
import Layout from '../components/Layout';
import { NextPage, NextPageContext } from 'next';
// import chalk from 'chalk';
// import cowsay from "cowsay";
import { Container } from '@material-ui/core';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Container></Container>
    </Layout>
  );
};

export default IndexPage;
