import { VibrantToolbar, ViewButton, DEFAULT_EVENT_BACKGROUND, EVENT_BORDER_COLOR } from '../styles/CalendarStyles';
import moment from 'moment';


export const initialEvents = [
  {
    id: 1,
    title: "1st Round: Mohan Raj (Django Dev)",
    summary: "1st Round Interview",
    desc: "Initial screening interview for Django Developer position",
    start: new Date(new Date().setHours(10, 0, 0)),
    end: new Date(new Date().setHours(10, 40, 0)),
    attendees: null,
    status: null,
    comment: null,
    score: { "P": 8 },
    link: "https://meet.google.com/abc-xyz-123",
    resume_link: "https://example.com/mohan_raj_resume.pdf", // Added for popup
    aadhar_link: "https://example.com/mohan_raj_aadhar.pdf", // Added for popup
    user_det: {
      id: 1,
      question_score: null,
      status: null,
      candidate: {
        id: 1,
        candidate_firstName: "Mohan",
        candidate_lastName: "Raj",
        candidateGender: "male",
        candidateComment: "Strong backend skills",
        candidate_email: "mohanrajk@dataterrain.com"
      },
      handled_by: {
        id: 3,
        last_login: null,
        userEmail: "vinodhini_hr@dataterrain.com",
        username: "vinodhini_hr",
        firstName: "Vinodhini",
        lastName: "HR",
        userRole: "hr_employee"
      },
      job_id: {
        id: 11,
        jobRequest_Title: "Python Developer", // Changed to match "Python Developer" from image
        jobRequest_Role: "Software Engineer",
        jobRequest_KeySkills: "Python, Django, REST APIs",
        jobRequest_Description: "Looking for experienced Django developer"
      }
    },
    type: "1st Round",
    color: EVENT_BORDER_COLOR
  },
  {
    id: 2,
    title: "Tech Test: Mohan Raj",
    summary: "Technical Assessment",
    desc: "Coding test for Django Developer position",
    start: new Date(new Date().setHours(12, 0, 0)), // Changed time to match Day.jpg
    end: new Date(new Date().setHours(12, 30, 0)), // Changed time to match Day.jpg
    attendees: null,
    status: null,
    comment: null,
    score: { "p": 7 },
    link: "https://hackerrank.com/test-123",
    user_det: {
      id: 1,
      question_score: null,
      status: null,
      candidate: {
        id: 1,
        candidate_firstName: "Mohan",
        candidate_lastName: "Raj",
        candidateGender: "male",
        candidateComment: "",
        candidate_email: "mohanrajk@dataterrain.com"
      },
      handled_by: {
        id: 3,
        last_login: null,
        userEmail: "vinodhini_hr@dataterrain.com",
        username: "vinodhini_hr",
        firstName: "Geetha", // Used Geetha for consistency with images
        lastName: "HR",
        userRole: "hr_employee"
      },
      job_id: {
        id: 11,
        jobRequest_Title: "Python Developer", // Changed to match "Python Developer" from image
        jobRequest_Role: "Software Engineer",
        jobRequest_KeySkills: "Python, Django, REST APIs",
        jobRequest_Description: "Looking for experienced Django developer"
      }
    },
    type: "Test",
    color: EVENT_BORDER_COLOR
  },
  {
    id: 3,
    title: "2nd Round: Mohan Raj (Tech Lead)",
    summary: "Technical Interview",
    desc: "In-depth technical interview with engineering team",
    start: new Date(new Date().setHours(14, 0, 0)), // Changed time to match Day.jpg
    end: new Date(new Date().setHours(15, 0, 0)), // Changed time to match Day.jpg
    attendees: null,
    status: null,
    comment: null,
    score: { "o": 6 },
    link: "https://meet.google.com/def-uvw-456",
    user_det: {
      id: 1,
      question_score: null,
      status: null,
      candidate: {
        id: 1,
        candidate_firstName: "Mohan",
        candidate_lastName: "Raj",
        candidateGender: "male",
        candidateComment: "",
        candidate_email: "mohanrajk@dataterrain.com"
      },
      handled_by: {
        id: 3,
        last_login: null,
        userEmail: "vinodhini_hr@dataterrain.com",
        username: "vinodhini_hr",
        firstName: "Geetha", // Used Geetha for consistency with images
        lastName: "HR",
        userRole: "hr_employee"
      },
      job_id: {
        id: 11,
        jobRequest_Title: "Python Developer", // Changed to match "Python Developer" from image
        jobRequest_Role: "Software Engineer",
        jobRequest_KeySkills: "Python, Django, REST APIs",
        jobRequest_Description: "Looking for experienced Django developer"
      }
    },
    type: "2nd Round",
    color: EVENT_BORDER_COLOR
  },
  {
    id: 4,
    title: "3rd Round: Mohan Raj (Project Manager)",
    summary: "3rd Round Interview",
    desc: "Discussion with project manager",
    start: moment().add(0, 'days').set({ hour: 10, minute: 0 }).toDate(), // Today, 10 AM - Event 1 of multiple, aligned with images
    end: moment().add(0, 'days').set({ hour: 11, minute: 0 }).toDate(), // Today, 11 AM
    link: "https://meet.google.com/pqr-stu-789",
    resume_link: "https://example.com/mohan_raj_resume.pdf",
    user_det: {
      handled_by: { firstName: "Geetha", lastName: "HR", userEmail: "geetha@dataterrain.com", userRole: "hr_employee" },
      candidate: { candidate_firstName: "Mohan", candidate_lastName: "Raj", candidate_email: "mohanrajk@dataterrain.com" },
      job_id: { jobRequest_Title: "Python Developer", jobRequest_Role: "Team Lead", jobRequest_KeySkills: "Python, Project Management" }
    },
    type: "3rd Round",
    color: EVENT_BORDER_COLOR
  },
  {
    id: 5,
    title: "Final Round: Mohan Raj (Director)",
    summary: "Final Round Interview",
    desc: "Final interview with the Director",
    start: moment().add(0, 'days').set({ hour: 10, minute: 0 }).toDate(), // Today, 10 AM, will be grouped if on same day as event 4
    end: moment().add(0, 'days').set({ hour: 11, minute: 0 }).toDate(), // Today, 11 AM
    link: "https://meet.google.com/vwx-yza-012",
    user_det: {
      handled_by: { firstName: "Geetha", lastName: "HR", userEmail: "geetha@dataterrain.com", userRole: "hr_employee" },
      candidate: { candidate_firstName: "Mohan", candidate_lastName: "Raj", candidate_email: "mohanrajk@dataterrain.com" },
      job_id: { jobRequest_Title: "Python Developer", jobRequest_Role: "Director", jobRequest_KeySkills: "Leadership, Strategy" }
    },
    type: "Final Round",
    color: EVENT_BORDER_COLOR
  },
  {
    id: 6,
    title: "Mock Interview: Jane Doe",
    summary: "Practice Session",
    desc: "Mock interview for new joiner",
    start: moment().add(1, 'day').set({ hour: 10, minute: 30 }).toDate(), // Tomorrow, 10:30 AM
    end: moment().add(1, 'day').set({ hour: 11, minute: 30 }).toDate(),
    link: "https://meet.google.com/mno-pqr-345",
    resume_link: "https://example.com/jane_doe_resume.pdf",
    user_det: {
      handled_by: { firstName: "Vinodhini", lastName: "HR", userEmail: "vinodhini_hr@dataterrain.com", userRole: "hr_employee" },
      candidate: { candidate_firstName: "Jane", candidate_lastName: "Doe", candidate_email: "jane.doe@example.com" },
      job_id: { jobRequest_Title: "React Developer", jobRequest_Role: "Software Engineer", jobRequest_KeySkills: "React, JavaScript" }
    },
    type: "Test",
    color: EVENT_BORDER_COLOR
  },
  {
    id: 7,
    title: "Client Meeting: Project X",
    summary: "Project X Meeting",
    desc: "Meeting with client for Project X",
    start: moment().add(0, 'days').set({ hour: 10, minute: 0 }).toDate(), // Today, 10 AM, will be grouped if on same day as events 4, 5
    end: moment().add(0, 'days').set({ hour: 11, minute: 0 }).toDate(), // Today, 11 AM
    link: "https://meet.google.com/abc-def-ghi",
    user_det: {
      handled_by: { firstName: "Geetha", lastName: "HR", userEmail: "geetha@dataterrain.com", userRole: "hr_employee" },
      candidate: { candidate_firstName: "Client", candidate_lastName: "X", candidate_email: "client.x@example.com" },
      job_id: { jobRequest_Title: "Client Project", jobRequest_Role: "Project Stakeholder", jobRequest_KeySkills: "Client Relations" }
    },
    type: "Client Meeting",
    color: EVENT_BORDER_COLOR
  }
];