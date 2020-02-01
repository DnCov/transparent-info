import { Timeline, TimelineEvent } from 'react-event-timeline';
import TimeAgo from 'react-timeago';

// import { preparedEvents as events } from '../../src/preparedEvents';
import { events } from '../../gen/timeline';
import { Box, Paper, Icon, Typography } from '@material-ui/core';
import { Component, FunctionComponent, useEffect } from 'react';

import { SortBy } from '../../src/consts';
import { EventTitle } from './EventTitle';
import { EventIcon } from './EventIcon';
import { EventTime } from './EventTime';

interface TimeLineEventProps {
  sortBy: SortBy;
}

export const TimeLineEvent: FunctionComponent<TimeLineEventProps> = ({ sortBy }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sortBy]);
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
          <E key={i} />
        ))}
    </Timeline>
  );
};
