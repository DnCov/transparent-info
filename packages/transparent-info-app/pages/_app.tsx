import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { MDXProvider } from '@mdx-js/react';
import { Divider } from '@material-ui/core';
import MdImg from '../components/MdImg';

const mdComponents = {
  h1: (props: any) => <h1 style={{ color: 'tomato' }} {...props} />,
  hr: (props: any) => <Divider />,
  img: (props: any) => <MdImg {...props} />,
};

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <MDXProvider components={mdComponents}>
        {/* <MDXProvider> */}
        <React.Fragment>
          <Head>
            <title>2019-nCov transparent infomation</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </React.Fragment>
      </MDXProvider>
    );
  }
}
