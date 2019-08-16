export const days = [
  { id: 1, name: "Monday", spots: 2 },
  { id: 2, name: "Tuesday", spots: 5 },
  { id: 3, name: "Wednesday", spots: 0 }
];

export const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

export const appointments = [
  {
    id: 1,
    time: "12pm"
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: interviewers[0]
    }
  },
  {
    id: 3,
    time: "2pm",
    interview: {
      student: "Paul John",
      interviewer: interviewers[2]
    }
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "George Timbly",
      interviewer: interviewers[3]
    }
  },
  {
    id: 5,
    time: "4pm",
    interview: {
      student: "George Timbly",
      interviewer: interviewers[0]
    }
  },
  {
    id: 6,
    time: "5pm"
  }
];
