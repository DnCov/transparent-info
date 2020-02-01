import { FunctionComponent, Component } from 'react';
import { Icon } from '@material-ui/core';

interface IconProps {
  icon?: string | Component;
}

export const EventIcon: FunctionComponent<IconProps> = ({ icon }) => {
  if (typeof icon === 'string') {
    return <Icon>{icon}</Icon>;
  } else if (typeof icon === 'function') {
    return icon;
  }

  // default icon   undefined | null
  return null;
};
