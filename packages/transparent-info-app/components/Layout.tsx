import * as React from "react";
import Link from "../src/Link";
import Head from "next/head";
import { AppBar, Toolbar, Typography, Theme } from "@material-ui/core";
import { Footer } from "./Footer";
import { makeStyles, createStyles } from "@material-ui/core/styles";

type Props = {
  title?: string;
};
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      minHeight: "80vh"
      // background: 'linear-gradient(45deg,#fe5196,#f77062)'
    }
  })
);

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?a82a321b3e7190eff23bd08fafe7e4c2";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `
          }}
        />
      </Head>
      <AppBar position="sticky">
        <Toolbar>
          <Typography>2019-nCov transparent infomations</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
