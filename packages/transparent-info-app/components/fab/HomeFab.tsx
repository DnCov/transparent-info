import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Fab, Tooltip } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { useRouter } from 'next/router';

import { Home as HomeIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(14),
      right: theme.spacing(4),
      '&:hover': {
        backgroundColor: green[300],
      },
    },
  })
);

export const HomeFab = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Tooltip title="返回主页">
      <Fab onClick={() => router.push('/')} className={classes.fab}>
        <HomeIcon />
      </Fab>
    </Tooltip>
  );
};
