// src/components/DailyEventsPopover.jsx (Use the version from my LAST complete response)
import React from 'react';
import { Popover, Box, Typography, Button, IconButton, List, ListItem, ListItemText, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import moment from 'moment';

const DailyEventsPopover = ({ id, open, anchorEl, onClose, events, onSelectEvent }) => {
  if (!events || events.length === 0) {
    return null;
  }

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 350,
          maxHeight: 400,
          overflowY: 'auto',
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6" component="h3" sx={{ mr: 2 }}>
            Events on {moment(events[0].start).format('MMM D, YYYY')}
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />

        <List dense disablePadding>
          {events.map((event, index) => (
            <React.Fragment key={event.id}>
              <ListItem
                button
                onClick={() => {
                  onClose(); // Close the popover first
                  onSelectEvent(event); // Then open the detailed modal
                }}
                sx={{ py: 0.5, px: 1, '&:hover': { backgroundColor: 'action.hover' } }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" component="span" fontWeight="medium" color="text.primary">
                      {event.user_det?.candidate?.candidate_firstName} {event.user_det?.candidate?.candidate_lastName}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="caption" display="block" color="text.secondary">
                        {event.summary}
                      </Typography>
                      <Typography variant="caption" display="block" color="text.secondary">
                        {moment(event.start).format('h:mm A')} - {moment(event.end).format('h:mm A')}
                      </Typography>
                    </>
                  }
                />
              </ListItem>

              {(event.link || event.resume_link || event.aadhar_link) && (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, ml: 2, mb: 1 }}>
                  {event.link && (
                    <Button
                      variant="text"
                      size="small"
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ textTransform: 'none', justifyContent: 'flex-start', p: '2px 8px' }}
                    >
                      Join Meeting
                    </Button>
                  )}
                  {event.resume_link && (
                    <Button
                      variant="text"
                      size="small"
                      href={event.resume_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<InsertDriveFileIcon />}
                      sx={{ textTransform: 'none', justifyContent: 'flex-start', p: '2px 8px' }}
                    >
                      Resume
                    </Button>
                  )}
                  {event.aadhar_link && (
                    <Button
                      variant="text"
                      size="small"
                      href={event.aadhar_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<InsertDriveFileIcon />}
                      sx={{ textTransform: 'none', justifyContent: 'flex-start' }}
                    >
                      Aadhar
                    </Button>
                  )}
                </Box>
              )}

              {index < events.length - 1 && <Divider component="li" sx={{ my: 0.5 }} />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </Popover>
  );
};

export default DailyEventsPopover;