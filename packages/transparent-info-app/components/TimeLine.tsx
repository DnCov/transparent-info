import { Timeline, TimelineEvent } from 'react-event-timeline';
import TimeAgo from 'react-timeago';

import { events } from '../timeline/index';
import { Box, Paper, Icon, Typography } from '@material-ui/core';
import { Component, FunctionComponent } from 'react';
import zhCnStrings from 'react-timeago/lib/language-strings/zh-CN';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import * as Fecha from 'fecha';

const formatter = buildFormatter(zhCnStrings);

const Title: FunctionComponent = ({ children }) => {
  if (!children) {
    throw new Error('title must set');
  }

  return <Typography> {children}</Typography>;
};

interface IconProps {
  icon?: string | Component;
}

const EventIcon: FunctionComponent<IconProps> = ({ icon }) => {
  if (typeof icon === 'string') {
    return <Icon>{icon}</Icon>;
  } else if (typeof icon === 'function') {
    return icon;
  }

  // default icon   undefined | null
  return null;
};

interface EventTimeProps {
  date: string | Date | any;
}
const EventTime: FunctionComponent<EventTimeProps> = ({ date }) => {
  if (!date) {
    throw new Error('event time must set');
  }

  const time = Fecha.parse(date, 'YYYY-MM-DD ZZ');
  if (!time) {
    throw new Error('date parse error');
  }
  const currentYear = new Date().getFullYear();
  const isThisYear = time.getFullYear() === new Date().getFullYear();

  if (Date.now() - time.valueOf() > 7 * 24 * 60 * 60 * 1000) {
    return (
      <Typography>
        <TimeAgo date={time} formatter={formatter} />
        {isThisYear ? `  @${Fecha.format(time, 'MM/DD')} ` : `@${Fecha.format(time, 'YYYY MM/DD')}`}
      </Typography>
    );
  }

  return (
    <Typography>
      <TimeAgo date={time} formatter={formatter} />
    </Typography>
  );
};

export default () => {
  return (
    <Timeline>
      {events.map((E, i) => (
        <TimelineEvent
          key={i}
          title={<Title> {E.title}</Title>}
          createdAt={<EventTime date={E.time} />}
          icon={<EventIcon icon={E.icon} />}
        >
          <E.default />
        </TimelineEvent>
      ))}
    </Timeline>
  );
};
