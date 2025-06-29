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

export const StyledEvent = styled('div')(({ theme, eventcolor }) => ({
  backgroundColor: eventcolor || eventColors.default,
  color: 'white',
  padding: '6px 8px',
  borderRadius: '8px',
  height: '100%',
  overflow: 'hidden',
  fontSize: '13px',
  borderLeft: `4px solid ${darkenColor(eventcolor || eventColors.default, 20)}`, // Using the darkenColor helper
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  '& .event-title': {
    fontWeight: 'bold',
    marginBottom: '2px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  '& .event-time': {
    fontSize: '11px',
    opacity: 0.9,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
}));

export const eventColors = {
  "1st Round": "#FF6B6B",
  "Test": "#4ECDC4",
  "2nd Round": "#45B7D1",
  "3rd Round": "#FFA07A",
  "Final Round": "#98D8C8",
  "default": "#A4B0BE"
};

function darkenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00FF) - amt;
  const B = (num & 0x0000FF) - amt;
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  ).toString(16).slice(1)}`;
}