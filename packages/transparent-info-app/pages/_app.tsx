import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { MDXProvider } from '@mdx-js/react';
import { Divider } from '@material-ui/core';
import MdImg from '../components/MdImg';
import { HomeFab } from '../components/fab/HomeFab';
import MuiLink from '@material-ui/core/Link';
import Link from '../src/Link';
import { isExternalUrl } from '../src/config';

const mdComponents = {
  h1: (props: any) => <h1 style={{ color: 'tomato' }} {...props} />,
  hr: (props: any) => <Divider />,
  img: (props: any) => <MdImg {...props} />,
  a: (props: any) => {
    const href: string | undefined | null = props.href;
    if (isExternalUrl(href)) {
      return (
        <MuiLink target="_blank" rel="noopener" {...props}>
          {props.children}
        </MuiLink>
      );
    }
    return <Link {...props}> {props.children}</Link>;
  },
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
            <HomeFab />
          </ThemeProvider>
        </React.Fragment>
      </MDXProvider>
    );
  }
}
