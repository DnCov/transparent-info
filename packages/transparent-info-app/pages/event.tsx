import Layout from '../components/Layout';
import { TimeLineEvent } from '../components/timeline/TimeLine';
import { Container, Fab, Theme, Tooltip, Typography } from '@material-ui/core';
import React, { useState, useReducer } from 'react';
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

interface State {
  desc: boolean;
  ts: number;
}

interface Action {
  type: ActionType;
}

type ActionType = 'change';

const initState: State = {
  desc: true,
  ts: Date.now(),
};

function changeSortReduce(state: State, action: Action) {
  switch (action.type) {
    case 'change':
      return Object.assign({}, state, { desc: !state.desc, ts: Date.now() });
    default:
      throw new Error('not supported actipn type');
  }
}

export default () => {
  const [state, dispatch] = useReducer(changeSortReduce, initState);

  const classes = useStyles();

  const changeSort = (e: React.MouseEvent) => {
    dispatch({ type: 'change' });
  };

  return (
    <Layout title="事件经过">
      <Typography>如果要添加请点击编辑</Typography>
      <Typography> {state.desc ? '倒序' : '顺序'} </Typography>
      <TimeLineEvent desc={state.desc} />
      <Tooltip title={state.desc ? '改为时间发生的顺序' : '最近发生优先展示'}>
        <Fab onClick={changeSort} className={classes.fab}>
          <SortIcon color={state.desc ? 'secondary' : 'primary'} />
        </Fab>
      </Tooltip>
    </Layout>
  );
};
