import React, { useState } from "react";

import "components/Application.scss";
import { days, appointments } from "testData";
import DayList from "components/DayList";
import Appointment from "components/Appointment";

export default function Application(props) {
  console.log(
    new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(Date.now())
  );
  const [day, setDay] = useState(
    new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(Date.now())
  );
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={days} day={day} setDay={day => setDay(day)} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments.map(a => (
          <Appointment key={a.id} {...a} />
        ))}
      </section>
    </main>
  );
}
