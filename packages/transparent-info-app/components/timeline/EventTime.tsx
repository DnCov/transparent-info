import { FunctionComponent } from 'react';
import { Typography } from '@material-ui/core';
import TimeAgo from 'react-timeago';

import zhCnStrings from 'react-timeago/lib/language-strings/zh-CN';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import * as Fecha from 'fecha';

const formatter = buildFormatter(zhCnStrings);

interface EventTimeProps {
  date: string | Date | any;
}
export const EventTime: FunctionComponent<EventTimeProps> = ({ date }) => {
  if (!date) {
    throw new Error('event time must set or date parse error');
  }

  const currentYear = new Date().getFullYear();
  const isThisYear = date.getFullYear() === new Date().getFullYear();

  if (Date.now() - date.valueOf() > 7 * 24 * 60 * 60 * 1000) {
    return (
      <Typography>
        <TimeAgo date={date} formatter={formatter} />
        {isThisYear ? `  @${Fecha.format(date, 'MM/DD')} ` : `@${Fecha.format(date, 'YYYY MM/DD')}`}
      </Typography>
    );
  }

  return (
    <Typography>
      <TimeAgo date={date} formatter={formatter} />
    </Typography>
  );
};
