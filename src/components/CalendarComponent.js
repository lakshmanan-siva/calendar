import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  AppBar,
  Box,
  Paper,
  Typography,
} from '@mui/material';
import {
  Today as TodayIcon,
  ViewWeek as ViewWeekIcon,
  CalendarViewMonth as CalendarViewMonthIcon,
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';

import { VibrantToolbar, ViewButton, eventColors } from '../styles/calendarStyles';
import Event from './Event';
import EventDetailsModal from './EventDetailsModal';
import { initialEvents } from '../utils/data';

const localizer = momentLocalizer(moment);


const CalendarComponent = () => {
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const getDateDisplay = () => {
    switch (view) {
      case Views.MONTH:
        return moment(date).format('MMMM YYYY');
      case Views.WEEK:
        return `${moment(date).startOf('week').format('MMM D')} - ${moment(date).endOf('week').format('MMM D, YYYY')}`;
      case Views.DAY:
        return moment(date).format('dddd, MMMM D, YYYY');
      default:
        return moment(date).format('MMMM YYYY');
    }
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleNavigate = (newDate) => {
    setDate(newDate);
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleToday = () => {
    setDate(new Date());
  };

  const handlePrevious = () => {
    const newDate = view === Views.MONTH
      ? moment(date).subtract(1, 'month').toDate()
      : view === Views.WEEK
        ? moment(date).subtract(1, 'week').toDate()
        : moment(date).subtract(1, 'day').toDate();
    setDate(newDate);
  };

  const handleNext = () => {
    const newDate = view === Views.MONTH
      ? moment(date).add(1, 'month').toDate()
      : view === Views.WEEK
        ? moment(date).add(1, 'week').toDate()
        : moment(date).add(1, 'day').toDate();
    setDate(newDate);
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <AppBar position="static" color="transparent" elevation={0} sx={{ marginBottom: 2 }}>
        <VibrantToolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ViewButton
              startIcon={<ChevronLeft />}
              onClick={handlePrevious}
              size="small"
              sx={{ color: 'white', minWidth: 'auto' }}
            />
            <ViewButton
              startIcon={<TodayIcon />}
              onClick={handleToday}
              size="small"
              sx={{ color: 'white', minWidth: 'auto' }}
            >
              Today
            </ViewButton>
            <ViewButton
              startIcon={<ChevronRight />}
              onClick={handleNext}
              size="small"
              sx={{ color: 'white', minWidth: 'auto' }}
            />
          </Box>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            {getDateDisplay()}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <ViewButton
              selected={view === Views.MONTH}
              startIcon={<CalendarViewMonthIcon />}
              onClick={() => handleViewChange(Views.MONTH)}
            >
              Month
            </ViewButton>
            <ViewButton
              selected={view === Views.WEEK}
              startIcon={<ViewWeekIcon />}
              onClick={() => handleViewChange(Views.WEEK)}
            >
              Week
            </ViewButton>
            <ViewButton
              selected={view === Views.DAY}
              startIcon={<TodayIcon />}
              onClick={() => handleViewChange(Views.DAY)}
            >
              Day
            </ViewButton>
          </Box>
        </VibrantToolbar>
      </AppBar>

      <Paper elevation={3} sx={{ height: 'calc(100vh - 150px)', borderRadius: '12px', overflow: 'hidden' }}>
        <Calendar
          localizer={localizer}
          events={initialEvents} 
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
          view={view}
          onView={handleViewChange}
          date={date}
          onNavigate={handleNavigate}
          onSelectEvent={handleSelectEvent}
          components={{
            event: Event, 
            toolbar: () => null 
          }}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: event.color || eventColors.default,
              borderRadius: '8px',
              color: 'white',
              padding: '2px 5px'
            },
          })}
        />
      </Paper>

      <EventDetailsModal
        event={selectedEvent}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </Box>
  );
};

export default CalendarComponent;