import React, { useState } from "react";

import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form({
  name: pName,
  interviewers,
  interviewer: pInterviewer,
  onSave,
  onCancel
}) {
  const [name, setName] = useState(pName || "");
  const [interviewer, setInterviewer] = useState(pInterviewer || null);

  function onChangeName(e) {
    setName(e.target.value);
  }

  function onChangeInterviewer(interviewerId) {
    setInterviewer(interviewerId);
  }

  function reset() {
    setName("");
    setInterviewer(null);
    onCancel();
  }

  function onSubmit(e) {
    e.preventDefault();
    onSave(name, interviewer);
  }
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={onChangeName}
          />
        </form>
        <InterviewerList
          interviewers={interviewers}
          value={interviewer}
          onChange={onChangeInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={reset}>
            Cancel
          </Button>
          <Button confirm onClick={onSubmit}>
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
