import { events } from '../timeline';
import * as Fecha from 'fecha';

export const preparedEvents = events.map(e => {
  e._time = Fecha.parse(e.time, 'YYYY-MM-DD ZZ');
  e._ts = +e._time;
  return e;
});
