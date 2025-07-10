// src/components/CalendarNavBar.jsx

import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/system'; 

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  textTransform: 'none',
  border: 'none',      
  borderRadius: 0,     
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightMedium,
  padding: theme.spacing(1, 2),

  '&.Mui-selected': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main, 
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    '&&:hover': {
      backgroundColor: 'transparent', 
    },
  },

  '&:hover': {
    backgroundColor: theme.palette.action.hover, 
  },
}));

const CalendarToolbar = ({ view, onViewChange }) => {
  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      onViewChange(newView);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleViewChange}
        aria-label="calendar view"
        sx={{
          border: 'none',
          '& .MuiToggleButtonGroup-grouped': {
            border: 0, 
            borderRadius: 0,
            margin: '0 4px', 
            '&:not(:first-of-type)': {
              borderRadius: 0,
            },
            '&:first-of-type': {
              borderRadius: 0,
            },
          },
        }}
      >
        <StyledToggleButton value="day" aria-label="day view">
          Day
        </StyledToggleButton>
        <StyledToggleButton value="week" aria-label="week view">
          Week
        </StyledToggleButton>
        <StyledToggleButton value="month" aria-label="month view">
          Month
        </StyledToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default CalendarToolbar;