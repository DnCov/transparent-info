import { FunctionComponent } from 'react';
import { Copyright } from './Copyright';
import { Container, Theme } from '@material-ui/core';
import Link from '../src/Link';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Version } from './Version';

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: 50,
    },
  })
);
export const Footer: FunctionComponent<Props> = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Copyright />
      <Version />
    </Container>
  );
};
