// src/components/CalendarNavBar.jsx

import React from 'react';
import { Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { styled } from '@mui/system'; // Ensure 'styled' is imported from '@mui/system'

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  textTransform: 'none', // Prevent uppercase transformation
  border: 'none',        // Remove all default borders
  borderRadius: 0,       // Remove default border radius
  backgroundColor: 'transparent', // Ensure no background for unselected state
  color: theme.palette.text.primary, // Default text color for unselected tabs
  fontWeight: theme.typography.fontWeightMedium,
  padding: theme.spacing(1, 2),

  // Style for the selected state
  '&.Mui-selected': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main, 
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    '&&:hover': {
      backgroundColor: 'transparent', 
    },
  },

  '&:hover': {
    backgroundColor: theme.palette.action.hover, // Subtle hover effect
    // If you want the text to become primary color on hover (even when not selected), add:
    // color: theme.palette.primary.main,
  },
}));

const CalendarToolbar = ({ view, onViewChange }) => {
  const handleViewChange = (event, newView) => {
    if (newView !== null) { // Ensures a button is always selected
      onViewChange(newView);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}> {/* Centering the navigation */}
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleViewChange}
        aria-label="calendar view"
        sx={{
          // Remove the default ToggleButtonGroup borders entirely
          border: 'none',
          '& .MuiToggleButtonGroup-grouped': {
            border: 0, // Remove individual button borders within the group
            borderRadius: 0, // Ensure no rounded corners on individual buttons
            margin: '0 4px', // Add a small margin between buttons for separation if desired
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