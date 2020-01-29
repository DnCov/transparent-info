import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Link from '../src/Link';
import { useRouter } from 'next/router';
import { Container } from '@material-ui/core';
import { baseUrl } from './ipfs/Env';

const useStyles = makeStyles({
  root: {
    position: 'sticky',
    bottom: 0,
  },
});

export function BottomNav() {
  const classes = useStyles();
  const router = useRouter();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    router.push(`${baseUrl}${newValue}`);
  };

  return (
    <Container className={classes.root}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="Recents" value="/event.html" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="/" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="/postlist.html" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Container>
  );
}
