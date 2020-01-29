import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Fab } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { useRouter } from 'next/router';

import { Home as HomeIcon } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

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
    display: {
      visibility: 'visible',
    },
    hidden: {
      visibility: 'hidden',
    },
  })
);

export const HomeFab = () => {
  const [show, setShow] = useState(false);
  const classes = useStyles();

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (/\/ip[fn]s\/[^\/]+\/posts/.test(window.location.pathname)) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
  }, []);

  return (
    <Fab
      onClick={() => router.push('/')}
      className={clsx(classes.fab, {
        [classes.display]: show,
        [classes.hidden]: show,
      })}
    >
      <HomeIcon />
    </Fab>
  );
};
