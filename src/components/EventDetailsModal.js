import moment from 'moment';
import {
  Modal,
  Box,
  Typography,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Button,
} from '@mui/material';
import {
  Event as EventIcon,
  Person as PersonIcon,
  Work as WorkIcon,
  Schedule as ScheduleIcon,
  Grade as GradeIcon,
  Link as LinkIcon
} from '@mui/icons-material';
import { EventModalBox, eventColors } from '../styles/calendarStyles'; 
import { alpha } from '@mui/material/styles'; 

const EventDetailsModal = ({ event, open, onClose }) => {
  if (!event) return null;

  const eventColor = event.color || eventColors.default; 

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="event-details-modal-title"
      aria-describedby="event-details-modal-description"
    >
      <EventModalBox eventcolor={eventColor}>
        <div className="modal-header">
          <Typography id="event-details-modal-title" variant="h5" component="h2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EventIcon /> {event.summary}
          </Typography>
          <Chip
            label={event.type}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              marginTop: 1
            }}
          />
        </div>

        <Box sx={{ p: 3 }}>
          <List dense>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: alpha(eventColor, 0.2), color: eventColor }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${event.user_det?.candidate?.candidate_firstName} ${event.user_det?.candidate?.candidate_lastName}`}
                secondary={
                  <>
                    <Typography variant="body2" color="text.secondary">
                      {event.user_det?.candidate?.candidate_email}
                    </Typography>
                    {event.user_det?.candidate?.candidateComment && (
                      <Typography variant="caption" sx={{ display: 'block', fontStyle: 'italic' }}>
                        "{event.user_det?.candidate?.candidateComment}"
                      </Typography>
                    )}
                  </>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" sx={{ my: 1 }} />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: alpha(eventColor, 0.2), color: eventColor }}>
                  <PersonIcon /> 
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${event.user_det?.handled_by?.firstName} ${event.user_det?.handled_by?.lastName}`}
                secondary={
                  <>
                    <Typography variant="body2" color="text.secondary">
                      {event.user_det?.handled_by?.userEmail}
                    </Typography>
                    <Chip label={event.user_det?.handled_by?.userRole} size="small" sx={{ mt: 0.5 }} />
                  </>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" sx={{ my: 1 }} />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: alpha(eventColor, 0.2), color: eventColor }}>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" fontWeight="medium">
                    Job: {event.user_det?.job_id?.jobRequest_Title} ({event.user_det?.job_id?.jobRequest_Role})
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" color="text.secondary">
                    Skills: {event.user_det?.job_id?.jobRequest_KeySkills}
                  </Typography>
                }
              />
            </ListItem>

            <Divider variant="inset" component="li" sx={{ my: 1 }} />

            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: alpha(eventColor, 0.2), color: eventColor }}>
                  <ScheduleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" fontWeight="medium">
                    Time: {moment(event.start).format('dddd, MMMM Do YYYY')}
                  </Typography>
                }
                secondary={`${moment(event.start).format('h:mm A')} - ${moment(event.end).format('h:mm A')}`}
              />
            </ListItem>

            {event.score && (
              <>
                <Divider variant="inset" component="li" sx={{ my: 1 }} />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: alpha(eventColor, 0.2), color: eventColor }}>
                      <GradeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight="medium">
                        Evaluation Score
                      </Typography>
                    }
                    secondary={Object.entries(event.score).map(([key, val]) =>
                      <Chip key={key} label={`${key.toUpperCase()}: ${val}`} size="small" sx={{ mr: 0.5 }} />
                    )}
                  />
                </ListItem>
              </>
            )}

            {event.link && (
              <>
                <Divider variant="inset" component="li" sx={{ my: 1 }} />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: alpha(eventColor, 0.2), color: eventColor }}>
                      <LinkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" fontWeight="medium">
                        Meeting Link
                      </Typography>
                    }
                    secondary={
                      <Button
                        variant="text"
                        size="small"
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<LinkIcon />}
                        sx={{ p: 0, justifyContent: 'flex-start', color: eventColor }} // Use eventColor for link
                      >
                        Click to join meeting
                      </Button>
                    }
                  />
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </EventModalBox>
    </Modal>
  );
};

export default EventDetailsModal;