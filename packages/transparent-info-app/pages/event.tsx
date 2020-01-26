import Layout from '../components/Layout';
import { TimeLineEvent } from '../components/TimeLine';
import { Container, Fab, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import { SortBy } from '../src/consts';
import SortIcon from '@material-ui/icons/Sort';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(8),
      right: theme.spacing(4),
      '&:hover': {
        backgroundColor: green[600],
      },
    },
  })
);

export default () => {
  const [sortBy, setSortBy] = useState(SortBy.Desc);

  const classes = useStyles();

  const changeSort = (e: React.MouseEvent) => {
    if (sortBy == SortBy.Asc) {
      setSortBy(SortBy.Desc);
    } else {
      setSortBy(SortBy.Asc);
    }
  };

  return (
    <Layout title="新型冠状病毒突发事件发展路线">
      <Container>
        <TimeLineEvent sortBy={sortBy} />
        <Fab onClick={changeSort} className={classes.fab}>
          <SortIcon color={sortBy === SortBy.Asc ? 'secondary' : 'primary'} />
        </Fab>
      </Container>
    </Layout>
  );
};
