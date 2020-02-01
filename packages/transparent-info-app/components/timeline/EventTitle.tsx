import { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';

export const EventTitle: FunctionComponent = ({ children }) => {
  if (!children) {
    throw new Error('title must set');
  }

  return <Typography> {children}</Typography>;
};
