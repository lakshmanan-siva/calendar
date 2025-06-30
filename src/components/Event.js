import { useState } from 'react';
import moment from 'moment';
import { Chip } from '@mui/material';
import { StyledEvent } from '../styles/calendarStyles';
import DailyEventsPopover from './DailyEventsPopover';

const Event = ({ event, view, allEventsForDay, onSelectEvent, ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const shouldAggregate = view === 'month' || view === 'week';

  const isFirstEventForDay = shouldAggregate && allEventsForDay && allEventsForDay[0]?.id === event.id;
  const hasMultipleEvents = allEventsForDay && allEventsForDay.length > 1;

  console.log(allEventsForDay, "dau")

  const handleEventClick = (e) => {
    e.stopPropagation(); 

    if (shouldAggregate) {
      if (hasMultipleEvents) {
        setAnchorEl(e.currentTarget); 
      } else {
        onSelectEvent(event);
      }
    } else {
      onSelectEvent(event);
    }
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const popoverOpen = Boolean(anchorEl);
  const id = popoverOpen ? 'events-popover' : undefined;

  if (shouldAggregate && hasMultipleEvents && !isFirstEventForDay) {
    return null;
  }

  const chipBackgroundColor = event.color || '#4285F4';

  return (
    <>
      <div
        style={{
          ...props.style, // Apply react-big-calendar's calculated styles here
          cursor: 'pointer',
        }}
        onClick={handleEventClick}
        aria-describedby={id} // Associate with the popover for accessibility
      >
        <StyledEvent eventcolor={event.color} view={view}>
          <div className="event-title">{event.user_det?.job_id?.jobRequest_Title || event.summary}</div>
          <div className="event-interviewer">Interviewer: {event.user_det?.handled_by?.firstName}</div>
          <div className="event-time">
            Time: {moment(event.start).format('h:mm A')} - {moment(event.end).format('h:mm A')}
          </div>

          {shouldAggregate && hasMultipleEvents && (
            <Chip
              label={allEventsForDay.length}
              size="small"
              className="notification-chip"
              sx={{
                backgroundColor: chipBackgroundColor, // Use the event's main color for the chip
                color: 'white',
                fontSize: '0.7rem',
                height: '18px',
                position: 'absolute', // Position the chip on top right relative to StyledEvent
                top: 2,
                right: 2,
              }}
            />
          )}
        </StyledEvent>
      </div>
      {shouldAggregate && hasMultipleEvents && (
        <DailyEventsPopover
          id={id}
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          events={allEventsForDay} 
          onSelectEvent={onSelectEvent} 
        />
      )}
    </>
  );
};

export default Event;