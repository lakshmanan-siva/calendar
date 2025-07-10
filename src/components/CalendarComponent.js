import  { useState, useMemo } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
  AppBar,
  Box,
  Paper,
  Typography,
  Button,
  Toolbar
} from '@mui/material';
import {
  ChevronLeft,
  ChevronRight,
} from '@mui/icons-material';
import { initialEvents } from '../utils/data';
import Event from './Event';
import EventDetailsModal from './EventDetailsModal';
import CalendarToolbar from './CalendarToolbar';

const localizer = momentLocalizer(moment);


const CalendarComponent = () => {
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(moment().toDate());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const groupedEvents = useMemo(() => {
    const groups = {};
    initialEvents.forEach(event => {
      const dayKey = moment(event.start).format('YYYY-MM-DD');
      if (!groups[dayKey]) {
        groups[dayKey] = [];
      }
      groups[dayKey].push(event);
    });
    for (const dayKey in groups) {
      groups[dayKey].sort((a, b) => moment(a.start).diff(moment(b.start)));
    }
    return groups;
  }, [initialEvents]);

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

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleToday = () => {
    setDate(moment().toDate());
    setView(Views.MONTH);
  };

  const handlePrevious = () => {
    const newDate = view === Views.MONTH
      ? moment(date).subtract(1, 'month').toDate()
      : view === Views.WEEK
        ? moment(date).subtract(1, 'week').toDate()
        : view === Views.DAY
          ? moment(date).subtract(1, 'day').toDate()
          : moment(date).subtract(1, 'year').toDate();
    setDate(newDate);
  };

  const handleNext = () => {
    const newDate = view === Views.MONTH
      ? moment(date).add(1, 'month').toDate()
      : view === Views.WEEK
        ? moment(date).add(1, 'week').toDate()
        : view === Views.DAY
          ? moment(date).add(1, 'day').toDate()
          : moment(date).add(1, 'year').toDate();
    setDate(newDate);
  };

  return (
    <Paper elevation={0} sx={{ height: '100vh', display: 'flex', flexDirection: 'column', borderRadius: '0px' }}>
      <AppBar position="static" color="transparent" elevation={0} sx={{ backgroundColor: '#fff', borderBottom: '1px solid #eee' }}>
        <Toolbar sx={{ justifyContent: 'space-between', padding: '8px 24px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333' }}>
              My Calendar
            </Typography>
            <Box sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '4px 8px',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f5f5f5',
              width: '200px',
            }}>
              <input
                type="text"
                placeholder="Search"
                style={{ border: 'none', outline: 'none', background: 'transparent', flexGrow: 1 }}
              />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#888' }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </Box>
          </Box>
          <Button
            variant="contained"
            endIcon={<ChevronRight style={{ transform: 'rotate(90deg)' }} />}
            sx={{
              backgroundColor: '#4285F4',
              color: 'white',
              borderRadius: '4px',
              textTransform: 'none',
              fontWeight: 'bold',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#357ae8',
                boxShadow: 'none',
              },
            }}
          >
            My Calendar
          </Button>
        </Toolbar>
      </AppBar>

      <Toolbar sx={{ justifyContent: 'space-between', padding: '8px 24px', borderBottom: '1px solid #eee', backgroundColor: '#fff' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            onClick={handlePrevious}
            sx={{
              minWidth: 'unset',
              padding: '6px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              color: '#555',
              '&:hover': {
                backgroundColor: '#f0f0f0'
              }
            }}
          >
            <ChevronLeft fontSize="small" />
          </Button>
          <Button
            onClick={handleNext}
            sx={{
              minWidth: 'unset',
              padding: '6px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              color: '#555',
              '&:hover': {
                backgroundColor: '#f0f0f0'
              }
            }}
          >
            <ChevronRight fontSize="small" />
          </Button>
          <Button
            onClick={handleToday}
            sx={{
              backgroundColor: '#4285F4',
              color: 'white',
              textTransform: 'none',
              fontWeight: 'bold',
              boxShadow: 'none',
              padding: '6px 12px',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: '#357ae8',
                boxShadow: 'none',
              },
            }}
          >
            Today
          </Button>
        </Box>

        <Typography variant="h6" sx={{
          flexGrow: 1,
          textAlign: 'center',
          fontWeight: 'normal',
          color: '#333'
        }}>
          {getDateDisplay()}
        </Typography>

       <CalendarToolbar view={view}  onViewChange={handleViewChange}/>
      </Toolbar>

      <Box sx={{ flexGrow: 1, p: 2, backgroundColor: '#fdfdfd' }} >
        <Calendar
          localizer={localizer}
          events={initialEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%', border: '1px solid #eee'}}
          view={view}
          onView={handleViewChange}
          date={date}
          components={{
            event: (props) => {
              const dayKey = moment(props.event.start).format('YYYY-MM-DD');
              const allEventsOnThisDay = groupedEvents[dayKey] || [];

              return (
                <Event
                  {...props}
                  view={view}
                  allEventsForDay={allEventsOnThisDay}
                  onSelectEvent={handleSelectEvent}
                />
              );
            },
            toolbar: () => null,
          }}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: 'transparent',
              border: 'none',
              boxShadow: 'none',
            },
          })}
          formats={{
            timeGutterFormat: 'h A',
            eventTimeRangeFormat: () => '', 
            dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
              localizer.format(start, 'MMM D', culture) + ' - ' + localizer.format(end, 'D, YYYY', culture),
            agendaDateFormat: 'ddd, MMM D',
            monthHeaderFormat: 'MMMM YYYY',
            dayHeaderFormat: 'dddd MMM D',
            weekHeaderFormat: 'MMM D',
            yearHeaderFormat: 'YYYY',
          }}
        />
      </Box>

      <EventDetailsModal
        event={selectedEvent}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </Paper>
  );
};

export default CalendarComponent;