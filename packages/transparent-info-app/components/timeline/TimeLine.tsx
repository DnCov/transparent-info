import { Timeline, TimelineEvent } from 'react-event-timeline';
import TimeAgo from 'react-timeago';

// import { preparedEvents as events } from '../../src/preparedEvents';
import { events } from '../../gen/timeline';
import { Box, Paper, Icon, Typography } from '@material-ui/core';
import { Component, FunctionComponent, useEffect } from 'react';

import { EventTitle } from './EventTitle';
import { EventIcon } from './EventIcon';
import { EventTime } from './EventTime';
import { WrapExtra } from './ItemWrap';

interface TimeLineEventProps {
  desc: boolean;
}

export const TimeLineEvent: FunctionComponent<TimeLineEventProps> = ({ desc }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [desc]);

  const sorted = events.sort((p, u) => {
    if (desc) {
      return p[1]._ts - u[1]._ts;
    } else {
      return u[1]._ts - p[1]._ts;
    }
  });
  return (
    <div>
      <Timeline>
        {sorted.map((e, i) => {
          const [Item, extra]: [FunctionComponent, WrapExtra] = [e][0];
          return <Item key={extra.fileName} />;
        })}
      </Timeline>
    </div>
  );
};
