import React from "react";

import Confirm from "components/Appointment/Confirm";
import Empty from "components/Appointment/Empty";
import Error from "components/Appointment/Error";
import Form from "components/Appointment/Form";
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Status from "components/Appointment/Status";

import "components/Appointment/styles.scss";

export default function Appointment({ id, time, interview }) {
  return (
    <article className="appointment">
      <Header time={time} />
      {interview ? <Show {...interview} /> : <Empty />}
    </article>
  );
}
