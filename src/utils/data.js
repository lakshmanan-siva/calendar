import { eventColors } from '../styles/calendarStyles';

export const initialEvents = [
  {
    id: 1,
    summary: "1st Round",
    desc: "1st Round",
    start: new Date("2025-06-25T18:00:00+05:30"),
    end: new Date("2025-06-25T18:40:00+05:30"),
    attendees: null,
    status: null,
    comment: null,
    score: { "P": 8 },
    link: "http://www.hhh.com",
    user_det: {
      id: 1,
      question_score: null,
      status: null,
      candidate: {
        id: 1,
        candidate_firstName: "mohan",
        candidate_lastName: "raj",
        candidateGender: "male",
        candidateComment: "",
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
        jobRequest_Title: "django developer",
        jobRequest_Role: "software engineer",
        jobRequest_KeySkills: "django",
        jobRequest_Description: "asfffasf"
      }
    },
    job_id: {
      id: 11,
      jobRequest_Title: "django developer",
      jobRequest_Role: "software engineer",
      jobRequest_KeySkills: "django",
      jobRequest_Description: "asfffasf"
    },
    type: "1st Round",
    color: eventColors["1st Round"]
  },
  {
    id: 2,
    summary: "Test",
    desc: "Test",
    start: new Date("2025-06-29T18:00:00+05:30"),
    end: new Date("2025-06-29T18:40:00+05:30"),
    attendees: null,
    status: null,
    comment: null,
    score: { "p": 7 },
    link: "http://www.hhh.com",
    user_det: {
      id: 1,
      question_score: null,
      status: null,
      candidate: {
        id: 1,
        candidate_firstName: "mohan",
        candidate_lastName: "raj",
        candidateGender: "male",
        candidateComment: "",
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
        jobRequest_Title: "django developer",
        jobRequest_Role: "software engineer",
        jobRequest_KeySkills: "django",
        jobRequest_Description: "asfffasf"
      }
    },
    job_id: {
      id: 11,
      jobRequest_Title: "django developer",
      jobRequest_Role: "software engineer",
      jobRequest_KeySkills: "django",
      jobRequest_Description: "asfffasf"
    },
    type: "Test",
    color: eventColors["Test"]
  },
  {
    id: 3,
    summary: "2nd Round",
    desc: "2nd Round",
    start: new Date("2025-06-21T20:00:00+05:30"),
    end: new Date("2025-06-21T21:00:00+05:30"),
    attendees: null,
    status: null,
    comment: null,
    score: { "o": 6 },
    link: "http://www.hhh.com",
    user_det: {
      id: 1,
      question_score: null,
      status: null,
      candidate: {
        id: 1,
        candidate_firstName: "mohan",
        candidate_lastName: "raj",
        candidateGender: "male",
        candidateComment: "",
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
        jobRequest_Title: "django developer",
        jobRequest_Role: "software engineer",
        jobRequest_KeySkills: "django",
        jobRequest_Description: "asfffasf"
      }
    },
    job_id: {
      id: 11,
      jobRequest_Title: "django developer",
      jobRequest_Role: "software engineer",
      jobRequest_KeySkills: "django",
      jobRequest_Description: "asfffasf"
    },
    type: "2nd Round",
    color: eventColors["2nd Round"]
  }
];