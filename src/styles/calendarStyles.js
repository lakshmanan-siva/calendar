import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Paper,
  Modal,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  styled,
  alpha
} from '@mui/material';

// Custom styled components
export const VibrantToolbar = styled(Toolbar)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: theme.palette.common.white,
  borderRadius: '12px 12px 0 0',
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1, 2),
}));

export const ViewButton = styled(Button)(({ theme, selected }) => ({
  backgroundColor: selected ? alpha(theme.palette.common.white, 0.2) : 'transparent',
  color: theme.palette.common.white,
  border: selected ? `1px solid ${theme.palette.common.white}` : '1px solid transparent',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.1),
  },
  padding: theme.spacing(0.5, 1),
  minWidth: 'unset',
  '& .button-text': {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

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

// New default event color and border color
export const DEFAULT_EVENT_BACKGROUND = '#FFFFFF';
export const EVENT_BORDER_COLOR = '#4285F4'; // This is a blue color

export const StyledEvent = styled('div')(({ theme, view }) => ({
  backgroundColor: DEFAULT_EVENT_BACKGROUND,
  color: theme.palette.text.primary,
  border: `1px solid ${alpha(EVENT_BORDER_COLOR, 0.3)}`,
  borderLeft: `4px solid ${EVENT_BORDER_COLOR}`,
  borderRadius: '4px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  width: "100%",
  minHeight: '80px',
  overflow: 'hidden', // Keep overflow hidden to contain the wrapping text
  padding: '4px 8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative',
  cursor: 'pointer',

  '& .event-title': {
    fontWeight: 'bold',
    fontSize: view === 'month' ? '12px' : '10px',
    marginBottom: '2px',
    // Removed whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' to allow wrapping
  },
  '& .event-interviewer': {
    fontSize: view === 'month' ? '10px' : '8px',
    color: theme.palette.text.secondary,
  },
  '& .event-time': {
    fontSize: view === 'month' ? '9px' : '7px',
    color: theme.palette.text.secondary,
    // Removed whiteSpace: 'nowrap', overflow: 'hidden', to allow wrapping
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

// Event colors are now mostly for internal logic, not background
export const eventColors = {
  "1st Round": EVENT_BORDER_COLOR,
  "Test": EVENT_BORDER_COLOR,
  "2nd Round": EVENT_BORDER_COLOR,
  "3rd Round": EVENT_BORDER_COLOR,
  "Final Round": EVENT_BORDER_COLOR,
  "default": EVENT_BORDER_COLOR
};
