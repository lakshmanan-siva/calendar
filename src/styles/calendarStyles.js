import {
  Box,
  styled,
  alpha
} from '@mui/material';

export const EventModalBox = styled(Box)(({ theme, eventcolor }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[10],
  borderRadius: '16px',
  outline: 'none',
  overflow: 'hidden',
  '& .modal-header': {
    backgroundColor: eventcolor || theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }
}));

export const DEFAULT_EVENT_BACKGROUND = '#FFFFFF';
export const EVENT_BORDER_COLOR = '#4285F4';

export const StyledEvent = styled('div')(({ theme, view }) => ({
  backgroundColor: DEFAULT_EVENT_BACKGROUND,
  color: theme.palette.text.primary,
  border: `1px solid ${alpha(EVENT_BORDER_COLOR, 0.3)}`,
  borderLeft: `4px solid ${EVENT_BORDER_COLOR}`,
  borderRadius: '4px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  width: "100%",
  minHeight: '80px',
  overflow: 'hidden',
  padding: '4px 8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative',
  cursor: 'pointer',
  height:"100%",
  '& .event-title': {
    fontWeight: 'bold',
    fontSize: view === 'month' ? '12px' : '10px',
    marginBottom: '2px',
  },
  '& .event-interviewer': {
    fontSize: view === 'month' ? '10px' : '8px',
    color: theme.palette.text.secondary,
  },
  '& .event-time': {
    fontSize: view === 'month' ? '9px' : '7px',
    color: theme.palette.text.secondary,
    marginTop: view === 'month' ? '0px' : '1px',
  },
  
  '& .notification-chip': {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#FFEB3B',
    color: '#333',
    height: '18px',
    width: '18px',
    minWidth: 'unset',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    fontWeight: 'bold',
    padding: 0,
    cursor: 'pointer',
    zIndex: 1,
    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
    '& .MuiChip-label': {
      padding: 0,
    }
  }
}));

