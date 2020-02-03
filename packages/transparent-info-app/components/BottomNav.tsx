import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import { List as ListIcon, Info as InfoIcon } from '@material-ui/icons';
import Link from '../src/Link';
import { useRouter } from 'next/router';
import { Container } from '@material-ui/core';
import { useEffect } from 'react';
import { getFullUrl } from '../src/config';

const useStyles = makeStyles({
  root: {
    position: 'sticky',
    bottom: 0,
  },
  hidden: {
    visibility: 'hidden',
    height: 0,
  },
});

const entrys = ['/', '/event', '/postlist', '/donation'];

const HiddenPrefetch = () => {
  const classes = useStyles();

  return (
    <div className={classes.hidden}>
      {entrys.map((e, i) => (
        <Link key={i} href={e}>
          {e}{' '}
        </Link>
      ))}
    </div>
  );
};

export function BottomNav() {
  const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  return (
    <Container className={classes.root}>
      <HiddenPrefetch />
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="经过" value="/event" icon={<RestoreIcon />} />
        <BottomNavigationAction label="文章" value="/postlist" icon={<ListIcon />} />
        <BottomNavigationAction label="捐赠" value="/donation" icon={<EmojiPeopleIcon />} />
        {/* <BottomNavigationAction label="关于" value="/about" icon={<InfoIcon />} /> */}
      </BottomNavigation>
    </Container>
  );
}
