import Layout from '../components/Layout';
import { TimeLineEvent } from '../components/TimeLine';
import { Container, Fab, Theme, Tooltip } from '@material-ui/core';
import React, { useState } from 'react';
import { SortBy } from '../src/consts';
import SortIcon from '@material-ui/icons/Sort';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(6),
      right: theme.spacing(4),
      '&:hover': {
        backgroundColor: green[400],
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
    <Layout title="新型冠状病毒突发事件发展路线| 注意 本篇信息暂未全部证实  需要你来完善和更正">
      <TimeLineEvent sortBy={sortBy} />
      <Tooltip title={sortBy !== SortBy.Asc ? '改为时间发生的顺序' : '最近发生优先展示'}>
        <Fab onClick={changeSort} className={classes.fab}>
          <SortIcon color={sortBy === SortBy.Asc ? 'secondary' : 'primary'} />
        </Fab>
      </Tooltip>
    </Layout>
  );
};
