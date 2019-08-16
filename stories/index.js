import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import { days, interviewers } from "testData";
import Button from "components/Button";
import DayListItem from "components/DayListItem";
import DayList from "components/DayList";
import InterviewerListItem from "components/InterviewerListItem";
import InterviewerList from "components/InterviewerList";
import Appointment from "components/Appointment";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Confirm from "components/Appointment/Confirm";
import Status from "components/Appointment/Status";
import Error from "components/Appointment/Error";
import Form from "components/Appointment/Form";

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));

storiesOf("DayListItem", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => <DayListItem name="Unselected" spots={4} />)
  .add("Selected", () => <DayListItem name="Selected" spots={4} selected />)
  .add("Full", () => <DayListItem name="Full" spots={0} />)
  .add("Clickable", () => (
    <DayListItem name="Clickable" spots={4} setDay={action("set-day")} />
  ));

storiesOf("DayList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Monday", () => (
    <DayList days={days} day={"Monday"} setDay={action("set-day")} />
  ))
  .add("Tuesday", () => (
    <DayList days={days} day={"Tuesday"} setDay={action("set-day")} />
  ));

storiesOf("InterviewerListItem")
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Unselected", () => (
    <InterviewerListItem
      name={interviewers[0].name}
      avatar={interviewers[0].avatar}
    />
  ))
  .add("Selected", () => (
    <InterviewerListItem
      name={interviewers[0].name}
      avatar={interviewers[0].avatar}
      selected
    />
  ))
  .add("Clickable", () => (
    <InterviewerListItem
      name={interviewers[0].name}
      avatar={interviewers[0].avatar}
      setInterviewer={e => action("set-interviewer")(interviewers[0].id)}
    />
  ));

storiesOf("InterviewerList", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Initial", () => (
    <InterviewerList
      interviewers={interviewers}
      onChange={action("setInterviewer")}
    />
  ))
  .add("Preselected", () => (
    <InterviewerList
      interviewers={interviewers}
      value={3}
      onChange={action("setInterviewer")}
    />
  ));

storiesOf("Appointment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Appointment", () => <Appointment />)
  .add("Appointment with time", () => <Appointment time="12pm" />)
  .add("Header", () => <Header time="12pm" />)
  .add("Empty", () => <Empty onAdd={action("on-add")} />)
  .add("Show", () => (
    <Show
      student="Mike Smith"
      interviewer={interviewers[1]}
      onEdit={action("on-edit")}
      onDelete={action("on-delete")}
    />
  ))
  .add("Confirm", () => (
    <Confirm
      message="Delete the appointment?"
      onCancel={action("on-cancel")}
      onConfirm={action("on-confirm")}
    />
  ))
  .add("Status", () => <Status message="Deleting" />)
  .add("Error", () => (
    <Error
      message="Could not delete the appointment"
      onClose={action("on-close")}
    />
  ))
  .add("Form Create", () => (
    <Form
      name=""
      interviewers={interviewers}
      interviewer={null}
      onSave={action("on-save")}
      onCancel={action("on-cancel")}
    />
  ))
  .add("Form Edit", () => (
    <Form
      name="Student Best"
      interviewers={interviewers}
      interviewer={interviewers[0].id}
      onSave={action("on-save")}
      onCancel={action("on-cancel")}
    />
  ))
  .add("Appointment Empty", () => (
    <>
      <Appointment id={1} time="12pm" />
      <Appointment id="last" time="1pm" />
    </>
  ))
  .add("Appointment Booked", () => (
    <>
      <Appointment
        id={1}
        time="12pm"
        interview={{ student: "Lydia Lunch", interviewer: interviewers[0] }}
      />
      <Appointment id="last" time="1pm" />
    </>
  ));
