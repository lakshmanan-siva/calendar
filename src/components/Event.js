import React from 'react';
import moment from 'moment';
import { Typography } from '@mui/material';
import { StyledEvent, eventColors } from '../styles/calendarStyles'; 

const Event = ({ event }) => {
  return (
    <StyledEvent eventcolor={event.color || eventColors.default}>
      <div className="event-title">{event.title}</div>
      <div className="event-time">
        {moment(event.start).format('h:mm A')} - {moment(event.end).format('h:mm A')}
      </div>
    </StyledEvent>
  );
};

export default Event;