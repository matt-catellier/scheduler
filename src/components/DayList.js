import React from "react";

import DayListItem from "components/DayListItem";

const DayList = ({ days, day, setDay }) => (
  <ul>
    {days.map((d, i) => (
      <DayListItem
        key={i}
        name={d.name}
        spots={d.spots}
        setDay={setDay}
        selected={d.name === day}
      />
    ))}
  </ul>
);

export default DayList;
