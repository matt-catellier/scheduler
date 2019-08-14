import React from "react";

import InterviewerListItem from "components/InterviewerListItem";

import "components/InterviewerList.scss";

const InterviewerList = ({ interviewers, value, onChange }) => (
  <section class="interviewers">
    <h4 class="interviewers__header text--light">Interviewer</h4>
    <ul class="interviewers__list">
      {interviewers.map(i => (
        <InterviewerListItem
          name={i.name}
          avatar={i.avatar}
          selected={value && value === i.id}
          setInterviewer={() => onChange(i.id)}
        />
      ))}
    </ul>
  </section>
);

export default InterviewerList;
