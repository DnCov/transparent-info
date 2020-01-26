import { Timeline, TimelineEvent } from 'react-event-timeline';
import TimeAgo from 'react-timeago';

import { preparedEvents as events } from '../src/preparedEvents';
import { Box, Paper, Icon, Typography } from '@material-ui/core';
import { Component, FunctionComponent } from 'react';
import zhCnStrings from 'react-timeago/lib/language-strings/zh-CN';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';

import * as Fecha from 'fecha';
import { SortBy } from '../src/consts';

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

interface TimeLineEventProps {
  sortBy: SortBy;
}

export const TimeLineEvent: FunctionComponent<TimeLineEventProps> = ({ sortBy }) => {
  return (
    <Timeline>
      {events
        .sort((p, u) => {
          if (sortBy === SortBy.Asc) {
            return p._ts - u._ts;
          } else {
            return u._ts - p._ts;
          }
        })
        .map((E, i) => (
          <TimelineEvent
            key={i}
            title={<Title> {E.title}</Title>}
            createdAt={<EventTime date={E._time} />}
            icon={<EventIcon icon={E.icon} />}
          >
            <E.default />
          </TimelineEvent>
        ))}
    </Timeline>
  );
};
