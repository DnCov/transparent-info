import { FunctionComponent, Component, ComponentProps } from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';

import * as Fecha from 'fecha';
import { EventTitle } from './EventTitle';
import { EventTime } from './EventTime';
import { EventIcon } from './EventIcon';
export interface WrapExtra {
  fileName: string;
  time: string;
  title: string;
  icon: string | Component;
}

type WrapItemProps = WrapExtra & {
  _ts: number;
  date: Date;
};

export default function withExtra(WrapComponent: any, extra: WrapExtra) {
  const { time } = extra;
  const date = Fecha.parse(time, 'YYYY-MM-DD ZZ');
  const _ts = date?.valueOf();
  return [
    (props: any) => (
      <TimelineEvent
        title={<EventTitle fileName={extra.fileName}> {props.title || extra.title}</EventTitle>}
        createdAt={<EventTime date={date} />}
        icon={<EventIcon icon={props.icon || extra.icon} />}
      >
        <WrapComponent {...extra} {...props} _ts={_ts} date={date} />
      </TimelineEvent>
    ),
    {
      ...extra,
      date,
      _ts,
    },
  ];
}
