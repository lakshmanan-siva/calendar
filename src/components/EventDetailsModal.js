// src/components/EventDetailsModal.jsx

import React from 'react';
import moment from 'moment';
import {
  Modal,
  Box,
  Typography,
  Button,
  IconButton,
  Divider
} from '@mui/material';
import {
  InsertDriveFile as InsertDriveFileIcon,
  Visibility as VisibilityIcon,
  Download as DownloadIcon
} from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { EventModalBox } from '../styles/CalendarStyles'; // Assuming EventModalBox provides basic modal positioning/background

const EventDetailsModal = ({ event, open, onClose }) => {
  if (!event) return null;

  const candidateFirstName = event.user_det?.candidate?.candidate_firstName || 'N/A';
  const jobRole = event.user_det?.job_id?.jobRequest_Role || 'N/A';
  const handledByFirstName = event.user_det?.handled_by?.firstName || '-';

  const interviewDate = event.start ? moment(event.start).format('DD MMMYYYY') : 'N/A';
  const interviewTime = event.start && event.end ?
    `${moment(event.start).format('hh:mm A')} - ${moment(event.end).format('hh:mm A')}` : 'N/A';

  const meetLink = event.link;
  const resumeLink = event.resume_link;
  const aadharLink = event.aadhar_link;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="event-details-modal-title"
      aria-describedby="event-details-modal-description"
    >
      {/* EventModalBox will now house the entire bordered content directly */}
      <EventModalBox
        sx={{
          p: 0, // Reset padding if EventModalBox has default padding inside
          border: '1px solid #e0e0e0', // Keep border for entire content as requested
          borderRadius: 2, // Matches overall modal styling
          backgroundColor: 'white', // Ensure background is white inside the border
          boxShadow: 3, // Optional: add a subtle shadow
          width: 450, // Set a fixed width as seen in the image
          outline: 'none', // Remove focus outline
          // Center the modal. EventModalBox might already do this, but adding here for explicit control
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Close Button at top right, now in primary color */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'primary.main', // Changed to primary color
            zIndex: 1 // Ensure it's above other content
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Content Box with padding */}
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: "space-evenly", gap: 2 }}>
            {/* Left Column - Text Details and Attachments */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1"><strong>Interview With:</strong> {candidateFirstName}</Typography>
              <Typography variant="body1"><strong>Position:</strong> {jobRole}</Typography>
              <Typography variant="body1"><strong>Created By:</strong> {handledByFirstName}</Typography>
              <Typography variant="body1"><strong>Interview Date:</strong> {interviewDate}</Typography>
              <Typography variant="body1"><strong>Interview Time:</strong> {interviewTime}</Typography>
              <Typography variant="body1"><strong>Interview Via:</strong> Google Meet</Typography>

              {/* Attachments Section - Resume and Aadhar as small, blue-outlined "buttons" */}
              <Box sx={{ mt: 3 }}>
                {resumeLink && (
                  <Box
                    sx={{
                      mt: 1,
                      p: 0.5, // Reduced padding for smaller size
                      border: "1px solid #357ae8", // Blue outline as specified
                      color: "#357ae8", // Text color
                      borderRadius: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1,
                      fontSize: '0.875rem' // Smaller font size for content
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <InsertDriveFileIcon fontSize="small" />
                      <Typography variant="body2" sx={{ fontSize: 'inherit' }}>Resume.docx</Typography>
                    </Box>
                    <Box>
                      <IconButton onClick={() => window.open(resumeLink, '_blank')} sx={{ color: 'primary.main', p: 0.5 }} size="small"><VisibilityIcon fontSize="small" /></IconButton>
                      <IconButton href={resumeLink} download sx={{ color: 'primary.main', p: 0.5 }} size="small"><DownloadIcon fontSize="small" /></IconButton>
                    </Box>
                  </Box>
                )}

                {aadharLink && (
                  <Box
                    sx={{
                      mt: 1,
                      p: 0.5, // Reduced padding for smaller size
                      border: "1px solid #357ae8", // Blue outline as specified
                      color: "#357ae8", // Text color
                      borderRadius: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.875rem' // Smaller font size for content
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <InsertDriveFileIcon fontSize="small" />
                      <Typography variant="body2" sx={{ fontSize: 'inherit' }}>Aadharcard</Typography>
                    </Box>
                    <Box>
                      <IconButton onClick={() => window.open(aadharLink, '_blank')} sx={{ color: 'primary.main', p: 0.5 }} size="small"><VisibilityIcon fontSize="small" /></IconButton>
                      <IconButton href={aadharLink} download sx={{ color: 'primary.main', p: 0.5 }} size="small"><DownloadIcon fontSize="small" /></IconButton>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>

            {/* Vertical Divider */}
            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

            {/* Right Column - Google Meet */}
            <Box sx={{
              flex: 0.5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center', // Center content vertically
            }}>
              <img
                src="download.jpg" // Using your specified local image
                alt="Google Meet"
                style={{ width: "100%", maxWidth: 100, height: "auto", marginBottom: 8 }}
              />
              {meetLink && (
                <Button
                  variant="contained" // Kept as contained because the image shows a filled blue button for JOIN
                  color="primary"
                  onClick={() => window.open(meetLink, '_blank')}
                  fullWidth
                >
                  JOIN
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </EventModalBox>
    </Modal>
  );
};

export default EventDetailsModal;